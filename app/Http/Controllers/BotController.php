<?php

namespace App\Http\Controllers;

use App\Models\Telegram;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class BotController extends Controller
{
    protected function botResponse()
    {
    try {
        $result = file_get_contents('php://input');
        $update = json_decode($result);

        if (isset($update->message->text)) {
            $user = Telegram::where('user_id', '=', $update->message->from->id)->first();
                if ($update->message->text == '/start') {
                    if ($user == null) {
                        $userdata = array(
                        'user_id' => $update->message->from->id,
                        'name' => '@' . $update->message->from->username,
                        'status' => 'started',
                    );
                    Telegram::create($userdata);

                    $data = [
                        'chat_id' => $update->message->chat->id,
                        'reply_to_message_id' => $update->message->message_id,
                        'text' => 'Здравствуйте! Я ваш личный помощник по платформе ЯПогода!!!'
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                    $data = [
                    'chat_id' => $update->message->chat->id,
                    'text' => 'Для начала войдите в свой аккаунт'
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                    $data = [
                    'chat_id' => $update->message->chat->id,
                    'text' => 'Введите свой email'
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                }else{
                    $userdata = array(
                        'status' => 'started',
                    );
                    Telegram::where('user_id', '=', $update->message->from->id)->update($userdata);
                    $data = [
                        'chat_id' => $update->message->chat->id,
                        'reply_to_message_id' => $update->message->message_id,
                        'text' => 'Для начала войдите в свой аккаунт'
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                    $data = [
                        'chat_id' => $update->message->chat->id,
                        'text' => 'Введите свой email'
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                }
                } else if ($user->status == 'started') {
                    $userdata = array(
                        'status' => 'password',
                        'input' => $update->message->text
                    );
                    Telegram::where('user_id', '=', $update->message->from->id)->update($userdata);
                    $data = [
                        'chat_id' => $update->message->chat->id,
                        'text' => 'Введите пароль',
                        'reply_to_message_id' => $update->message->message_id,
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                } else if ($user->status == 'password') {
                    $user = $user->fresh();
                    $email = $user->input;
                    $password = $update->message->text;
                    $formFields = [
                        'email' => $email,
                        'password' => $password
                    ];
                    if (Auth::once($formFields)) {
                        Telegram::where('user_id',Auth::user()->id)->update([
                            'status' => 'logined'
                        ]);
                        $data = [
                            'chat_id' => $update->message->chat->id,
                            'text' => 'Вы успешно вошли!',
                        ];
                        $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                        $data = [
                            'chat_id' => $update->message->chat->id,
                            'text' => 'Теперь к вам будут приходить PUSH-уведомления',
                        ];
                        $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                    } else {
                        $userdata = array(
                            'status' => 'started',
                            'input' => $update->message->text
                        );
                        Telegram::where('user_id', '=', $update->message->from->id)->update($userdata);
                        $data = [
                            'chat_id' => $update->message->chat->id,
                            'text' => 'Неправильный логин или пароль!',
                        ];
                        $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));$data = [
                            'chat_id' => $update->message->chat->id,
                            'text' => 'Попробуйте заново',
                        ];
                        $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                    }
                } else {
                    $data = [
                        'chat_id' => $update->message->chat->id,
                        'text' => 'Сброс: /start',
                    ];
                    $response = Http::get("https://api.telegram.org/bot6112927855:AAF-Rc36LyNcLeFuyjJw8vdEfDBw_QEnhMo/sendMessage?" . http_build_query($data));
                }
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
