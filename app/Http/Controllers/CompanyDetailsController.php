<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyDetailsController extends Controller
{
    public function index()
    {
        $company = User::where('role', 'company')
            ->where('id')
            ->first();

        return Inertia::render('LandingPage/CompanyDetails', [
            'company' => $company,
        ]);
    }
}
