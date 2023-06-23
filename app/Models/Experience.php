<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'jobdesk', 'type', 'year_start', 'year_end', 'address', 'company', 'position'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
