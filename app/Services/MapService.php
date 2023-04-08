<?php

namespace App\Services;


use App\Models\Map;
use App\Models\Scientist;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MapService
{
    public function create($input): Map
    {
        try {
            return DB::transaction(function () use ($input){
                $map = Map::create($input);
                if($input['price'] == 0){
                    $map->is_free = true;
                    $map->save();
                }
                $scientist = Scientist::find($input['scientist_id']);
                $scientist->maps()->syncWithoutDetaching($map->id);
                return $map->fresh();
            });
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
