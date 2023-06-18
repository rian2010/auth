<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VacancyViewController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage/Vacancy', [
            'vacancy' => Vacancy::with(['user' => function ($query) {
                $query->select('id', 'name', 'role')->where('role', 'company');
            }])->latest()->get(),
        ]);
    }
}
