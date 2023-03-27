/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { KTSVG } from '../../../../../_metronic/helpers'
import { Field, ErrorMessage } from 'formik'
import clsx from 'clsx'

const Step1: FC = () => {
  const [uploadedFileName, setuploadedFileName] = useState(null)
  const [uploadKey, setUploadKey] = useState(Math.random().toString(36))
  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0].name)
      setuploadedFileName(e.target.files[0].name)
    }
  }

  const clearFileInput = () => {
    setUploadKey(Math.random().toString(36))
    setuploadedFileName(null)
  }

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Attach Your Resume
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-800 fw-bold fs-6'>
          The current recruiter has asked for resume as an attachment.
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className="row">
          <div className={clsx({ 'col-lg-12': !uploadedFileName }, { 'col-lg-10': uploadedFileName })}>
            {/*<label htmlFor="formFileSm w-100px" className="form-label ">Small file input example</label>*/}
            {/* Uploader Area*/}
            {!uploadedFileName && <label
              className='btn btn-outline btn-outline-dashed btn-outline-primary p-5 d-flex align-items-center justify-content-center mb-10'
              htmlFor='formFileSm'
            >

              <KTSVG path="/media/icons/duotune/files/fil013.svg" className="svg-icon-muted svg-icon-2hx" />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-700 fw-bolder d-block fs-4'>Click here to upload</span>
              </span>
            </label>}

            {/* Uploaded Area*/}

            {uploadedFileName && <div className='notice d-flex bg-light-success rounded border-success border border-dashed mb-9 p-6 justify-content-center'>
              <KTSVG
                path='/media/icons/duotune/files/fil016.svg'
                className='svg-icon-2tx svg-icon-success me-4'
              />
              <div className='d-flex'>
                <div className='fw-bold text-center d-flex'>
                  <div className='fs-4 text-success d-flex align-items-center'>
                    {uploadedFileName}
                  </div>
                </div>
              </div>
            </div>}
            <input className="form-control form-control-lg form-control-primary d-none" id="formFileSm" type="file" onChange={handleChange} key={uploadKey} />
          </div>

          <div className='col-lg-2'>
            {uploadedFileName && <a href="#" className="" onClick={clearFileInput}>
              <div className='notice d-flex bg-light-danger rounded border-danger border border-dashed mb-9 p-6 justify-content-center'>
                <KTSVG
                  path='/media/icons/duotune/files/fil015.svg'
                  className='svg-icon-2tx svg-icon-danger '
                />

              </div>
            </a>}
          </div>
        </div>
        {/*<div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='personal'
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-primary p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_personal'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com005.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Personal Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  If you need more info, please check it out dasd
                </span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='corporate'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-primary p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <KTSVG path='/media/icons/duotune/finance/fin006.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Corporate Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  Create corporate account to assa  users
                </span>
              </span>
            </label>
          </div>
          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>*/}
      </div>
    </div>
  )
}

export { Step1 }
