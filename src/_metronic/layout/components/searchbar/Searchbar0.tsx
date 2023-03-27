/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { MenuInnerWithSub } from '../../../layout/components/header/MenuInnerWithSub'
import { MegaMenu } from '../../../layout/components/header/MegaMenu'

/* eslint-disable no-unreachable */
const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('1')
  return (
    <div
      id='kt_layout_searchbar'
      className='card rounded-0 bgi-no-repeat bgi-position-x-end bgi-size-cover d-none '
      style={{
        backgroundColor: '#663259',
        backgroundSize: 'auto 100%',
        backgroundImage: `url('${toAbsoluteUrl('/media/misc/taieri.svg')}')`,
        boxShadow: `rgb(0 0 0 / 8%) 0px 0px 0px 1px, rgb(0 0 0 / 30%) 0px 4px 4px 0px`,
        zIndex: 9
      }}
    >
      {/* begin::body */}
      <div className='card-body container-xxl pt-1 pb-1'>

        {/* begin::Wrapper */}
        <div className='d-flex flex-column'>
          {/*begin::Block*/}
          <div className='d-lg-flex align-lg-items-center'>
            {/* begin::Simple form */}
            <div className='rounded d-flex flex-column flex-lg-row align-items-lg-center bg-body p-5 w-100 h-lg-60px me-lg-10 my-5'>
              {/* begin::Row */}
              <div className='row flex-grow-1 mb-5 mb-lg-0'>
                {/* begin::Col */}
                <div className='col-lg-3 d-flex align-items-center mb-3 mb-lg-0'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin006.svg'
                    className='svg-icon-1 svg-icon-primary me-1'
                  />
                  {/* begin::Input */}
                  <input
                    type='text'
                    className='form-control form-control-flush flex-grow-1'
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Your Search'
                  />
                  {/* end::Input */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className='col-lg-3 d-flex align-items-center mb-5 mb-lg-0'>
                  {/* begin::Desktop separartor */}
                  <div className='bullet bg-secondary d-none d-lg-block h-30px w-2px me-5'></div>
                  {/* end::Desktop separartor */}
                  <KTSVG
                    path='/media/icons/duotune/general/gen025.svg'
                    className='svg-icon-1 svg-icon-primary me-1'
                  />
                  {/* begin::Select */}
                  <select
                    className='form-select border-0 flex-grow-1'
                    data-control='select2'
                    data-placeholder='Category'
                    data-hide-search='true'
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value=''></option>
                    <option value='1'>Job Type</option>
                    <option value='2'>Full Time</option>
                    <option value='3'>Part Time</option>
                  </select>
                  {/* end::Select */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className='col-lg-3 d-flex align-items-center'>
                  {/* begin::Desktop separartor */}
                  <div className='bullet bg-secondary d-none d-lg-block h-30px w-2px me-5'></div>
                  {/* end::Desktop separartor */}
                  <KTSVG
                    path='/media/icons/duotune/general/gen018.svg'
                    className='svg-icon-1 svg-icon-primary me-3'
                  />


                  {/* begin::Link */}
                  <a
                    href='#'
                    className='btn btn-color-muted px-0 text-start rounded-0 py-1'
                    id='kt_modal_select_location_target'
                  >
                    Location
                  </a>
                  {/* end::Link */}
                </div>

                {/* begin::Col */}
                <div className='col-lg-3 d-flex align-items-center mb-5 mb-lg-0'>
                  {/* begin::Desktop separartor */}
                  <div className='bullet bg-secondary d-none d-lg-block h-30px w-2px me-5'></div>
                  {/* end::Desktop separartor */}
                  <KTSVG
                    path='/media/icons/duotune/general/gen019.svg'
                    className='svg-icon-1 svg-icon-primary me-1'
                  />
                  {/* begin::Select */}
                  <div
                    id='kt_header_menu'
                    className='header-menu align-items-stretch'
                    data-kt-swapper='true'
                    data-kt-swapper-mode='prepend'
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                  >
                    <div
                      className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
                      id='#kt_header_menu'
                      data-kt-menu='true'
                    >
                      <MenuInnerWithSub
                        isMega={true}
                        title='More Controls'
                        to='/mega-menu'
                        menuPlacement='bottom-start'
                        menuTrigger='click'
                        hasArrow={true}
                      >
                        <MegaMenu />
                      </MenuInnerWithSub>
                    </div>
                    </div>
                  {/* end::Select */}
                </div>
                {/* end::Col */}
              </div>
              {/* end::Row */}

              {/* begin::Action */}
              <div className='min-w-150px text-end'>
                <button type='submit' className='btn btn-primary' id='kt_advanced_search_button_1'>
                <i className="bi bi-search fs-4 me-2"></i>
                  Search
                </button>
              </div>
              {/* end::Action */}
            </div>
            {/* end::Simple form */}


          </div>
          {/*end::Block*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::body*/}
    </div>
  )
}
export { Searchbar }
