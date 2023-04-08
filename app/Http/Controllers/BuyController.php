<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class BuyController extends Controller
{
    public function money()
    {
        $user_id = $_GET['user_id'];
        $scientist_id = $_GET['scientist_id'];

        $user = User::find($user_id);
        $user->buyedScientists()->syncWithoutDetaching($scientist_id);

        return Redirect::away('https://getlet.ru/');
    }
}
