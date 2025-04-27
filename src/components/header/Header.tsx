import React from 'react'
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiTitle,
  EuiSpacer,
  EuiFlexItem,
  EuiFlexGroup,
} from '@elastic/eui'
import { UserInfo } from './UserInfo'
import './Header.scss'

function Header() {
  const currentPath = location.pathname.substring(1)

  const getPageTitle = (path: string) => {
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <EuiHeader className="dfp-header">
      <EuiHeaderSection grow={true}></EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem border="none">
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem>
              <UserInfo />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  )
}

export default Header
