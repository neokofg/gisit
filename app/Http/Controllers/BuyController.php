<?php

namespace App\Http\Controllers;

use App\Models\Scientist;
use App\Models\Telegram;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;

class BuyController extends Controller
{
    public function money()
    {
        $user_id = $_GET['user_id'];
        $scientist_id = $_GET['scientist_id'];

        $user = User::find($user_id);
        $user->buyedScientists()->syncWithoutDetaching($scientist_id);


        $scientist = Scientist::find($scientist_id);
        $scientistTelegram = Telegram::where('userbase_id',$scientist->user()->id)->first();
        if($scientistTelegram){
            $data = [
                'chat_id' => $scientistTelegram->user_id,
                'text' => 'У вас купили подписку'. "\n". "Покупатель: ". $user->name,
            ];
            $response = Http::get("https://api.telegram.org/bot6120276889:AAEQU2t2wCHYUpPkA0liwo9H2MbJ_uLNLO0/sendMessage?" . http_build_query($data));
        }

        return Redirect::away('https://getlet.ru/');
    }
}
