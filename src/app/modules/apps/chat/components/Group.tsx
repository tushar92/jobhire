/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect, FC } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { Dropdown3, ChatInner } from '../../../../../_metronic/partials'
import { Vertical } from '../../../wizards/components/Vertical'
import { Horizontal } from '../../../wizards/components/Horizontal'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import jobsData from "./data.json";
import clsx from 'clsx'


const Group: FC = () => {
  const maxJobs = 6
  const random = Math.random()
  const [currentJob, setCurrentJob] = useState(jobsData[0])
  const [paginatedJobs, setPaginatedJobs] = useState(jobsData.slice(0, maxJobs))
  const [activePage, setActivePage] = useState(1)
  const jobsCount = jobsData.length
  const pages = Math.ceil(jobsCount / maxJobs)

  const handlePagination = (index: any) => {
    setPaginatedJobs(jobsData.slice(maxJobs * index, (maxJobs * index) + maxJobs))
    setActivePage(index + 1)
  }

  const handleClick = (index: any) => {
    setCurrentJob(jobsData.find(x => x.id === index)!)
  };


  return (
    <div className='d-flex flex-column flex-lg-row mt-0'>
      <div className='flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0'>
        <div className='card card-flush border border-secondary'>
          <div className='card-header pt-7' id='kt_chat_contacts_header'>
            {/*<form className='w-100 position-relative' autoComplete='off'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />

              <input
                type='text'
                className='form-control form-control-solid px-15'
                name='search'
                placeholder='Search by username or email...'
              />
            </form>*/}
            <div className='w-100 border-bottom border-secondary' id="kt-joblist-wrapper">
              <div className="pb-5">
                <div className="fs-3 fw-bold text-truncate"> Senior software egineer </div>
                <div className="fs-6 text-gray-700 fw-bold"> <span className="fs-4 fw-bold text-primary ">{jobsCount}</span> Jobs found | Sydney Australia</div>
              </div>

            </div>
          </div>

          <div className='card-body pt-5 pb-0 px-0 ' id='kt_chat_contacts_body'>
            <div
              className='scroll-y h-450px '
              data-kt-scroll='true'
              data-kt-scroll-activate='{default: false, lg: true}'
              data-kt-scroll-max-height='450px'
              data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
              data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
              data-kt-scroll-offset='0px'
            >
              {paginatedJobs.map((job, i) => {
                return (<>
                  <a href='#' key={job.id} id={job.id.toString()} className={clsx('text-hover-primary mb-2')} onClick={() => handleClick(job.id)} >
                    <div className={clsx('d-flex flex-stack py-4 px-4', { 'bg-light-primary shadow-sm': currentJob.id === job.id })}>
                      <div className='d-flex align-items-center'>

                        <div className='symbol symbol-45px symbol-circle'>
                          {/*<span className='symbol-label bg-light-danger text-danger fs-6 fw-bolder'>

                           {job.company.charAt(0).toUpperCase()}
                           </span>*/}
                          {job.logo && <img alt='Pic' src={job.logo} />}
                        </div>

                        <div className='ms-5'>
                          <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                            {job.job_name}
                          </a>
                          <div className='fw-bold text-gray-700'>{job.company}</div>
                        </div>

                      </div>

                      <div className='d-flex flex-column align-items-end ms-2'>
                        <span className='text-muted fs-7 mb-1'>Sponsored</span>
                      </div>
                    </div>

                    <div className='separator separator-dashed'></div>
                  </a>
                </>
                )
              })}

              {/*pagination*/}


            </div>
          </div>

          <div className='card-footer w-100 border-bottom border-secondary pt-2' id="kt-joblist-wrapper">
            <div className='d-flex flex-stack '>
              <div className='d-flex align-items-center w-100'>
                <ul className="pagination w-100 align-items-center">
                  <li className="page-item previous disabled">
                    <a href="#" className="page-link">
                      <i className="previous"></i>
                    </a>
                  </li>


                  {[...Array(pages)].map((e, i) => {
                    return (<>
                      <li className={clsx('page-item', { 'active': activePage === i + 1 })}>
                        <a href="#" className="page-link" key={i} onClick={() => handlePagination(i)}>
                          {i + 1}
                        </a>
                      </li>
                    </>)
                  })}

                  <li className="page-item next">
                    <a href="#" className="page-link">
                      <i className="next"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card border border-secondary' id='kt_chat_messenger'>
          <div className='card-header' id='kt_chat_messenger_header'>
            <div className='card-title'>
              <div className=''>
                <div className="fs-1 fw-bold pe-10"> {currentJob.job_name} </div>
              </div>
              <OverlayTrigger
                placement='top'
                overlay={(props) => (
                  <Tooltip id='button-tooltip' {...props}>
                    Save for later
                  </Tooltip>
                )}
              >
                <a className='btn btn-sm btn-icon' data-target={currentJob.id}>
                  <i className="bi bi-star fs-3 text-primary"></i>
                </a>
              </OverlayTrigger>
            </div>


            <div className='card-toolbar'>
              <div className='me-n3'>
                {currentJob.id % 2 == 0 && <button type='submit' className='btn btn-sm btn-primary fs-6' id='kt_advanced_search_button_1'
                  data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                  <i className="bi bi-pencil-square fs-4 me-2"></i>
                  Apply
                </button>}

                {currentJob.id % 2 == 1 && <button type='submit' className='btn btn-sm btn-outline btn-outline-success fs-6 fw-bold' id='track_App_button'
                  data-bs-toggle="modal" data-bs-target="#trackApp_modal">
                  <i className="bi bi-send-check fs-3 me-2"></i>
                  Track Your Application
                </button>}



                {/*<button
                  className='btn btn-sm btn-icon btn-active-light-primary'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                >
                  <i className='bi bi-three-dots fs-2'></i>
                </button>
                <Dropdown3 />*/}
              </div>
            </div>
          </div>

          <ChatInner job={currentJob} />
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} id="kt_modal_1">
        <div className="modal-dialog" style={{ maxWidth: "1200px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title "> {currentJob.job_name} - {currentJob.company}</h3>
              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr061.svg"
                  className="svg-icon svg-icon-2x text-primary"
                />
              </div>
            </div>
            <div className="modal-body bg-gray-200" key={currentJob.id}>
              <Vertical job={currentJob} random= {random} />
              {/*<Horizontal />*/}
            </div>
            <div className="modal-footer">


            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} id="trackApp_modal">
        <div className="modal-dialog" style={{ maxWidth: "1200px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Application History</h5>
              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr061.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
            <div className="modal-body">
              <Horizontal />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-sm btn-light"
                data-bs-dismiss="modal"
              >
                Close
        </button>
              <button type="button" className="btn btn-primary">
                Save changes
        </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { Group }
