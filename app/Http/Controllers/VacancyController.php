<?php

namespace App\Http\Controllers;

use App\Models\Company\Vacancy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        $vacancy = Vacancy::where('user_id', $user->id)
            ->with('user:id,name')
            ->get();
        return Inertia::render('Company/Vacancy/VacancyIndex', [
            'vacancy' => $vacancy
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'jobdesk' => 'required|string|max:100',
            'job_offer' => 'required|string|max:100',
            'requirement' => 'required|string|max:100',
            'position' => 'required|string|max:100',
            'salary' => 'required|integer|max:100',
            'placement_location' => 'required|string|max:100',
        ]);

        $request->user()->vacancy()->create($validated);

        return redirect(route('vacancy.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
