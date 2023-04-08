<?php

namespace App\Services;


use App\Models\Scientist;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ScientistService
{
    public function approve($input): String
    {
        try {
            $scientist = Scientist::find($input['id']);
            if($input['approve'] == true){
                $scientist->is_approved = true;
                $scientist->save();
                return "Ученый был сертифицирован";
            }else{
                return "Ученый не был сертифицирован";
            }
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
    public function create($input): Scientist
    {
        try {
            return DB::transaction(function() use($input) {
                $scientist = Scientist::create($input);
                $user = $scientist->user()->first();
                $user->is_scientist = true;
                $user->save();
                return $scientist->fresh();
            });
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
