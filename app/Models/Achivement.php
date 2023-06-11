<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Achivement extends Model
{
    use HasFactory;

    protected $fillable = [
        'description', 'position', 'achivement_date'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
