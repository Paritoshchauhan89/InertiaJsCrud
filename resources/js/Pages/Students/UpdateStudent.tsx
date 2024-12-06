import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Components/Navbar';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function UpdateStudent({ student }) {
    const { data, setData, put, processing, errors } = useForm({
        first_name: student.first_name || '',
        last_name: student.last_name || '',
        email: student.email || '',
    });

    function submit(e) {
        e.preventDefault();
        put(route('students.update', student.id)); // Send a PUT request to update the student
    }

    return (
        <>
            <Head title="Update Student" />
            <Navbar />
            <GuestLayout>
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Please update the student details below.
                </div>

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="first_name" value="First Name" />
                        <TextInput
                            id="first_name"
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('first_name', e.target.value)}
                        />
                        <InputError message={errors.first_name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="last_name" value="Last Name" />
                        <TextInput
                            id="last_name"
                            type="text"
                            name="last_name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('last_name', e.target.value)}
                        />
                        <InputError message={errors.last_name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            {processing ? 'Updating...' : 'Update Student'}
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
