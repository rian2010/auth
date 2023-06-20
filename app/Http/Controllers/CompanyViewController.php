<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CompanyViewController extends Controller
{

    public function index()
    {
        $company = User::where('role', 'company')
            ->orderByDesc('id')
            ->paginate('6');

        return Inertia::render(
            'LandingPage/Company',
            [
                'company' => $company,
            ]
        );
    }
}
