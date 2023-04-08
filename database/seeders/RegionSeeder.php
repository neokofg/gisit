<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $directory = storage_path('app/public/regions/data');
        $files = File::files($directory);

        foreach($files as $file) {
            $geometryJson = file_get_contents($file->getPathname());
            $geometryData = json_decode($geometryJson);

            // Сохранение данных в таблице
            $region = new Region();
            $region->district = $geometryData->district; // Замените 'region' на соответствующее свойство, если оно отличается
            $region->file_path = $file->getFilename();
            $region->save();
        }
    }
}
