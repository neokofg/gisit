<?php

namespace Database\Seeders;

use App\Models\Map;
use App\Models\Scientist;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Scientist::factory()->count(5)
            ->has(Map::factory()->count(rand(1,3)), 'maps')
            ->create();
        Scientist::factory()->count(3)->create();
    }
}
