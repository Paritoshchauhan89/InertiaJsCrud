<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::prefix('students')->group(function () {
    Route::get('/add-student', [StudentsController::class, 'create'])->name('students.create');
    Route::get('/all-students', [StudentsController::class, 'index'])->name('students.index');
    Route::post('/add-student', [StudentsController::class, 'store'])->name('students.store');
    Route::get('/update-student/{student}', [StudentsController::class, 'edit'])->name('students.edit');
    Route::put('/update-student/{student}', [StudentsController::class, 'update'])->name('students.update');
    Route::delete('/{student}', [StudentsController::class, 'destroy'])->name('students.destroy');
});


Route::get('/contact', function () {
    return Inertia::render('contact');
});

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
