import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">PinApp</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-700 hover:text-gray-900">
              Profile
            </Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}