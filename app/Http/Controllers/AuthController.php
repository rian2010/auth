<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $role = $user->role;

            if ($role == 'talent') {
                return Inertia::render('Talent/TalentIndex');
            } elseif ($role == 'company') {
                return Inertia::render('Company/CompanyIndex');
            } elseif ($role == 'admin') {
                return Inertia::render('Admin/AdminIndex');
            }
        }

        // If the user is not authenticated, you can redirect them to the login page or perform any other desired action.
        return redirect()->route('login');
    }
}
