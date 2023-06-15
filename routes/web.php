<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\CompanyViewController;
use App\Http\Controllers\CvController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\GenerateController;
use App\Http\Controllers\LandingpageController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Student\AboutmeController;
use App\Http\Controllers\Student\AchivementController;
use App\Http\Controllers\Student\EducationController;
use App\Http\Controllers\TalentProfileController;
use App\Http\Controllers\TalentViewController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\VacancyViewController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [LandingpageController::class, 'index'])->name('landingpage');
Route::get('/company', [CompanyViewController::class, 'index'])->name('company');
// Route::get('/vacancy', [VacancyViewController::class, 'index'])->name('vacancy');


// Route::get('/competency', [AchivementController::class, 'index'])->name('competency');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', [AuthController::class, 'index'])->name('home');

Route::middleware(['auth', 'talent'])->prefix('talent')->group(function () {
    Route::resource('/education', EducationController::class);
    // Route::get('/education/generatecv', [EducationController::class, 'educationIndex'])->name('vc');
    Route::resource('/achivement', AchivementController::class);
    Route::resource('/experience', ExperienceController::class);
    Route::resource('/organization', OrganizationController::class);
    // Route::resource('/talentprofile', TalentProfileController::class);
    Route::get('/talentprofile', [TalentProfileController::class, 'index'])->name('talentprofile.index');
    Route::get('/talentprofile/edit', [TalentProfileController::class, 'edit'])->name('talentprofile.edit');
    Route::patch('/talentprofile', [TalentProfileController::class, 'update'])->name('talentprofile.update');
    Route::resource('/generate', GenerateController::class);
});

Route::middleware(['auth', 'company'])->prefix('company')->group(function () {
    Route::resource('/vacancy', VacancyController::class);
    Route::get('/chrips', [ChirpController::class, 'index'])->name('chirps.index');
    Route::post('/chirps/post', [ChirpController::class, 'store'])->name('chirps.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::group(['prefix' => 'company,talent'], function () {

//     Route::get('/login', [AuthenticatedSessionController::class, 'create'])
//         ->middleware('guest')
//         ->name('login');

//     Route::post('/login', [AuthenticatedSessionController::class, 'store'])
//         ->middleware('guest');

//     Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
//         ->middleware('auth:admin')
//         ->name('logout');

//     Route::group(['middleware' => 'auth:admin'], function () {
//     });
// });

require __DIR__ . '/auth.php';
