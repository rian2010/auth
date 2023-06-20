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

class TalentDetailsController extends Controller
{
    public function index()
    {
        $talents = User::where('role', 'talent')
            ->orderByDesc('id')
            ->get();

        $education = [];
        $achievement = [];
        $experience = [];
        $organization = [];

        foreach ($talents as $talent) {
            $education[$talent->id] = Education::where('user_id', $talent->id)
                ->orderByDesc('id')
                ->get();

            $achievement[$talent->id] = Achivement::where('user_id', $talent->id)
                ->with('user:id,name')
                ->get();

            $experience[$talent->id] = Experience::where('user_id', $talent->id)
                ->orderByDesc('id')
                ->get();

            $organization[$talent->id] = Organization::where('user_id', $talent->id)
                ->orderByDesc('id')
                ->get();
        }

        return Inertia::render('LandingPage/talentprofile', [
            'talents' => $talents,
            'education' => $education,
            'achievement' => $achievement,
            'experience' => $experience,
            'organization' => $organization
        ]);
    }
}
