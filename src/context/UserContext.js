"use client";
import { createContext, useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function CheckUser({ children }) {
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [UserError, setUserError] = useState(null);
    const checkLogin = async () => {
        try {
            const res = await fetch('/api/ServerSession');
            const data = await res.json();
            if (res.status === 404) {
                await signOut({ redirect: false });
                router.push('/login');
            }else if (data.error) {
                setUserError(data.error);
            } else {
                setUserData(data);
            }
        } catch (error) {
            setUserError("Something went wrong!");
        }
    };
    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <UserContext.Provider value={{ userData, UserError ,checkLogin}}>
            {children}
        </UserContext.Provider>
    );
}
