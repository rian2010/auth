<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TalentProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'nim',
        'prodi',
        'phone_number',
        'skill',
        'image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
