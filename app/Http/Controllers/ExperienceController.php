<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;


class ExperienceController extends Controller
{
    public function index(): Response
    {

        $user = Auth::user();
        $experience = Experience::where('user_id', $user->id)
            ->orderByDesc('id')
            ->paginate('6');
        return Inertia::render('Talent/Experience/ExperienceIndex', [
            'experience' => $experience,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Talent/Experience/ExperienceCreate');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'jobdesk' => 'required|string|max:100',
            'type' => 'required|string|max:100',
            'year_start' => 'required|date|max:100',
            'year_end' => 'required|date|max:100',
            'address' => 'required|string|max:100',
            'company' => 'required|string|max:100',
            'position' => 'required|string|max:100',
        ]);
        $request->user()->experience()->create($validated);

        return redirect(route('experience.index'));
    }
}
