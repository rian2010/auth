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
        $education = Education::all();
        return Inertia::render('LandingPage/Talent', [
            'education' => $education,
        ]);
    }
}
