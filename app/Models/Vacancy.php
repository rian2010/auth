<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    public $fillable = [
        'position', 'salary', 'registration_duration', 'job_offer', 'experience_level', 'placement_location', 'job_desk', 'requirement'
    ];
}
