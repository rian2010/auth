<?php

namespace App\Models\Student;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Education extends Model
{
    use HasFactory;


    protected $fillable = [
        'mark', 'major', 'year_start', 'year_end', 'last_education'
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
