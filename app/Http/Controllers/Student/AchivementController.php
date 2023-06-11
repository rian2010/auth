<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Achivement;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AchivementController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $achivement = Achivement::where('user_id', $user->id)
            ->with('user:id,name')
            ->get();
        return Inertia::render('Talent/Achivement/AchivementIndex', [
            'achivement' => $achivement,

        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Talent/Achivement/AchivementCreate');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'description' => 'required|string|max:225',
            'position' => 'required|string|max:225',
            'achivement_date' => 'required|date|max:225'
        ]);

        $request->user()->achivement()->create($validated);

        return redirect(route('achivement.index'));
    }

    public function destroy(Achivement $achivement): RedirectResponse
    {
        $this->authorize('delete', $achivement);

        $achivement->delete();

        return redirect(route('achivement.index'));
    }
}
