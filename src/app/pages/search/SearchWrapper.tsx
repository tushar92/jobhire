import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Group} from '../../modules/apps/chat/components/Group'
import {
  ListsWidget4,
  ListsWidget5,
  TablesWidget10,
  FeaturedJobs,
  RecommendedJobs,
  MixedWidget8,
  MixedWidget5,
  MixedWidget3,
  ListsWidget2
} from '../../../_metronic/partials/widgets'


const SearchPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_searchbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_searchbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>

      {/* begin::Row  */}
      <div className='row g-5 g-xl-8 pt-3'>
        {/*<div className='col-xl-2 ' id="kt-joblist-wrapper">
          <div className="fw-bold p-1">Filters</div>
          <ListsWidget2 className='card-xl-stretch mb-5 mb-xl-8' title="Head of data in Sydney" />
        </div>*/}
        {/*<div className='border-secondary' id="kt-joblist-wrapper">
          <div className=" h-60px border-bottom border-secondary ">
             <div className="fs-3 fw-bold"> Head of Analytics in Sydney Australia </div>
              <div className="fs-6 fw-bold text-gray-700"> 476 Jobs found </div>
          </div>

        </div>*/}
        <Group />

      </div>
      {/* end::Row  */}

      {/* begin::Row  */}
      <div className='row gy-5 g-xl-8'>


      </div>
      {/* end::Row  */}

      {/* begin::Row */}
      <div className='row gy-0 gx-5 gx-xl-8'>

      </div>
      {/* end::Row */}

    </>
  )
}

const SearchWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.SEARCH'})}</PageTitle>
      <SearchPage />
    </>
  )
}

export {SearchWrapper}
