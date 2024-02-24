import { auth } from "@/auth"


const SettingsPage = async () => {

    const session = auth();

    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default SettingsPage