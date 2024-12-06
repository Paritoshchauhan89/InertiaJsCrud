import Banner from '@/Components/Banner';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

const Home = () => {
  return (
<>
<Head title="Home" />
<Navbar/>
<Banner/>
<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-xl text-gray-600">This is a simple home page styled with Tailwind CSS.</p>
      </div>
    </div>
</>
  );
};

export default Home;
