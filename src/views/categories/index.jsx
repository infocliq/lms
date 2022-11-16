import React, { useEffect, useState } from "react";
import { Timestamp, collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from '../components/footer';
import Moment from "moment";
// import { Globalapi } from '../../api/globalapi'

export const Categories = () => {
    const [progress, setProgress] = useState(false);
    const [Error, setError] = useState({ categoryName: '', status: '' });

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Globalapi().then([setCategories]);
        const categoriesRef = collection(db, "Category");
        const q = query(categoriesRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const categories = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(categories)
        });
    }, []);


    const [formData, setFormData] = useState({
        categoryName: "",
        status: "",
        createdAt: Timestamp.now().toDate(),
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePublish = () => {
        if (!formData.categoryName) {
            setError({ categoryName: "Category name field is required" });
        } else if (!formData.status) {
            setError({ status: "Status field is required" });
        } else {
            setProgress(true)
            const categoryRef = collection(db, "Category");
            addDoc(categoryRef, {
                categoryName: formData.categoryName,
                status: formData.status,
                createdAt: Timestamp.now().toDate(),
            })
                .then(() => {
                    setProgress(false)
                    toast.success('Category added successfully', {});
                    setFormData({
                        categoryName: "",
                        status: "",
                    });
                })
                .catch((err) => {
                    toast.error('Error adding category', {});
                });
        }

    };
    console.log(categories);
    return (
        <>
            <div class="content">
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} limit={1}
                    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable
                    pauseOnHover={false} theme="light"
                />
                <div class="mb-9">
                    <div class="row g-3 mb-4">
                        <div class="col-auto">
                            <h3 class="mb-0">Categories</h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">
                            <div id="products" data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'>

                                <div class="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
                                    <div class="table-responsive scrollbar mx-n1 px-1">
                                        <table class="table fs--1 mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="white-space-nowrap fs--1 align-middle ps-0">
                                                        <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" /></div>
                                                    </th>
                                                    <th class="sort white-space-nowrap align-middle" scope="col" id='tb3' data-sort="category">CATEGORY</th>
                                                    <th class="sort align-middle text-start" scope="col" data-sort="status" id='tb2'>STATUS</th>
                                                    <th class="sort align-middle" scope="col" data-sort="createdat" id='tb2'>CREATED AT</th>
                                                    <th class="sort align-middle" scope="col" data-sort="tags" id='tb5'>ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody class="list" id="table-latest-review-body">
                                                {categories.length === 0 ?
                                                    <tr>
                                                        <td colSpan={5} class="text-center">Categories Not Found</td>
                                                    </tr>

                                                    :
                                                    categories.map(category => (
                                                        <tr>
                                                            <td class="fs--1 align-middle ps-0">
                                                                <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" /></div>
                                                            </td>
                                                            <td class="time align-middle white-space-nowrap text-600">{category.categoryName}</td>
                                                            <td class="tags align-middle review pb-2"><a class="text-decoration-none" href="#!">
                                                                {category.status === '1' ?

                                                                    <span class="badge badge-phoenix fs--2 badge-phoenix-success">
                                                                        <span class="badge-label">Activated</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='badgestatus' class="feather feather-check ms-1" >
                                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                    :
                                                                    <span class="badge badge-phoenix fs--2 badge-phoenix-danger">
                                                                        <span class="badge-label">Disabled</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon ms-1" id='badgestatus'>
                                                                            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                }
                                                            </a>
                                                            </td>
                                                            <td class="time align-middle white-space-nowrap text-600">{category.createdAt.toDate().toDateString()}</td>
                                                            <td class="time align-middle white-space-nowrap text-600">
                                                                <div class="row" id='actionButtonRow'>
                                                                    <button data-bs-toggle="modal" data-bs-target="#verticallyCentered" class="btn btn-phoenix-secondary btn-icon me-1 fs--2 text-900 px-0 me-1" data-event-propagation-prevent="data-event-propagation-prevent">
                                                                        <svg class="svg-inline--fa fa-pen-to-square" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"></path></svg>
                                                                    </button>
                                                                    <button data-bs-toggle="modal" data-bs-target="#tooltipModal" class="btn btn-phoenix-secondary btn-icon fs--2 text-danger px-0">
                                                                        <svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row align-items-center justify-content-between py-2 pe-0 fs--1">
                                        <div class="col-auto d-flex">
                                            <p class="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900" data-list-info="data-list-info"></p>
                                            <a class="fw-semi-bold" href="#!" data-list-view="*">View all
                                                <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
                                            </a>
                                            <a class="fw-semi-bold d-none" href="#!" data-list-view="less">View Less
                                                <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span>
                                            </a>
                                        </div>
                                        <div class="col-auto d-flex">
                                            <button class="page-link" data-list-pagination="prev">
                                                <span class="fas fa-chevron-left"></span>
                                            </button>
                                            <ul class="mb-0 pagination"></ul>
                                            <button class="page-link pe-0" data-list-pagination="next">
                                                <span class="fas fa-chevron-right"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 card">
                            <div class="card-body">
                                <h4 class="card-title">Create new category</h4>
                                <div class="g-3 mb-3 mt-3">
                                    <div class="form-floating mb-3">
                                        <input
                                            class="form-control"
                                            id="floatingInputGrid"
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
                                                <button onClick={handlePublish} class="btn btn-sm btn-primary">Create new</button>
                                                :
                                                <button disabled class="btn btn-sm btn-primary">Submitting...</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDIT MODEL */}
                <div class="modal fade" id="verticallyCentered" tabindex="-1" aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verticallyCenteredModalLabel">Edit category</h5><button class="btn p-1" type="button" data-bs-dismiss="modal" aria-label="Close"><span class="fas fa-times fs--1"></span></button>
                            </div>
                            <div class="modal-body">
                                <form class="g-3 mb-3 mt-3">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInputGrid" type="text" placeholder="Project title" />
                                        <label for="floatingInputGrid">Category name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="floatingSelectTask">
                                            <option value="1">Activated</option>
                                            <option value="0">Disabled</option>
                                        </select>
                                        <label for="floatingSelectTask">Status</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer"><button class="btn btn-primary" type="button">Save</button><button class="btn btn-outline-primary" type="button" data-bs-dismiss="modal">Cancel</button></div>
                        </div>
                    </div>
                </div>

                {/* DELETE MODEL */}
                <div class="modal fade" id="tooltipModal" tabindex="-1" aria-labelledby="tooltipModallLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="col-12 col-md-auto">
                                    <div class="d-flex align-items-center">
                                        <svg id='deletePopupIcon' viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 pb-1 text-red-600"><path fill="#e72a2a" d="M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z"></path></svg>
                                        <div class="ms-3">
                                            <h4 class="mb-2 mt-3">Delete category</h4>
                                            <p class="text-600 fs--1 mb-3">Are you sure you want to delete the ticket? All data will be permanently removed. All related data will be deleted. This action cannot be undone.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 gy-6">
                                    <div class="row g-3 justify-content-end">
                                        <div class="col-auto"><button class="btn btn-sm btn-white" data-bs-dismiss="modal">Cancel</button></div>
                                        <div class="col-auto"><button class="btn btn-sm btn-red">Delete</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
