/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import clsx from 'clsx'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'

type Props = {
  className: string,
  title: string
}

const ListsWidget2: React.FC<Props> = ({ className, title }) => {
  const jobsCount = 8
  const pages = Math.ceil(jobsCount / 6)
  return (
    <div className={` ${className}`}>
      {/* begin::Header */}

      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2' id="kt_chat_contacts_body">
        {/* Filter 1*/}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item border border-secondary  mb-5">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed bg-white text-black fw-bold p-4 border-bottom border-secondary shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Job Type</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body p-4">
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Full Time (122)
                    </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Part Time (12)
                    </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Contract (80)
                    </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Internship (90)
                    </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Remote (100)
                    </label>
                </div>

              </div>
            </div>
          </div>

          <div className="accordion-item border border-secondary mb-5">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed bg-white text-black fw-bold p-4 border-bottom border-secondary shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Location</button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body p-4">
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Full Time (122)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Part Time (12)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Contract (80)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Internship (90)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Remote (100)
                      </label>
                </div>


              </div>
            </div>
          </div>

          <div className="accordion-item border border-secondary mb-5 shadow-0">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed bg-white text-black fw-bold p-4 border-bottom border-secondary shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                Industry</button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body p-4">
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Full Time (122)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Part Time (12)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Contract (80)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Internship (90)
                      </label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-sm mb-3">
                  <input className="form-check-input border border-gray-400 h-15px w-15px" role="button" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-black" htmlFor="flexCheckDefault" role="button">
                    Remote (100)
                      </label>
                </div>


              </div>
            </div>
          </div>


        </div>

        {/* Filter 1*/}

      </div>
      {/* end::Body */}
    </div>
  )
}

export { ListsWidget2 }
