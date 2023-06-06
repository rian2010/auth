<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Student\Aboutme;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;



class AboutmeController extends Controller
{
    public function index()
    {
        return Inertia::render('Talent/AboutMe/aboutme', [
            'aboutme' => Aboutme::with('user:id,name')->latest()->get()
        ]);
    }
    public function store(Request $request)
    {
        Aboutme::create([
            'reference' => $request->reference,
            'description_aboutme' => $request->description_aboutme,
        ]);
    }
}
