<?php

namespace App\Http\Controllers;

use App\Models\Achivement;
use App\Models\Experience;
use App\Models\Organization;
use App\Models\Student\Education;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TalentViewController extends Controller
{
    public function index()
    {
        $talent = User::where('role', 'talent')
            ->orderByDesc('id')
            ->paginate('6');

        foreach ($talent as $user) {
            $user->education = Education::where('user_id', $user->id)
                ->orderByDesc('id')
                ->get();

            $user->achivement = Achivement::where('user_id', $user->id)
                ->with('user:id,name')
                ->get();

            $user->experience = Experience::where('user_id', $user->id)
                ->orderByDesc('id')
                ->get();

            $user->organization = Organization::where('user_id', $user->id)
                ->orderByDesc('id')
                ->get();
        }

        return Inertia::render('LandingPage/Talent', [
            'talent' => $talent,
        ]);
    }

    // public function talent_details()
    // {
    //     return Inertia::render('LandingPage/partials/talentprofile.jsx');
    // }
}
