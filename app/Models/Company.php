<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'type_company', 'address', 'image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
