import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo Section */}
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        MyApp
                    </Link>
                </div>

                {/* Menu Section */}
                <div className="flex items-center">
                    <Link href="/about" className="mx-3 hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/contact" className="mx-3 hover:text-gray-300">
                        Contact
                    </Link>

                    <Link
                        href="students/add-student"
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        Add Student
                    </Link>
      
                    <Link
                        href="/login"
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        Register
                    </Link>
      
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
