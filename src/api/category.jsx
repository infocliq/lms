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
    const [Error, setError] = useState({ categoryName: '', status: '' });

    // CREATE CHANGE
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // CREATE FORM
    const [formData, setFormData] = useState({
        categoryName: "",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    const handleSubmit = async (event) => {
        setProgress(true)
        event.preventDefault()

        if (!formData.categoryName) {
            setProgress(false)
            setError({ ...Error, categoryName: 'Category name is required' })
        } else if (!formData.status) {
            setProgress(false)
            setError({ ...formData, status: 'Status is required' })
        } else {

            try {
                const { data } = await axios.post(baseUrl + '/api/category/create', {
                    ...formData

                }, {
                    withCredentials: true,
                    headers
                });
                if (data) {
                    if (data.success === 1) {
                        toast.success('Category created successfully', {})
                        setProgress(false)
                        setFormData({ ...formData, categoryName: "", status: "" })
                    } else {
                        toast.error(data.message, {})
                        setProgress(false)
                    }
                }
            } catch (error) {

            }
        }
    }
    return (
        <>
            <div onchange="return FormValidation()" class="g-3 mb-3 mt-3">
                <div class="form-floating mb-3">
                    <input
                        class="form-control"
                        id="firstname"
                        type="text"
                        placeholder="Project title"
                        name='categoryName'
                        value={formData.categoryName}
                        onChange={(e) => handleChange(e)}
                    />
                    <label for="floatingInputGrid">Category name</label>
                    <span class="text-danger inputerror">{Error.categoryName}</span>
                </div>

                <div class="form-floating mb-3">
                    <select
                        class="form-select"
                        id="floatingSelectTask"
                        name='status'
                        value={formData.status}
                        onChange={(e) => handleChange(e)}
                    >
                        <option selected>Select</option>
                        <option value="1">Activated</option>
                        <option value="0">Disabled</option>
                    </select>
                    <label for="floatingSelectTask">Status</label>
                    <span class="text-danger inputerror">{Error.status}</span>
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
            baseUrl + "/api/category", {
            headers
        });
        return data.categories

    } catch (ex) {
        console.log(ex);
    }
}


// UPDATE DATA
export const Update = (formData) => {
    const [progress, setProgress] = useState(false);

    useEffect(() => {
    }, [])

    const handleSubmit = async (event) => {
        setProgress(true)
        const updateData = formData.formData

        event.preventDefault()
        if (!updateData.categoryName) {
            setProgress(false)
            toast.error('Category name is required', {})
        } else if (!updateData.status) {
            setProgress(false)
            toast.error('Status is required', {})
        } else {

            try {
                const { data } = await axios.patch(baseUrl + '/api/category', {
                    ...updateData
                }, {
                    withCredentials: true,
                    headers
                });
                if (data) {
                    if (data.success === 1) {
                        toast.success('Category updated successfully', {})
                        setProgress(false)
                    } else {
                        toast.error(data.message, {})
                        setProgress(false)
                    }
                }
            } catch (error) {

            }
        }
    }
    return (
        <>
            <div class="modal-footer">
                {progress === false ?
                    <button onClick={handleSubmit} class="btn btn-primary" type="button">Save</button>
                    :
                    <button disabled class="btn btn-primary" type="button">Updating...</button>
                }
                <button class="btn btn-outline-primary" type="button" data-bs-dismiss="modal">Cancel</button>
            </div>
        </>
    )
}


// DELETE DATA
export const Delete = (id) => {
    const [progress, setProgress] = useState(false);

    useEffect(() => {
    }, [])

    const handleDelete = async (event) => {
        setProgress(true)

        event.preventDefault()

        const categoryId = id.id.id

        console.log(categoryId);
        try {
            const { data } = await axios.delete(baseUrl + '/api/category', {
                data: { id: categoryId },
                headers
            });
            if (data) {
                if (data.success === 1) {
                    toast.success(data.message, {})
                    setProgress(false)
                } else {
                    toast.error(data.message, {})
                    setProgress(false)
                }
            }
        } catch (error) {

        }
    }
    return (
        <>
            {!progress ?
                <button onClick={handleDelete} data-bs-dismiss="modal" class="btn btn-sm btn-red">Delete</button>
                :
                <button disabled data-bs-dismiss="modal" class="btn btn-sm btn-red">Deleteing</button>
            }
        </>
    )
}