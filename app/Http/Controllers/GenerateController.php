<?php

namespace App\Http\Controllers;

use App\Models\Achivement;
use App\Models\Experience;
use App\Models\Organization;
use App\Models\Student\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class GenerateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $education = Education::where('user_id', $user->id)
            ->orderByDesc('id')
            ->get();

        $achivement = Achivement::where('user_id', $user->id)
            ->with('user:id,name')
            ->get();
        $experience = Experience::where('user_id', $user->id)
            ->orderByDesc('id')
            ->get();
        $organization = Organization::where('user_id', $user->id)
            ->orderByDesc('id')
            ->get();

        return Inertia::render('Talent/GenerateCV/generate', [
            'education' => $education,
            'achivement' => $achivement,
            'experience' => $experience,
            'organization' => $organization


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
    public function store(Request $request)
    {
        //
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
