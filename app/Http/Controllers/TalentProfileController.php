<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Student;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TalentProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Talent/Profile/ProfileIndex');
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
        $validated = $request->validate([
            'nim' => 'required|integer|min:8',
            'prodi' => 'required|string|min:225',
            'address' => 'required|string|min:225',
            'phone_number' => 'required|integer|min:8',
            'skill' => 'required|string',
            'image' => 'required|string',
        ]);

        $request->user()->talent()->create($validated);

        return redirect(route('talent.profile.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Talent/Profile/ProfileIndex', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        // $validated = $request->validate([
        //     'nim' => 'required|integer|min:8',
        //     'prodi' => 'required|string|min:225',
        //     'address' => 'required|string|min:225',
        //     'phone_number' => 'required|integer|min:8',
        //     'skill' => 'required|string',
        //     'image' => 'required|string',
        // ]);

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        // [
        //     'nim' => $request->nim,
        //     'prodi' => $request->prodi,
        //     'address' => $request->address,
        //     'phone_number' => $request->phone_number,
        //     'skill' => $request->skill,
        //     'imgae' => $request->nim,
        // ];

        $request->user()->save();

        // $request->user()->talent()->create($validated);


        return Redirect::route('talentprofile.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
