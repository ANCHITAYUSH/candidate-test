import React, { useState } from 'react'
import {
  EuiSideNav,
  EuiIcon,
  EuiHeaderLogo,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageSideBar,
} from '@elastic/eui'
import { staticImages } from '../../shared/images'
import './Sidebar.scss'

// ... rest of the imports

export interface SideNavItem {
  id: string
  icon: string
  text: string
  path?: string
  items?: SideNavItem[]
}
export interface EuiSideNavItem {
  id: string
  name: string
  icon?: React.JSX.Element
  onClick?: () => void
  isSelected?: boolean
  items?: EuiSideNavItem[]
  className?: string
}

const menuItems = [
  {
    id: 'dashboard',
    icon: staticImages.sidebar.dashboard,
    text: 'Dashboard',
    path: '/dashboard',
  }
]

export default function Sidebar() {
  const [selectedItemId, setSelectedItemId] = useState<string>('')

  const getSidebarClass = () => {
    return 'customer-view';
  }

  // TODO: temporary menu items disabled for click through
  const createSideNavItems = () => {
    return menuItems.map(item => ({
      id: item.id,
      name: item.text,
      icon: <EuiIcon type={item.icon} size="l" />,
      isSelected: location.pathname === item.path
    }));
  };

  const sideNav = [
    {
      id: 'main',
      name: '',
      items: createSideNavItems(),
    },
  ]

  return (
    <EuiPageSideBar className={`dfp-sidebar ${getSidebarClass()}`}>
      <div className="dfp-sidebar__header">
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiHeaderLogo
              iconType={staticImages.sidebar.logo}
              href="#"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            >
              Digital Fabric
            </EuiHeaderLogo>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      <EuiSideNav
        mobileTitle="Navigation"
        items={sideNav}
        className="dfp-sidebar__nav"
      />

      <div className="dfp-sidebar__footer">
        <button
          className="dfp-sidebar__logout-button"
        >
          <EuiIcon type={staticImages.sidebar.logout} size="l" />
          <span>Logout</span>
        </button>
      </div>
    </EuiPageSideBar>
  )
}
