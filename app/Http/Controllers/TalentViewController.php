<?php

namespace App\Http\Controllers;

use App\Models\Student\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TalentViewController extends Controller
{
    public function talent()
    {
        $user = Auth::user();
        $education = Education::where('user_id', $user->id)
            ->orderByDesc('id')
            ->get();
        return Inertia::render('LandingPage/Talent', [
            'education' => $education,

        ]);
    }
}
