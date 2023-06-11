<?php

namespace App\Models\Company;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;


    protected $fillable = [
        'jobdesk',
        'job_offer',
        'requirement',
        'position',
        'salary',
        'placement_location',
    ];
}
