"use client"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import moduleCss from "../page.module.css"
import {signIn} from "next-auth/react";
import {useState} from "react";
import {z} from 'zod'
import {Alert, Snackbar} from "@mui/material";
import {useRouter} from 'next/navigation';
export default function Login() {
    const [messageError, setMessageError] = useState({ class: "", value: "" })
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const validate = z.object({
        email: z.string().min(1, 'please enter email').email('invalid email format'),
        password: z.string().min(1, 'please enter password')
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            validate.parse({email, password})
            const result = await signIn("credentials", {
                email,
                password,
               redirect: false,
            });
            if (result?.error) {
                setMessageError({class:"error",value:result.error});
            } else {
                console.log(result)
                setMessageError({ class: "success", value: 'welcome home page'})
                router.push("/profile");
            }
        } catch (err) {
            setMessageError({ class: "error", value: err.issues[0].message})
        }
    }
    return (
        <>
            <Snackbar open={open} anchorOrigin={{vertical: "top", horizontal: 'right'}} autoHideDuration={3000}
                      onClose={() => setOpen(false)}>
                {messageError && <Alert severity={messageError.class}>{messageError.value}</Alert>}
            </Snackbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-7 col-sm-10 mx-auto"
                         style={{height: "100vh", alignContent: "center"}}>
                        <div className={moduleCss.inlineFormDiv}>
                            <h5 style={{textAlign: 'center', color: "white"}}>LOGIN</h5>
                            {/*{messageError && <p style={{color: "red"}}>{messageError}</p>}*/}
                            <Form onSubmit={handleSubmit} className="login-form">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" name={'email'}
                                           placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput" style={{color: "grey"}}>email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           name={'password'} onChange={(e) => setPassword(e.target.value)}
                                           placeholder="Password"/>
                                    <label htmlFor="floatingPassword" style={{color: "grey"}}>Password</label>
                                </div>
                                <div className="auth-btns">
                                    <Button className="login-btn" type="submit"
                                            onClick={() => setOpen(true)}>Login</Button>
                                    <p>Don't have an account? <Link href="/register">Create</Link></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
