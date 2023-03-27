/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSubMain} from './AsideMenuItemWithSubMain'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='fa-solid fa-house'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
      <AsideMenuItem
        to='/search'
        title='Layout Builder'
        bsTitle='Search your next job'
        fontIcon='fa-sharp fa-solid fa-magnifying-glass'
        className='py-2'
      />

      <AsideMenuItem
        to='/builder'
        title='Layout Builder'
        bsTitle='Saved Jobs'
        fontIcon='fa-solid fa-star'
        className='py-2'
      />

      <AsideMenuItem
        to='/apps/user-management/users'
        title='User management'
        fontIcon='fa-solid fa-briefcase'
        bsTitle='Applied Jobs'
        className='py-2'
      />
      <div className="separator border-gray-400 separator-dashed my-5"></div>

      <AsideMenuItem
        to='/crafted/account/overview'
        title='User management'
        fontIcon='fa-solid fa-gear'
        bsTitle='Account Settings'
        className='py-2'
      />

      <AsideMenuItem
        to='/crafted/account/settings'
        title='User management'
        fontIcon='fa-solid fa-credit-card'
        bsTitle='Billing'
        className='py-2'
      />

      {/*<AsideMenuItem
        outside={true}
        to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        title='User management'
        fontIcon='bi-card-text'
        bsTitle={`Changelog ${process.env.REACT_APP_VERSION}`}
        className='py-2'
      />*/}
    </>
  )
}
