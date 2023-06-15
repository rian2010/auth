<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_organization', 'year_start', 'year_end', 'title', 'description_experience'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
