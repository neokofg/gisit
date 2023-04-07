<?php

namespace App\Services;


use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthService
{
    public function create($input): String
    {
        try {
            return DB::transaction(function () use ($input){
                $user = User::create($input);
                return $user->createToken("API TOKEN")->plainTextToken;
            });
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
    public function auth($input): String
    {
        try {

            if(Auth::attempt($input))
            {
                $user = User::find(Auth::id());
                $tokenName = (string) $user->id;
                $user->tokens->where('name', $tokenName)->each->delete();
                $token = $user->createToken($user->id)->plainTextToken;
                return $token;
            }else{
                throw new BadRequestHttpException("Не удалось авторизироваться");
            }

        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
