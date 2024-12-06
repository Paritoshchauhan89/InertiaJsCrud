import { usePage, useForm, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

const AllStudents = () => {
    const { students } = usePage().props;

    // Separate forms for delete and update actions
    const deleteForm = useForm();
    const updateForm = useForm();

    if (!Array.isArray(students)) {
        return <div>No students available</div>;
    }

    const handleUpdate = (id: number) => {
        if (confirm("Are you sure you want to update this student?")) {
            // Corrected the route for update action
            updateForm.put(route("students.update", id), {
                preserveScroll: true, // Optional, keeps the scroll position
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this student?")) {
            deleteForm.delete(route("students.destroy", id), {
                preserveScroll: true, // Optional, keeps the scroll position
            });
        }
    };

    return (
        <GuestLayout>
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                <h1 className="text-2xl font-semibold mb-4">Student List</h1>

                {/* Table displaying student data */}
                <div className="overflow-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border border-gray-300">First Name</th>
                                <th className="py-2 px-4 border border-gray-300">Last Name</th>
                                <th className="py-2 px-4 border border-gray-300">Email</th>
                                <th className="py-2 px-4 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="text-center">
                                    <td className="py-2 px-4 border border-gray-300">{student.first_name}</td>
                                    <td className="py-2 px-4 border border-gray-300">{student.last_name}</td>
                                    <td className="py-2 px-4 border border-gray-300">{student.email}</td>
                                    <td className="py-2 px-4 border border-gray-300 flex justify-center space-x-2">
                                        {/* Edit Button */}
                                        <Link href={`/students/update-student/${student.id}`}>
                                            <button
                                                type="button"
                                                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
                                            >
                                                Edit
                                            </button>
                                        </Link>

                                        {/* Delete Button */}
                                        <button
                                            type="button"
                                            disabled={deleteForm.processing}
                                            onClick={() => handleDelete(student.id)}
                                            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition"
                                        >
                                            {deleteForm.processing ? "Deleting..." : "Delete"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GuestLayout>
    );
};

export default AllStudents;
