import React from 'react'
import { EuiAvatar, EuiFlexGroup, EuiFlexItem, EuiButtonEmpty, EuiIcon } from '@elastic/eui'
import { staticImages } from '../../shared/images'

export function UserInfo() {
  const [isProfileFlyoutOpen, setIsProfileFlyoutOpen] = React.useState(false)

  const handleAvatarClick = () => {
    setIsProfileFlyoutOpen(true)
  }

  const getCurrentViewText = (username: any) => {
    return username
  }

  const getTenantName = (tenantName: any) => {
    return tenantName
  }

  const getNameAndRoleFrame = (username: any, tenantName: any) => (
    <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false} justifyContent="center">
      <EuiFlexItem>
        <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false} direction="column">
          <EuiFlexItem>
            <p className="dfp-header__user-role">
              {getCurrentViewText(username)}{' '}
            </p>
          </EuiFlexItem>
          <EuiFlexItem>
            <p className="dfp-header__user-name">{getTenantName(tenantName)}</p>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  )

  return (
    <>
      <EuiFlexGroup
        alignItems="center"
        gutterSize="s"
        responsive={false}
        className="dfp-header__user-button"
      >
        <EuiFlexItem>
          {getNameAndRoleFrame('Bob Smith', 'Customer')}
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty onClick={handleAvatarClick}>
            <EuiAvatar
              size="l"
              name="User Name"
              imageUrl={staticImages.header.avatarDefault}
              className="dfp-header__user-avatar"
            />
          </EuiButtonEmpty>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )
}
