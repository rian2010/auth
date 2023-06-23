<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyDetailsController extends Controller
{
    public function index($id)
    {
        $company = User::where('role', 'company')
            ->find($id); // Retrieve the company with the specified ID

        return Inertia::render('LandingPage/CompanyDetails', [
            'company' => $company,
        ]);
    }
}
