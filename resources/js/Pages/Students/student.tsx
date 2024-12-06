import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Components/Navbar';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function AddStudent() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('students.create')); 
    }

    return (
        <>
            <Head title="Add New Student" />
            <Navbar/>
           <GuestLayout>

           <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Please fill out the form below to add a new student.
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
                        {processing ? 'Adding...' : 'Add Student'}
                    </PrimaryButton>
                </div>
            </form>
           </GuestLayout>
        </>
    );
}
