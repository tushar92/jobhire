/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string,
  job?: any
}

const TrackApplication: React.FC<Props> = ({className,job}) => {
  return (
    <div className={`card pb-0 ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold mb-2 text-dark'>{job.job_name}</span>
          <span className='text-muted fw-semibold fs-7'>{job.company}</span>
        </h3>
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
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'>21 March, 2023</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-check text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <span className='fw-bold text-gray-800 ps-5 fs-6'>Application Submitted</span>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'>22 March, 2023</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-check text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bold text-gray-800 ps-5 fs-6'>Application viewed by the recruiter
                <div className="text-muted fs-7">Great news! - the recruiter has viewed your application.</div>
              </div>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'>24 March, 2023</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa-solid fa-binoculars text-primary fs-2'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bold text-gray-800 ps-5 fs-6'>The recruiter viewed your Entradle profile
                <div className="text-muted fs-7">Great news, the recruiter has shown interest in your profile.</div>
              </div>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'>21 March, 2023</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa-solid fa-thumbs-up text-primary fs-2'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bold text-success ps-5 fs-6'>Application Shortlisted
              <div className="text-muted fs-7">Good Luck. The recruiter will reach out to you to discuss next steps.</div>
              </div>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}

          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'>21 March, 2023</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-minus text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bold text-danger ps-5 fs-6'>Application Unsuccessful
              <div className="text-muted fs-7">Better luck next time!</div>
              </div>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}

          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-600 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa-solid fa-minus text-secondary fs-1'></i>
            </div>
            {/* end::Badge */}

          </div>

        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {TrackApplication}
