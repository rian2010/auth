<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserTalent;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nim' => 'required|integer|min:8',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string|in:admin,talent,company',
        ]);
        $user = User::create([
            'nim' => $request->nim,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        // if ($request->role === 'talent') {
        //     $talent = UserTalent::create([
        //         'name' => $request->name,
        //         'nim' => $request->nim,
        //         'email' => $request->email,
        //         'password' => Hash::make($request->password),
        //         'role' => $request->role,
        //     ]);

        //     Auth::login($talent);

        //     event(new Registered($talent));
        // } elseif ($request->role === 'company') {
        //     $company = UserCompany::create([
        //         'name' => $request->name,
        //         'username' => $request->username,
        //         'phone_number' => $request->phone_number,
        //         'email' => $request->email,
        //         'password' => Hash::make($request->password),
        //         'role' => $request->role,
        //     ]);

        //     Auth::login($company);

        //     event(new Registered($company));
        // }
        event(new Registered($user));

        Auth::login($user);


        return redirect(RouteServiceProvider::HOME);
    }
}
