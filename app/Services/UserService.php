<?php

namespace App\Services;


use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserService
{
    public function buy($input): String
    {
        try {
            return DB::transaction(function () use ($input){
                $user = Auth::user();
                $user->maps()->syncWithoutDetaching($input['map_id']);
                return "Карта успешно куплена!";
            });
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
