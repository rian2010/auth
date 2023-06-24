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
    public function index($id)
    {
        $talent = User::where('role', 'talent')
            ->find($id); // Retrieve the company with the specified ID

        $education = Education::where('user_id', $talent->id)
            ->orderByDesc('id')
            ->get();

        $achivement = Achivement::where('user_id', $talent->id)
            ->with('user:id,name')
            ->get();
        $experience = Experience::where('user_id', $talent->id)
            ->orderByDesc('id')
            ->get();
        $organization = Organization::where('user_id', $talent->id)
            ->orderByDesc('id')
            ->get();


        return Inertia::render('LandingPage/talentprofile', [
            'talent' => $talent,
            'education' => $education,
            'achivement' => $achivement,
            'experience' => $experience,
            'organization' => $organization
        ]);
    }
}
