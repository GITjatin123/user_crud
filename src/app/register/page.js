"use client"
import Form from "react-bootstrap/Form";
import Buttons from "react-bootstrap/Button";
import Link from "next/link";
import moduleCss from "@/app/page.module.css";
import {useState, useEffect, useContext} from "react";
import {redirect} from "next/navigation";
import {Alert, Button, CircularProgress, Snackbar} from "@mui/material";
import {z} from 'zod'
import bcrypt from "bcryptjs";
import {capitalizeFirstLetter, getRandomNumber} from "@/helper/textHelper";
import {UsersStatus} from "@/commonConstants/constants";
import {ThemeContext} from "@/context/ThemeContext";


export default function Register() {
    const {themeName} = useContext(ThemeContext)
    useEffect(()=>{
        console.log(themeName)
    },[])
    const [message, setMessage] = useState(false)
    const [load, setload] = useState(false)
    const [open, setOpen] = useState(false);
    const [userRoles, setUserRoles] = useState([]);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    const fetchData = async (tables, filters = {}) => {
        const response = await fetch("api/WithoutLoginFetch", {
            method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({tables, filters}),
        });
        const data = await response.json();
        return data
    };
    useEffect(() => {
        fetchData(["userRole", "country"]).then((data) => {
            setUserRoles(data.userRole);
            setCountries(data.country);
        });
    }, []);
    useEffect(() => {
        if (selectedCountry) {
            fetchData(["state"], {countryId: selectedCountry}).then((data) => {
                setStates(data.state);
                setCities([]);
            });
        }
    }, [selectedCountry]);
    useEffect(() => {
        if (selectedState) {
            fetchData(["city"], {stateId: selectedState}).then((data) => {
                setCities(data.city);
            });
        }
    }, [selectedState]);
    const registerSchema = z.object({
        userRoleId: z.string().trim().min(1, "Please Select Designation"),
        name: z.string().trim().min(1, "Please Enter Name"),
        email: z.string().trim().min(1, "Please Enter Email").email("Invalid Email Format"),
        countryId: z.string().trim().min(1, "Please Enter Country"),
        phone: z.string().trim().min(1, "Please Enter Mobile Number").regex(/^\d{10}$/, "Phone number must be 10 digits"),
        // username: z.string().trim().min(1, "Please Enter Username").min(6, "Username must be at least 6 characters"),
        status: z.string().trim().min(1, "Please Select Status"),
        password: z.string().trim().min(4, "Password must be at least 4 characters"),
        confirmPassword: z.string().trim().min(1, 'Please Enter Confirm Password'),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match", path: ["confirmPassword"],
    });

    async function getformdata(e) {
        try {
            e.preventDefault();
            const myformdata = new FormData(e.target);
            let formData = Object.fromEntries(myformdata.entries());
            console.log(formData, 'alldata')
            const result = registerSchema.safeParse(formData);
            if (!result.success) {
                const firstError = result.error.errors[0].message;
                setMessage({value: firstError, class: "error"});
                return;
            }
            formData.password = await bcrypt.hash(formData.password, 10);
            formData.refNo = getRandomNumber(100000, 999999);
            formData.addedById = 1;
            formData.updatedById = 1;
            formData.userRoleId = Number(formData.userRoleId);
            formData.cityId = Number(formData.cityId);
            formData.stateId = Number(formData.stateId);
            formData.countryId = Number(formData.countryId);

            const res = await fetch("/api/register", {
                method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({
                    TableName: "user",
                    AllDataFields: formData, // BlankFields: ['username','lastname','email','phone','password','confirmPassword'],
                    UniqueFields: ['username', 'email']
                }),
            });
            let data;
            try {
                data = await res.json();
            } catch (err) {
                data = {error: "Invalid response from server " + err, class: 'error'};
            }
            if (res.ok) {
                setMessage({
                    value: data.message, class: data.class,
                });
                setload(true)
                setTimeout(() => {
                    redirect('/login')
                    setload(false)
                }, 2000)
            } else {
                setMessage({
                    value: data.error, class: data.class,
                });
            }
        } catch (err) {
            setMessage({value: err.message, class: "error"});
        }
    }

    const loader = () => {
        return (<>
            <Button variant="contained" disabled={load}
                    style={{height: "100vh", width: '100%', alignContent: "center"}}>
                {load ? <CircularProgress size={54} color="primary"/> : "Submit"}
            </Button>
        </>)
    }
    return (<>
        <Snackbar open={open} anchorOrigin={{vertical: "top", horizontal: 'right'}} autoHideDuration={3000}
                  onClose={() => setOpen(false)}>
            <Alert severity={message.class}>{message.value}</Alert>
        </Snackbar>
        {load ? loader() : (<div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-7 col-sm-10 mx-auto"
                     style={{height: "100vh", alignContent: "center"}}>
                    <div className={moduleCss.inlineFormDiv}>
                        <h5 style={{textAlign: 'center', color: "white"}}>REGISTER HERE</h5>
                        {/*<p className={`m-3 text-center ${message.class}`}>{message.value}</p>*/}
                        <Form onSubmit={getformdata} className="login-form">
                            <div className="form-floating mb-3">
                                <Form.Select name={'userRoleId'} className="form-control">
                                    <option value="">Select Designation</option>
                                    {userRoles ? userRoles.map((data) => <option key={data.id}
                                                                                 value={data.id}>{capitalizeFirstLetter(data.name)}</option>) : ''}
                                </Form.Select>
                            </div>
                            <div className="form-floating mb-3">
                                <Form.Select name={'status'} className="form-control">
                                    {Object.entries(UsersStatus).map(([key, value]) => (
                                        <option key={key} value={value}>{capitalizeFirstLetter(value)}</option>))}
                                </Form.Select>
                            </div>
                            <div className="form-floating mb-3">
                                <Form.Select name={'countryId'} className="form-control"
                                             onChange={(e) => setSelectedCountry(e.target.value)}>
                                    <option value="">Select Country</option>
                                    {countries ? countries.map((data) => <option key={data.id}
                                                                                 value={data.id}>{data.name}</option>) : ''}
                                </Form.Select>
                            </div>
                            <div className="form-floating mb-3">
                                <Form.Select name={'stateId'} className="form-control"
                                             onChange={(e) => setSelectedState(e.target.value)}>
                                    <option value="">Select State</option>
                                    {states ? states.map((data) => <option key={data.id}
                                                                           value={data.id}>{data.name}</option>) : ""}
                                </Form.Select>
                            </div>
                            <div className="form-floating mb-3">
                                <Form.Select name={'cityId'} className="form-control">
                                    <option value="">Select City</option>
                                    {cities ? cities.map((data) => <option key={data.id}
                                                                           value={data.id}>{data.name}</option>) : ""}
                                </Form.Select>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name"
                                       name={'name'}
                                       placeholder="Name"/>
                                <label htmlFor="name" style={{color: "grey"}}>Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="Email"
                                       placeholder="Email"
                                       name={'email'}/>
                                <label htmlFor="Email" style={{color: "grey"}}>Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="phone"
                                       placeholder="Mobile"
                                       name={'phone'}/>
                                <label htmlFor="phone" style={{color: "grey"}}>Mobile</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password" name={'password'}/>
                                <label htmlFor="floatingPassword" style={{color: "grey"}}>Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword2"
                                       name={'confirmPassword'}
                                       placeholder="Confirm Password"/>
                                <label htmlFor="floatingPassword2" style={{color: "grey"}}>Confirm
                                    Password</label>
                            </div>
                            <div className="auth-btns">
                                <Buttons className="login-btn" type="submit" variant="contained"
                                         onClick={() => setOpen(true)}>Submit</Buttons>
                                <p>All ready account? <Link href="/login">Login</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>)}
    </>);
}