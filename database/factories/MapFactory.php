<?php

namespace Database\Factories;

use App\Models\Scientist;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MapFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'start_date' => now()->addYears(rand(10,50)),
            'end_date' => now()->addYears(rand(50,100)),
            'region' => $this->faker->city(),
            'type' => 'temperature',
            'url' => $this->faker->url(),
            'price' => rand(1.00,2.00)
        ];
    }
}
