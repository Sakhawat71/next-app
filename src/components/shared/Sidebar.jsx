"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const linkStyle = (path) =>
        `block py-2 px-4 text-lg ${pathname === path ? "bg-blue-500 text-white" : "text-gray-700"}`;

    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
            <nav>
                <Link href="/dashboard" className={linkStyle("/dashboard")}>Dashboard Home</Link>
                <Link href="/dashboard/settings" className={linkStyle("/dashboard/settings")}>Settings</Link>
                <Link href="/dashboard/profile" className={linkStyle("/dashboard/profile")}>Profile</Link>
                <Link href="/dashboard/logout" className={linkStyle("/dashboard/logout")}>Logout</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
