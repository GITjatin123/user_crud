"use client"
import {createContext} from "react";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
export const UserContext = createContext();
export function CheckUser({children}) {
    const router = useRouter();
    const checkLogin = async () => {
        const res = await fetch('/api/ServerSession');
        if (res.status === 404) {
            await signOut(
                {redirect: false}
            )
            router.push('/login')
        }
    }
    return (<UserContext.Provider value={{checkLogin}}>
        {children}
    </UserContext.Provider>)
}