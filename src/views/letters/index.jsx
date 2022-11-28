import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer';
import { ToastContainer } from "react-toastify";
import { List } from '../../api/letter';
import Pagination from "../../common/pagination/pagination";
import { Assigneded, Closed, Complete, Pending, Processing } from '../../common/badges/statusBadges';
import { High, Low, Medium, Urgent } from '../../common/badges/priorityBadges';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { Preloader } from '../components/preloader'

export const Letters = () => {
  const navigate = useHistory();
  const [letters, setLetter] = useState([]);
  const [visible, setVisible] = useState(false);
  const [letterId, setLetterId] = useState();
  const [updateData, setUpdateData] = useState({
    id: '',
    departmentName: '',
    updatedAt: new Date(),
  });

  // PAGINATION
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentItems = letters.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    handleRefresh()
  }, []);

  // REFRESH TABLE DATA
  const handleRefresh = () => {
    List().then(setLetter)
  }

  // NAVIGATE EDIT PAGE
  const handleEditPage = event => {
    navigate.push('/reply?id=' + event.currentTarget.id)
    window.location.reload(false)
  };

  return (
    <>
      <div class="content ">
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={true}
          newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable
          pauseOnHover={false} theme="light"
        />
        <div class="mb-9">
          <div class="row g-3 mb-4">
            <div class="col-auto">
              <h3 class="mb-0">Letters</h3>
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
                      <th class="sort align-middle text-start" scope="col" data-sort="price" id='tb3'>SUBJECT</th>
                      <th class="sort align-middle" scope="col" data-sort="category" id='tb4'>PRIORITY</th>
                      <th class="sort align-middle" scope="col" data-sort="tags" id='tb5'>STATUS</th>
                      <th class="sort align-middle" scope="col" data-sort="time" id='tb8'>CREATED AT</th>
                      <th class="sort align-middle" scope="col" data-sort="vendor" id='tb7'>UPDATED AT</th>
                      <th class="sort text-end align-middle pe-0" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody class="list" id="table-latest-review-body">
                    {currentItems.length === 0 ?
                      <tr>
                        <td colSpan={6} class="text-center">Letters Not Found</td>
                      </tr>
                      :
                      currentItems.map(letter => (
                        <tr onClick={handleEditPage} id={letter.id} class="tableRow">
                          <td class="fs--1 align-middle ps-0">
                            <div class="form-check mb-0 fs-0">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                          </td>

                          <td class="customer align-middle text-start white-space-nowrap">
                            <h6 class="align-middle text-900">{letter.department}</h6>
                          </td>

                          <td class="price align-middle white-space-nowrap text-start fw-bold text-700">
                            {letter.subject}
                          </td>

                          <td class="tags priority-badge align-middle review pb-2"><a class="text-decoration-none" href="#!">
                            {letter.priority === 'low' ?
                              <Low />
                              : letter.priority === 'high' ?
                                <High />
                                : letter.priority === 'medium' ?
                                  <Medium />
                                  : letter.priority === 'urgent' ?
                                    <Urgent />
                                    : null}
                          </a>
                          </td>
                          <td class="tags status-badge align-middle review pb-2"><a class="text-decoration-none" href="#!">
                            {letter.status === 'assigneded' ?
                              <Assigneded />
                              : letter.status === 'pending' ?
                                <Pending />
                                : letter.status === 'canceled' ?
                                  <Closed />
                                  : letter.status === 'processing' ?
                                    <Processing />
                                    : letter.status === 'completed' ?
                                      <Complete />
                                      : null
                            }

                          </a>
                          </td>
                          <td class="time align-middle white-space-nowrap text-600">{moment(letter.createdAt).format('MMM DD YYYY')}</td>
                          <td class="time align-middle white-space-nowrap text-600">{moment(letter.updatedAt).format('MMM DD YYYY')}</td>
                        </tr>

                      ))}
                  </tbody>
                </table>
              </div>
              <div class="row align-items-center justify-content-between py-2 pe-0 fs--1">
                <div class="col-auto d-flex">
                  <p class="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900" data-list-info="data-list-info"></p>
                  <a onClick={handleRefresh} class="refresh-lnk fw-semi-bold" href="#!" data-list-view="*">Refresh
                    <span id="refreshIcon" class="fas  fa-arrows-rotate ms-1" data-fa-transform="down-1"></span>
                  </a>
                </div>
                <div class="col-auto d-flex">
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={letters.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                  />
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
