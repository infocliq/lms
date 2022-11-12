import React from 'react'

export const SideNav = () => {
    return (
        <>
            <nav class="navbar navbar-light navbar-vertical navbar-vibrant navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
                    <div class="navbar-vertical-content scrollbar">
                        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                                        data-feather="figma"></span></span><span class="nav-link-text">Dashboard</span></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <p class="navbar-vertical-label">Apps</p>
                                <a class="nav-link dropdown-indicator"
                                    href="#e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false"
                                    aria-controls="e-commerce">
                                    <div class="d-flex align-items-center">
                                        <div class="dropdown-indicator-icon d-flex flex-center"><span
                                            class="fas fa-caret-right fs-0"></span></div><span class="nav-link-icon"><span
                                                data-feather="shopping-cart"></span></span><span class="nav-link-text">E commerce</span>
                                    </div>
                                </a>
                                <ul class="nav collapse parent" id="e-commerce">
                                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#admin" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="e-commerce">
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown-indicator-icon d-flex flex-center"><span
                                                class="fas fa-caret-right fs-0"></span></div><span class="nav-link-text">Admin</span>
                                        </div>
                                    </a>
                                        <ul class="nav collapse parent show" id="admin">
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/add-product.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Add product</span></div>
                                            </a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/products.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Products</span></div>
                                            </a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/customers.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Customers</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/customer-details.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Customer details</span>
                                                </div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/orders.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Orders</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/order-details.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Order details</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/admin/refund.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Refund</span></div>
                                            </a>

                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#landing" data-bs-toggle="collapse"
                                        aria-expanded="true" aria-controls="e-commerce">
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown-indicator-icon d-flex flex-center"><span
                                                class="fas fa-caret-right fs-0"></span></div><span class="nav-link-text">Landing</span>
                                        </div>
                                    </a>

                                        <ul class="nav collapse parent show" id="landing">
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/homepage.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Homepage</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/product-details.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Product details</span>
                                                </div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/products-filter.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Products filter</span>
                                                </div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/cart.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Cart</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/checkout.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Checkout</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/shipping-info.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Shipping info</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/profile.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Profile</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/favourite-stores.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Favourite stores</span>
                                                </div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/wishlist.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Wishlist</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/order-tracking.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Order tracking</span></div>
                                            </a>

                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="apps/e-commerce/landing/invoice.html"
                                                data-bs-toggle="" aria-expanded="false">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Invoice</span></div>
                                            </a>

                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>
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
