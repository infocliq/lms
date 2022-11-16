import React from 'react'
import { Footer } from '../components/footer';
import { Preloader, WelcomePreloader } from '../components/preloader';

export const Dashboard = () => {
    return (
        <>
            {/* <Preloader /> */}
            {/* <WelcomePreloader /> */}
            <div class="content">
                <div class="pb-5">
                    <div class="row g-4">
                        <div class="col-12 col-xxl-12">
                            <div class="mb-6">
                                <h2 class="mb-2">Good morning</h2>
                                <h5 class="text-700 fw-semi-bold">Here’s what’s going on at your business right now</h5>
                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-xl-3 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center"><img src="assets/img/icons/illustrations/4.png" alt=""
                                                height="46" width="46" />
                                                <div class="ms-3">
                                                    <h4 class="mb-0">57 new orders</h4>
                                                    <p class="text-800 fs--1 mb-0">Awating processing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-xl-3 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center"><img src="assets/img/icons/illustrations/2.png" alt=""
                                                height="46" width="46" />
                                                <div class="ms-3">
                                                    <h4 class="mb-0">5 orders</h4>
                                                    <p class="text-800 fs--1 mb-0">On hold</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-3 col-xl-3 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center"><img src="assets/img/icons/illustrations/3.png" alt=""
                                                height="46" width="46" />
                                                <div class="ms-3">
                                                    <h4 class="mb-0">15 products</h4>
                                                    <p class="text-800 fs--1 mb-0">Out of stock</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-xl-3 col-sm-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center"><img src="assets/img/icons/illustrations/shield.svg" alt=""
                                                height="46" width="46" />
                                                <div class="ms-3">
                                                    <h4 class="mb-0">15 products</h4>
                                                    <p class="text-800 fs--1 mb-0">Out of stock</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="bg-200 mb-6 mt-4" />
                            <div class="row flex-between-center mb-4 g-3">
                                <div class="col-auto">
                                    {/* <h3>Total letters this year</h3> */}
                                    <p class="text-700 lh-sm mb-0">Total letters this year</p>
                                </div>
                                {/* <div class="col-8 col-sm-4"><select class="form-select form-select-sm mt-2"
                                    id="select-gross-revenue-month">
                                    <option>Mar 1 - 31, 2022</option>
                                    <option>April 1 - 30, 2022</option>
                                    <option>May 1 - 31, 2022</option>
                                </select></div> */}
                            </div>
                            <div class="echart-total-sales-chart" id='echartTotalsaleschart'></div>
                        </div>
                        {/* <div class="col-12 col-xxl-6">
                            <div class="row g-3">
                                <div class="col-12 col-md-6">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5 class="mb-1">Total orders<span
                                                        class="badge badge-light-warning rounded-pill fs--1 ms-2">-6.8%</span></h5>
                                                    <h6 class="text-700">Last 7 days</h6>
                                                </div>
                                                <h4>16,247</h4>
                                            </div>
                                            <div class="d-flex justify-content-center px-4 py-6">
                                                <div class="echart-total-orders" id='echartTotalorders'
                                                    data-echarts='{"tooltip":{"show":false},"series":[{"type":"bar","barWidth":"5px","data":[120,200,150,80,70,110,120],"showBackground":true,"symbol":"none","itemStyle":{"borderRadius":10},"backgroundStyle":{"borderRadius":10}}],"grid":{"right":10,"left":10,"bottom":0,"top":0}}'>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="bullet-item bg-primary me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Completed</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">52%</h6>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="bullet-item bg-light-primary me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Pending payment</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">48%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5 class="mb-1">New customers<span
                                                        class="badge badge-light-warning rounded-pill fs--1 ms-2">+26.5%</span></h5>
                                                    <h6 class="text-700">Last 7 days</h6>
                                                </div>
                                                <h4>356</h4>
                                            </div>
                                            <div class="pb-0 pt-4">
                                                <div class="echarts-new-customers" id='echartsNewcustomers'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5 class="mb-2">Top coupons</h5>
                                                    <h6 class="text-700">Last 7 days</h6>
                                                </div>
                                            </div>
                                            <div class="pb-4 pt-3">
                                                <div class="echart-top-coupons" id='echartTopcoupons'></div>
                                            </div>
                                            <div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="bullet-item bg-primary me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Percentage discount</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">72%</h6>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="bullet-item bg-primary-200 me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Fixed card discount</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">18%</h6>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="bullet-item bg-info me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Fixed product discount</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">10%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5 class="mb-2">Paying vs non paying</h5>
                                                    <h6 class="text-700">Last 7 days</h6>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center pt-3">
                                                <div><canvas id="payingCustomerChart"></canvas></div>
                                            </div>
                                            <div class="mt-3">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="bullet-item bg-primary me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Paying customer</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">30%</h6>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="bullet-item bg-light-primary me-2"></div>
                                                    <h6 class="text-900 fw-semi-bold flex-1 mb-0">Non-paying customer</h6>
                                                    <h6 class="text-900 fw-semi-bold mb-0">70%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
