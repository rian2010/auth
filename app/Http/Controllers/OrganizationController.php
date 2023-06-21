<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $organization = Organization::where('user_id', $user->id)
            ->orderByDesc('id')
            ->paginate('6');
        return Inertia::render('Talent/Organization/Organization', [
            'organization' => $organization
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Talent/Organization/OrganizationCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_organization' => 'required|string|max:225',
            'year_start' => 'required|date|max:100',
            'year_end' => 'required|date|max:100',
            'title' => 'required|string|max:225',
            'description_experience' => 'required|string|max:225'
        ]);

        $request->user()->organization()->create($validated);

        return redirect(route('organization.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        //
    }
}
