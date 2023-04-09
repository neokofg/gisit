<?php

namespace App\Services;

use App\Models\Telegram;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Laragraph\Utils\BadRequestGraphQLException;
use Qiwi\Api\BillPayments;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserService
{
    protected $billPayments;

    public function __construct(BillPayments $billPayments)
    {
        $this->billPayments = $billPayments;
    }
    public function buy($input): String
    {
        try {
            $secretkey = config('qiwi.secret_key');
            $billPayments = new BillPayments($secretkey);

            $currentDate = Carbon::now();
            $oneHourLater = $currentDate->addHour();
            $iso8601String = $oneHourLater->toIso8601String();

            $uuid = Uuid::uuid4();
            $billId = $uuid->toString();

            $params = array(
                'scientist_id' => $input['scientist_id'],
                'billId' => $billId,
                'user_id' => Auth::id()
            );

            $fields = [
                'amount' => 1.00,
                'currency' => 'RUB',
                'comment' => 'test',
                'expirationDateTime' => $iso8601String,
                'email' => 'wotacc0809@gmail.com',
                'account' => Auth::id(),
                'successUrl' => 'https://getlet.ru/buymap/?'.http_build_query($params) ,
            ];

            /** @var \Qiwi\Api\BillPayments $billPayments */
            $response = $billPayments->createBill($billId, $fields);
            $payUrl = $response['payUrl'];
            return $payUrl;
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
    public function push($input): String
    {
        try {
            $user = User::find($input['user_id']);
            $telegram = Telegram::where('userbase_id',$user->id)->firstOrFail();
            $data = [
                'chat_id' => $telegram->user_id,
                'text' => $input['text'],
            ];
            $response = Http::get("https://api.telegram.org/bot6120276889:AAEQU2t2wCHYUpPkA0liwo9H2MbJ_uLNLO0/sendMessage?" . http_build_query($data));
            return "Успех!";
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
