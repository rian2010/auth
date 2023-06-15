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
            ->get();


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

    public function destroy(Request $request, Education $education): RedirectResponse
    {

        $education = Education::find($request->id);

        if ($education) {
            $education->delete();
            return redirect()->route('education')->with('message', 'Data berhasil dihapus');
        } else {
            return redirect()->route('education')->with('error', 'Data tidak ditemukan');
        }
    }
}
