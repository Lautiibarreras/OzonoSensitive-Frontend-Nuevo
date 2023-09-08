import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogOutBoton = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout()}>
            logout
        </button>
    );
};

export default LogOutBoton