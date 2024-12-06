<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Http\Requests\StoreStudentsRequest;
use App\Http\Requests\UpdateStudentsRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    // Display all students
    public function index()
    {
        // Get all students from the database
        $students = Students::all();

        // Return the students list to the 'AllStudents' Inertia view
        return Inertia::render('AllStudents', ['students' => $students]);
    }

    // Show the form for creating a new student
    public function create()
    {
        // Return the 'AddStudent' Inertia view for adding a new student
        return Inertia::render('Students/student');
    }

    // Store a new student (using the validated request)
    public function store(StoreStudentsRequest $request)
    {
        // Get validated data from the request
        $validatedData = $request->validated();
        
        // Create the new student using the validated data
        Students::create($validatedData);
        
        // Flash a success message and redirect to the students index page
        return redirect()->route('students.index')->with('success', 'Student added successfully!');
    }

    public function edit($id)
    {
        $student = Students::findOrFail($id);
    
        // Return the 'UpdateStudent' Inertia view with the student data
        return Inertia::render('Students/UpdateStudent', ['student' => $student]);
    }
    
    public function update(UpdateStudentsRequest $request, $id)
    {
        // Get validated data from the request
        $validatedData = $request->validated();
    
        // Find the student by ID and update their details
        $student = Students::findOrFail($id);
        $student->update($validatedData);
    
        // Redirect back to the students list with a success message
        return redirect()->route('students.index')->with('success', 'Student updated successfully!');
    }
    

    // Delete a student
    public function destroy(Students $student)
    {
        // Delete the student
        $student->delete();

        // Return a JSON response with a success message
        return redirect()->route('students.index')->with('success', 'Student updated successfully!');

    }
}
