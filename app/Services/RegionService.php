<?php

namespace App\Services;


use App\Models\Region;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Laragraph\Utils\BadRequestGraphQLException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class RegionService
{
    public function create($input): array
    {
        try {
            return DB::transaction(function () use ($input){
                $region = Region::find($input['id']);
                $filePath = 'public/regions/data/' . $region->file_path;

                if (!Storage::exists($filePath)) {
                    throw new \Exception("File not found: {$filePath}");
                }

                $data = json_decode(Storage::get($filePath), true);
                return [
                    'district' => $data['district'],
                    'coordinates' => json_encode($data['coordinates']),
                ];
            });
        } catch (BadRequestHttpException|ModelNotFoundException $e) {
            throw new BadRequestGraphQLException($e->getMessage());
        }
    }
}
