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
  const pages = Math.ceil(jobsCount/6)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>{title}</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2' id="kt_chat_contacts_body">
        <div className=' scroll-y me-n5 pe-5 h-200px h-lg-auto ' data-kt-scroll='true'
          data-kt-scroll-activate='{default: true, lg: true}'
          data-kt-scroll-max-height='500px'
          data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
        >


          {/* begin::Items */}
          {[...Array(jobsCount)].map((e, i) => {
            return (<>
              <div className={clsx('d-flex align-items-center mb-6 ribbon ribbon-end ribbon-clip', i ? "mt-6" : "")} key={i}>
                {/* begin::Avatar */}

                <div className='symbol symbol-35px me-5'>
                  {i % 2 == 0 && <img src={toAbsoluteUrl('/media/logos/google.png')} alt='' />}
                  {i % 2 == 1 && <img src={toAbsoluteUrl('/media/logos/canva.jpeg')} alt='' />}
                </div>
                {/* end::Avatar */}
                {/* begin::Text */}
                <div className='flex-grow-1'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6 w-75'>
                    {i % 2 == 0 && "Senior Data Architect"}
                    {i % 2 == 1 && "Salesforce Marketing Cloud (SFMC) Lead"}
                  </a>
                  <span className='text-muted d-block fw-semibold'>Project Manager {Math.ceil(pages)}</span>
                </div>
                {/* end::Text */}
              </div>
              {/* end::Item */}
              { i < jobsCount-1 && <div className="separator separator-dashed border-secondary"></div>}
              </>
            )
          })}

        </div>
        <ul className="pagination mt-2 pt-8 border-top border-primary">
        <li className="page-item previous disabled" >
          <a href="#" className="page-link">
            <i className="previous"></i>
          </a>
        </li>

        {[...Array(pages)].map((e, i) => {
          return (<>
            <li className="page-item" key={i}>
              <a href="#" className="page-link">
                {i+1}</a>
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
      {/* end::Body */}
    </div>
  )
}

export { ListsWidget2 }
