/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const RecommendedJobs: React.FC<Props> = ({className}) => {
    const [category, setCategory] = useState('1')
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recommended Jobs for Tushar</span>
          <span className='text-muted mt-1 fw-semibold fs-6'>Australia</span>
        </h3>

      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-35px me-5'>
                      <img src={toAbsoluteUrl('/media/logos/google.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column max-w-250px'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6 '>
                        Head of Data Analytics and Insights
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, Hadoop, GCP
                      </span>
                    </div>
                  </div>
                </td>
                <td>

                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    Google
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Sydney, Australia
                  </span>
                </td>

                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />

                    </a>

                  </div>
                </td>
              </tr>
              <tr>
                {/*<td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>*/}
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-35px  me-5'>
                      <img src={toAbsoluteUrl('/media/logos/pepsi.jpeg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Senior Data Engineer
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, Hadoop, GCP
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    Pepsi
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Melbourne, Australia
                  </span>
                </td>

                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />

                    </a>

                  </div>
                </td>
              </tr>
              <tr>
                {/*<td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>*/}
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-35px  me-5'>
                      <img src={toAbsoluteUrl('/media/logos/canva.jpeg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Senior Data Engineer
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, Hadoop, GCP
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    Pepsi
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Melbourne, Australia
                  </span>
                </td>

                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />

                    </a>

                  </div>
                </td>
              </tr>
              <tr>
                {/*<td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>*/}
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-35px  me-5'>
                      <img src={toAbsoluteUrl('/media/logos/foxtel.jpeg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Senior Data Engineer
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, Hadoop, GCP
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    Foxtel Group
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Melbourne, Australia
                  </span>
                </td>

                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />

                    </a>

                  </div>
                </td>
              </tr>
              <tr>
                {/*<td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>*/}
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-35px  me-5'>
                      <img src={toAbsoluteUrl('/media/logos/woolies.jpeg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Senior Data Engineer
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, Hadoop, GCP
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    WooliesX
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Melbourne, Australia
                  </span>
                </td>

                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />

                    </a>

                  </div>
                </td>
              </tr>

            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {RecommendedJobs}
