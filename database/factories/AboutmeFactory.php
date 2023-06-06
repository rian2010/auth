<?php

namespace Database\Factories;

use App\Models\Student\Aboutme;
use Illuminate\Database\Eloquent\Factories\Factory;


class AboutmeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Aboutme::class;


    public function definition(): array
    {
        return [
            'reference' => fake()->sentence(),
            'description_aboutme' => fake()->paragraph(2, true)
        ];
    }
}
