<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Student\Education;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EducationController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Talent/education/education',
            [
                'education' => Education::with('user:id,name')->latest()->get(),
            ]
        );
    }

    public function create()
    {
        return Inertia::render('Talent/education/file');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'mark' => 'required|integer|max:100',
            'major' => 'required|string|max:225',
            'year_start' => 'required|date|max:100',
            'year_end' => 'required|date|max:100',
            'last_education' => 'required|string|max:100',
        ]);

        $user = auth()->user(); // Get the authenticated user

        $user->education()->create($validated);

        return redirect(route('education'));
    }

    public function destroy(): RedirectResponse

    { {
            //
            $this->authorize('delete', $chirp);

            $chirp->delete();

            return redirect(route('chirps.index'));
        }
    }
}
