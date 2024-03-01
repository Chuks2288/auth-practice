"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
    const pathname = usePathname();


    const navbarLinks = [
        {
            title: "Server",
            path: "/server",
        },
        {
            title: "Client",
            path: "/client",
        },
        {
            title: "Admin",
            path: "/admin",
        },
        {
            title: "Settings",
            path: "/settings",
        },
    ]

    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                {navbarLinks.map((link) => (
                    <Button
                        asChild
                        variant={pathname === link.path ? "default" : "outline"}
                    >
                        <Link href="/server">
                            {link.title}
                        </Link>
                    </Button>
                ))}
            </div>
            <UserButton />
        </nav>
    );
};