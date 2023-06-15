<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
// use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {

        $user = Auth::user();
        $vacancy = Vacancy::where('user_id', $user->id)
            ->orderByDesc('id')
            ->get();
        return Inertia::render('Company/Vacancy/VacancyIndex', [
            'vacancy' => $vacancy
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Company/Vacancy/VacancyCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'salary' => 'required|integer|min:6',
            'registration_duration' => 'required|date|max:100',
            'job_offer' => 'required|string|max:255',
            'experience_level' => 'required|string|max:255',
            'placement_location' => 'required|string|max:255',
            'job_desk' => 'required|string|max:255',
            'requirement' => 'required|string|max:255',
        ]);

        $request->user()->vacancy()->create($validated);

        return redirect(route('vacancy.index'));
    }


    /**
     * Display the specified resource.
     */
    public function show(Vacancy $vacancy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vacancy $vacancy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vacancy $vacancy)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vacancy $vacancy)
    {
        //
    }
}
