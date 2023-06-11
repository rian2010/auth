<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyViewController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage/Company');
    }
}
