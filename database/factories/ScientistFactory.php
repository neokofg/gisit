<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ScientistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $approved = [true,false];
        return [
            'user_id' => User::factory(['is_scientist' => 'true']),
            'document' => $this->faker->url(),
            'phone' => $this->faker->phoneNumber(),
            'telegram' => "@telegram",
            'is_approved' => $approved[rand(0,1)]
        ];
    }
}
