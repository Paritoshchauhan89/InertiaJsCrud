<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    // Store student details
    public function store(Request $request)
    {
        // Validate input data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email',
            'age' => 'required|integer|min:18',
        ]);

        // Create student record
        $student = Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'age' => $request->age,
        ]);

        return response()->json(['message' => 'Student created successfully!', 'student' => $student], 201);
    }
}

