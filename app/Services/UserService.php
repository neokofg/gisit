<?php

namespace App\Services;


use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Laragraph\Utils\BadRequestGraphQLException;
use PhpParser\Node\Scalar\String_;
use Qiwi\Api\BillPayments;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserService
{
//    public function buy($input): String
//    {
//        try {
//            return DB::transaction(function () use ($input){
//                $user = Auth::user();
//                $user->maps()->syncWithoutDetaching($input['map_id']);
//                return "Карта успешно куплена!";
//            });
//        } catch (BadRequestHttpException|ModelNotFoundException $e) {
//            throw new BadRequestGraphQLException($e->getMessage());
//        }
//    }
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

            $currentDate = Carbon::now(); // получаем текущую дату
            $oneHourLater = $currentDate->addHour(); // добавляем один час к текущей дате
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
                'account' => Auth::user()->id,
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
}
