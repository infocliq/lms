import React from 'react'
import { Footer } from '../components/footer';

export const Letters = () => {
  return (
    <>
      <div class="content">
        <div class="mb-9">
          <div class="row g-3 mb-4">
            <div class="col-auto">
              <h3 class="mb-0">Letters</h3>

              <div class="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start border-300 shadow-none bg-100" tabindex="-1" aria-labelledby="offcanvasExampleLabel" data-todo-content-offcanvas="data-todo-content-offcanvas" id="todoOffcanvas-1" aria-modal="true" role="dialog">
                <div class="offcanvas-body p-0">
                  <div class="p-5 p-md-6">
                    <div class="d-flex flex-between-center mb-4">
                      <h2 class="fw-bold fs-2 mb-0 text-1000 line-clamp-1">Designing the dungeon</h2>
                      <button class="btn btn-phoenix-secondary btn-icon" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="nav nav-links mb-3 mb-lg-2 mx-n3">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">All <span class="text-700 fw-semi-bold">(68817)</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Replayed <span class="text-700 fw-semi-bold">(70348)</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Pending <span class="text-700 fw-semi-bold">(17)</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#">Canceled <span class="text-700 fw-semi-bold">(810)</span></a></li>
          </ul>
          <div id="products" data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'>
            <div class="mb-4">
              <div class="row g-3">
                <div class="col-auto">
                  <div class="search-box">
                    <form class="position-relative" data-bs-toggle="search" data-bs-display="static"><input class="form-control search-input search" type="search" placeholder="Search letters" aria-label="Search" />
                      <span class="fas fa-search search-box-icon"></span>
                    </form>
                  </div>
                </div>
                <div class="col-auto scrollbar overflow-hidden-y flex-grow-1">
                  <div class="btn-group position-static" role="group">
                    <div class="btn-group position-static text-nowrap"><button class="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Category<span class="fas fa-angle-down ms-2"></span></button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <div class="btn-group position-static text-nowrap"><button class="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Vendor<span class="fas fa-angle-down ms-2"></span></button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                    </div><button class="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">More filters</button>
                  </div>
                </div>
                <div class="col-auto">
                  <a href='/assign-letter' class="btn btn-primary">
                    <span class="fas fa-plus me-2"></span>Assign new letter
                  </a>
                </div>
              </div>
            </div>
            <div class="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
              <div class="table-responsive scrollbar mx-n1 px-1">
                <table class="table fs--1 mb-0">
                  <thead>
                    <tr>
                      <th class="white-space-nowrap fs--1 align-middle ps-0">
                        <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" /></div>
                      </th>
                      <th class="sort white-space-nowrap align-middle" scope="col" id='tb2' data-sort="product">DEPARTMENT</th>
                      <th class="sort align-middle text-start" scope="col" data-sort="price" id='tb3'>SUMMARY</th>
                      <th class="sort align-middle" scope="col" data-sort="category" id='tb4'>PRIORITY</th>
                      <th class="sort align-middle" scope="col" data-sort="tags" id='tb5'>STATUS</th>
                      <th class="sort align-middle" scope="col" data-sort="vendor" id='tb7'>UPDATED AT</th>
                      <th class="sort align-middle" scope="col" data-sort="time" id='tb8'>CREATED AT</th>
                      <th class="sort text-end align-middle pe-0" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody class="list" id="table-latest-review-body">

                    <tr>
                      <td class="fs--1 align-middle ps-0">
                        <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" /></div>
                      </td>

                      <td class="customer align-middle text-start white-space-nowrap"><span class="d-flex align-items-center" href="#!">
                        <div class="avatar avatar-m"><img class="rounded-circle" src="../../../assets/img/team/57.png" alt="" /></div>
                        <h6 class="mb-0 ms-3 text-900">Josef Stravinsky</h6>
                      </span>
                      </td>

                      <td class="price align-middle white-space-nowrap text-start fw-bold text-700">
                        <div class="todo-list">
                          <div data-todo-offcanvas-toogle="data-todo-offcanvas-toogle" data-todo-offcanvas-target="todoOffcanvas-1">
                            Probleme imprimante reseau
                          </div>

                          <div class="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start border-300 shadow-none bg-100" tabindex="-1" aria-labelledby="offcanvasExampleLabel" data-todo-content-offcanvas="data-todo-content-offcanvas" id="todoOffcanvas-1">
                            <div class="offcanvas-body p-0">
                              <div class="p-5 p-md-6 mb-6">
                                <div class="d-flex flex-between-center">
                                  <h2 class="fw-bold fs-2 mb-0 text-1000 line-clamp-1">Probleme imprimante reseau</h2>
                                  <button class="btn btn-phoenix-secondary btn-icon" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                      <path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="px-5 px-md-6">
                                <h5 class="text-1000 mb-2">Status</h5>
                                <select class="form-select mb-4" aria-label="Default select example">
                                  <option selected="">Select</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <h5 class="text-1000 mb-2">Description</h5>
                                <div class="flatpickr-input-container mb-4">
                                  <textarea class="form-control" placeholder='Enter something' id="exampleTextarea" rows="5"></textarea>
                                </div>
                                <div class="text-end mb-9">
                                  <button class="btn btn-sm btn-red" type="button">Delete</button>
                                  <button class="btn btn-primary btn-sm ms-2" type="button">Send replay</button>
                                </div>
                              </div>
                              <div class="mb-6">
                                <div class="px-5 px-md-6">
                                  <h5 class="mb-2">Replays</h5>

                                  <div class="border-top border-300 px-5 px-md-6 py-4">
                                    <div class="me-n3">
                                      <div class="d-flex flex-between-center">
                                        <div>
                                          <div class="d-flex align-items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square text-900 fs-3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                            &nbsp;&nbsp;<p class="text-1000 mb-0 lh-1"> ok</p>
                                          </div>
                                          <p class="fs--1 text-700 mb-0"><a href="#!">Yves
                                            Tanguy </a><span class="text-400 mx-1">| </span><span class="text-nowrap">19th Dec, 08:56 PM</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="border-top border-300 px-5 px-md-6 py-4">
                                    <div class="me-n3">
                                      <div class="d-flex flex-between-center">
                                        <div>
                                          <div class="d-flex align-items-center mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square text-900 fs-3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                            &nbsp;&nbsp;<p class="text-1000 mb-0 lh-1"> ok</p>
                                          </div>
                                          <p class="fs--1 text-700 mb-0"><a href="#!">Yves
                                            Tanguy </a><span class="text-400 mx-1">| </span><span class="text-nowrap">19th Dec, 08:56 PM</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td class="tags align-middle review pb-2"><a class="text-decoration-none" href="#!">
                        <span class="badge badge-phoenix fs--2 badge-phoenix-danger">
                          <span class="badge-label">Urgent</span></span>
                      </a>
                      </td>
                      <td class="tags align-middle review pb-2"><a class="text-decoration-none" href="#!">
                        <span class="badge badge-phoenix fs--2 badge-phoenix-success">
                          <span class="badge-label">Complete</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='badgestatus' class="feather feather-check ms-1" >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </a>
                      </td>
                      <td class="time align-middle white-space-nowrap text-600">Nov 12, 10:45 PM</td>
                      <td class="time align-middle white-space-nowrap text-600">Nov 12, 10:45 PM</td>


                    </tr>

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

        <Footer />
      </div>
    </>
  )
}
