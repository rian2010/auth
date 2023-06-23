<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Resources\EducationCollection;
use App\Models\Student\Education;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $education = Education::where('user_id', $user->id)
            ->orderByDesc('id')
            ->paginate('6');


        return Inertia::render('Talent/education/education', [
            'education' => $education,
        ]);
    }

    public function create(): Response
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

        // $user = auth()->user(); // Get the authenticated user

        $request->user()->education()->create($validated);

        return redirect(route('education.index'));
    }

    public function edit(Request $request, Education $education): Response
    {
        $education = $education->find($request->id);

        return Inertia::render('Talent/education/educationEdit', [
            'education' => $education
        ]);
    }


    public function update(Request $request, Education $education): RedirectResponse
    {
        $this->authorize('update', $education);

        $validated = $request->validate([
            'mark' => 'required|integer|max:100',
            'major' => 'required|string|max:225',
            'year_start' => 'required|date|max:100',
            'year_end' => 'required|date|max:100',
            'last_education' => 'required|string|max:100',
        ]);

        $education->update($validated);

        return redirect(route('education.index'));
    }

    public function destroy(Request $request, Education $education): RedirectResponse
    {

        $this->authorize('delete', $education);

        $education->delete();

        return redirect(route('education.index'));
    }
}
