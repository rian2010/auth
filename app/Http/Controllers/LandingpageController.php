<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingpageController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage/Landing', [
            'title' => 'TalentHub',
            'description' => 'Find Your Dream Job'
        ]);
    }
}
