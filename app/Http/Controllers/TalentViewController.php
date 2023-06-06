<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentViewController extends Controller
{
    public function talent()
    {
        return Inertia::render('LandingPage/Talent');
    }
}
