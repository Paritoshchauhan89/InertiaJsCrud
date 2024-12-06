<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentsRequest extends FormRequest
{
    // Authorization logic
    public function authorize()
    {
        return true; // Make sure the user is authorized to perform this action
    }

    // Validation rules for storing a new student
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|unique:students,email', // Ensure unique email
        ];
    }

    // Custom error messages (optional)
    public function messages()
    {
        return [
            'first_name.required' => 'First name is required.',
            'last_name.required'  => 'Last name is required.',
            'email.required'      => 'Email is required.',
            'email.email'         => 'Please provide a valid email address.',
            'email.unique'        => 'This email is already taken.',
        ];
    }
}
