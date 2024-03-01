"use client";

// import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";



const SettingsPage = () => {

    const user = useCurrentUser();

    const onClick = () => {
        logout()
    }

    return (
        <div className="bg-white p-10 rounded-xl">

            <Button
                onClick={onClick}
                type="submit"
                className="w-20"
            >
                Sign Out
            </Button>
        </div>
    )
}

export default SettingsPage