<?php

namespace App\Models\Student;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\AboutmeFactory;

class Aboutme extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference', 'description_aboutme'
    ];

    protected static function newFactory()
    {
        return AboutmeFactory::new();
    }
    public function user()
    {
        return $this->belongsTo(User::class); // Assuming there is a User model
    }
}
