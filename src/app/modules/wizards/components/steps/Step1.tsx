/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { KTSVG } from '../../../../../_metronic/helpers'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { Field, ErrorMessage, getIn } from 'formik'
import clsx from 'clsx'


const Step1: FC = () => {
  const [uploadedFileName, setuploadedFileName] = useState(null)
  const [uploadKey, setUploadKey] = useState(Math.random().toString(36))
  const [isFocused, setFocused] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const onValueChange = (phoneNumber: any) => { }

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
      {/*<div className='pb-10 pb-lg-15'>
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
      </div>*/}

      <div className='fv-row'>
        <div className="row">
          <div className="col-lg-12">
            <label className='form-label mb-3 fw-bold'>  Attach Your Resume</label>
          </div>

          <div className={clsx({ 'col-lg-12': !uploadedFileName }, { 'col-lg-11': uploadedFileName })}>
            {/*<label htmlFor="formFileSm w-100px" className="form-label ">Small file input example</label>*/}
            {/* Uploader Area*/}
            {!uploadedFileName && <label
              className='btn btn-sm btn-outline btn-active-light-primary p-3 d-flex align-items-center justify-content-center mb-10'
              htmlFor='formFileSm'
            >

              <KTSVG path="/media/icons/duotune/files/fil013.svg" className="svg-icon-muted svg-icon-2x" />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-800  d-block fs-6'>Click here to upload</span>
              </span>
            </label>}

            {/* Uploaded Area*/}

            {uploadedFileName && <div className='notice d-flex bg-light-primary rounded  mb-9 p-3 justify-content-center'>
              <KTSVG
                path='/media/icons/duotune/files/fil016.svg'
                className='svg-icon-2x svg-icon-primary me-4'
              />
              <div className='d-flex'>
                <div className='fw-bold text-center d-flex'>
                  <div className='fs-5 text-primary d-flex align-items-center'>
                    {uploadedFileName}
                  </div>
                </div>
              </div>
            </div>}
            <input className="form-control form-control-lg form-control-primary d-none" id="formFileSm" type="file" onChange={handleChange} key={uploadKey} />
          </div>

          <div className='col-lg-1'>
            {uploadedFileName && <a href="#" className="" onClick={clearFileInput}>
              <div className='notice d-flex  btn-active-light-danger   mb-9 p-3 justify-content-center'>
                <KTSVG
                  path='/media/icons/duotune/general/gen042.svg'
                  className='svg-icon-2x svg-icon-danger '
                />

              </div>
            </a>}
          </div>
        </div>

        <div className='mb-10 fv-row row'>
          <div className="col-lg-6">
            <label className='form-label mb-3 fw-bold'>Email</label>
            <Field
              type='email'
              className='form-control form-control-lg form-control-solid input-focus-primary text-dark fs-6 border-secondary '
              name='email'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='email' />
            </div>
          </div>
          <div className="col-lg-6">
            <label className='form-label mb-3 fw-bold'>Phone</label>
            <PhoneInput
              placeholder="Enter phone number"
              name=""
              international
              value={phoneValue}
              onChange={onValueChange}
              defaultCountry="AU"
              className='form-control form-control-lg form-control-solid fs-6 border-secondary '
              countryCallingCodeEditable={false}
            />

          </div>
        </div>

        <div className='mb-10 fv-row row'>
          <div className="col-lg-6">
            <label className='form-label mb-3 fw-bold'>Australian working rights</label>
            <div className=' fv-row'>
              <select
                className='form-select form-select-solid form-select-lg fs-6 text-gray-800 border-secondary '
                name="workRights"
              >
                <option value=''>Select your working rights</option>
                <option value='USD'> Citizen</option>
                <option value='GBP'> Permanent Resident</option>
                <option value='AUD'>VISA transfer required </option>
                <option value='JPY'>Offshore - VISA  required</option>
              </select>

            </div>
          </div>
          <div className="col-lg-6">
            <label className='form-label mb-3 fw-bold'>How soon can you start?</label>
            <div className=' fv-row'>
              <select
                className='form-select form-select-solid form-select-lg fs-6 text-gray-800 border-secondary '
                name="avail"
              >
                <option value=''>Select Availability</option>
                <option value='USD'>ASAP</option>
                <option value='GBP'>In 2 Weeks</option>
                <option value='AUD'>In 4 Weeks </option>
                <option value='JPY'>Not sure</option>
              </select>

            </div>
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
