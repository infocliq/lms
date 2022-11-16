import React from 'react'

export const SideNav = () => {
    return (
        <>
            <nav class="navbar navbar-light navbar-vertical navbar-vibrant navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
                    <div class="navbar-vertical-content scrollbar">
                        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
                            <li class="nav-item">
                                <a class="nav-link mb-3" href="/" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                                        data-feather="grid"></span></span><span class="nav-link-text">Dashboard</span></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mb-3" href="/letters" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                                        data-feather="mail"></span></span><span class="nav-link-text">Letters</span></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mb-3" href="/departments" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                                        data-feather="git-pull-request"></span></span><span class="nav-link-text">Departments</span></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mb-3" href="/categories" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                                        data-feather="layers"></span></span><span class="nav-link-text">Categories</span></div>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link dropdown-indicator"
                                    href="#e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false"
                                    aria-controls="e-commerce">
                                    <div class="d-flex align-items-center">
                                        <div class="dropdown-indicator-icon d-flex flex-center">
                                            <span class="fas fa-caret-right fs-0"></span>
                                        </div><span class="nav-link-icon"><span
                                            data-feather="mail"></span></span><span class="nav-link-text">Letters</span>
                                    </div>
                                </a>
                                <ul class="nav collapse parent" id="e-commerce">
                                    <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/refund.html"
                                        data-bs-toggle="" aria-expanded="false">
                                        <div class="d-flex align-items-center"><span class="nav-link-text">All letters</span></div>
                                    </a>

                                    </li>
                                </ul>

                            </li> */}
                        </ul>

                    </div>
                    <div class="navbar-vertical-footer"><a class="btn btn-link border-0 fw-semi-bold d-flex ps-0"
                        href="pages/authentication/simple/sign-out.html"><span class="navbar-vertical-footer-icon"
                            data-feather="log-out"></span><span>Sign out</span></a></div>
                </div>
            </nav>
        </>
    )
}
