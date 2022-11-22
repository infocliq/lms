import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { getToken, getUser } from "../common/sessions/common";
import { baseUrl } from "../constants/constants";

const token = getToken()
const userId = getUser()

const headers = {
    authorization: `Bearer ${token}`,
    userId: userId
}

// CREATE DATA
export const Create = () => {
    const [progress, setProgress] = useState(false);
    const [Error, setError] = useState({ userName: '', email: '', password: '' });

    // CREATE CHANGE
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // CREATE FORM
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    const handleSubmit = async (event) => {
        setProgress(true)
        event.preventDefault()

        if (!formData.userName) {
            setProgress(false)
            setError({ ...Error, userName: 'User name is required' })
        } else if (!formData.email) {
            setProgress(false)
            setError({ ...formData, email: 'Email is required' })
        } else if (!formData.password) {
            setProgress(false)
            setError({ ...formData, password: 'Password is required' })
        }
        else {

            try {
                const { data } = await axios.post(baseUrl + '/api/users/register', {
                    ...formData

                }, {
                    withCredentials: true,
                    headers
                });
                if (data) {
                    if (data.success === 1) {
                        toast.success('User created successfully', {})
                        setProgress(false)
                        setFormData({ ...formData, userName: "", email: "", password: "" })
                    } else {
                        toast.error('something wrong please try again!')
                        setProgress(false)
                    }
                }
            } catch (error) {
                toast.error(error.response.data.message, {})
                setProgress(false)
            }
        }
    }
    return (
        <>
            <div class="g-3 mb-3 mt-3">
                <div class="form-floating mb-3">
                    <input
                        class="form-control"
                        id="userName"
                        type="text"
                        placeholder="Username"
                        name='userName'
                        value={formData.userName}
                        onChange={(e) => handleChange(e)}
                    />
                    <label for="floatingInputGrid">Username</label>
                    <span class="text-danger inputerror">{Error.userName}</span>
                </div>

                <div class="form-floating mb-3">
                    <input
                        class="form-control"
                        id="email"
                        type="email"
                        placeholder="User name"
                        name='email'
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <label for="floatingInputGrid">Email</label>
                    <span class="text-danger inputerror">{Error.email}</span>
                </div>

                <div class="form-floating mb-3">
                    <input
                        class="form-control"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <label for="floatingInputGrid">Password</label>
                    <span class="text-danger inputerror">{Error.password}</span>
                </div>

                <div class="row g-3 justify-content-end">
                    <div class="col-auto">
                        {progress === false ?
                            <button onClick={handleSubmit} class="btn btn-sm btn-primary">Create new</button>
                            :
                            <button disabled class="btn btn-sm btn-primary">Submitting...</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


// LIST DATA
export async function List() {
    try {
        const { data } = await axios.get(
            baseUrl + "/api/users", {
            headers
        });
        console.log(data.users);
        return data.users

    } catch (ex) {
        console.log(ex);
    }
}


