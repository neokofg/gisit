<?php

use App\Http\Controllers\BotController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/6120276889:AAEQU2t2wCHYUpPkA0liwo9H2MbJ_uLNLO0/webhook', [BotController::class , 'botResponse']);
Route::get('/buymap', [\App\Http\Controllers\BuyController::class, 'money']);
