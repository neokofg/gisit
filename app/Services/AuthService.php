<?php

namespace App\Services;


use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthService
{
    public function create($input): string
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

    // Другие методы, связанные с сертификатами
}
