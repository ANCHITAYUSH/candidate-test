// Sidebar related images
import logoIcon from './sidebar_logo_icon.png'
import dashboardIcon from './sidebar_dash_icon.svg'
import organisationIcon from './sidebar_org_icon.svg'
import customerIcon from './sidebar_customer_icon.svg'
import healthIcon from './sidebar_health_icon.svg'
import resourceIcon from './sidebar_resource_icon.svg'
import billingIcon from './siderbar_billing_icon.svg'
import reportIcon from './sidebar_report_icon.svg'
import settingIcon from './sidebar_setting_icon.svg'
import assetIcon from './sidebar_asset_icon.svg'
import logoutIcon from './sidebar_logout_icon.svg'
// Login related images
import loginLeftIcon from './login_left_icon.png'
import loginCenterPic from './login_center_pic.png'
import loadingImage from './loading_image.png'

// Header related images
import headerAvatarDefault from './header_avatar_default.svg'
import headerUserPreferenceIcon from './header_user_preference_icon.svg'
import headerLogoutIcon from './header_logout_icon.svg'

// Pillar related images
import pillarAvailabilityIcon from './pillar_availability_icon.svg'
import pillarDigitalFabricIcon from './pillar_digital_fabric_icon.svg'
import pillarEconomicIcon from './pillar_economic_icon.svg'
import pillarEnvironmentIcon from './pillar_environment_icon.svg'
import pillarSecurityComplianceIcon from './pillar_security_compliance_icon.svg'
import pillarUserExperienceIcon from './pillar_user_experience_icon.svg'

// Connector related images
import connectorAteraNetworkIcon from './connector_atera_network_icon.svg'
import connectorAWSIcon from './connector_aws_icon.svg'
import connectorAzureIcon from './connector_azure_icon.svg'
import connectorGoogleCloudIcon from './connector_google_cloud_icon.svg'
import connectorIvantiIcon from './connector_ivanti_icon.svg'
import connectorLogicMonitorIcon from './connector_logic_monitor_icon.svg'
import connectorManageEngineIcon from './connector_manage_engine_icon.svg'
import connectorMerakiIcon from './connector_meraki_icon.svg'
import connectorOracleIcon from './connector_oracle_icon.svg'
import connectorPaloAltoIcon from './connector_paloalto_icon.svg'
import connectorServiceNowIcon from './connector_servicenow_icon.svg'
import connectorViptelaIcon from './connector_viptela_icon.svg'

// Common images
import commonPlusCircle from './common_plus_circle.svg'
import iconSortUp from './common_sort_up_icon.svg'
import iconSortDown from './common_sort_down_icon.svg'
import infoIcon from './common_info_icon.svg'
import alertIcon from './common_alert_icon.svg'
import snoozeBellIcon from './common_snooze_bell_icon.svg'
import bellIcon from './common_bell_icon.svg'
import commonTrendIcon from './common_trend_icon.svg'
import commonWrenchIcon from './common_wrench_icon.svg'
import commonArrowsClockwiseIcon from './common_arrows_clockwise_icon.svg'
import commonTrendUpTriangleIcon from './common_trend_up_triangle.svg'
import commonTrendDownTriangleIcon from './common_trend_down_triangle.svg'
import commonNewUserIcon from './common_new_user_icon.svg'
import commonUncheckedBoxIcon from './common_unchecked_box_icon.svg'
import commonCheckedBoxIcon from './common_checked_box_icon.svg'
import commonCrossWithCircleIcon from './common_cross_with_circle.svg'
import commonImpersonatingIcon from './common_impersonating_icon.svg'
import commonDeleteIcon from './common_delete_icon.svg'
import commonDownloadIcon from './common_download_icon.svg'
import commonMoreActionsIcon from './common_more_actions_icon.svg'
import commonDeactivateIcon from './common_deactivate_icon.svg'
import commonActivateIcon from './common_activate_icon.svg'
import commonMergeDuplicationAssetIcon from './common_merge_duplication_asset_icon.svg'
import commonMergeDuplicationRoleIcon from './common_merge_duplication_role_icon.svg'
import commonFilterIcon from './common_filter_icon.svg'
import commonTrendUpIcon from './common_up_green_icon.svg'
import commonTrendDownIcon from './common_down_red_icon.svg'


import design from './design.svg'

export const staticImages = {
  sidebar: {
    logo: logoIcon,
    dashboard: dashboardIcon,
    organisation: organisationIcon,
    customer: customerIcon,
    asset: assetIcon,
    health: healthIcon,
    resource: resourceIcon,
    billing: billingIcon,
    report: reportIcon,
    setting: settingIcon,
    logout: logoutIcon,
  },
  header: {
    avatarDefault: headerAvatarDefault,
    userPreference: headerUserPreferenceIcon,
    logout: headerLogoutIcon,
  },
  login: {
    leftIcon: loginLeftIcon,
    centerPic: loginCenterPic,
  },
  pillar: {
    availability: pillarAvailabilityIcon,
    digitalFabric: pillarDigitalFabricIcon,
    economic: pillarEconomicIcon,
    environment: pillarEnvironmentIcon,
    securityCompliance: pillarSecurityComplianceIcon,
    userExperience: pillarUserExperienceIcon,
  },
  common: {
    loading: loadingImage,
    plusCircle: commonPlusCircle,
    sortUp: iconSortUp,
    sortDown: iconSortDown,
    info: infoIcon,
    alert: alertIcon,
    snoozeBell: snoozeBellIcon,
    bell: bellIcon,
    wrench: commonWrenchIcon,
    newUser: commonNewUserIcon,
    uncheckedBox: commonUncheckedBoxIcon,
    checkedBox: commonCheckedBoxIcon,
    crossWithCircle: commonCrossWithCircleIcon,
    impersonating: commonImpersonatingIcon,
    delete: commonDeleteIcon,
    download: commonDownloadIcon,
    moreActions: commonMoreActionsIcon,
    deactivate: commonDeactivateIcon,
    activate: commonActivateIcon,
    mergeDuplicationAsset: commonMergeDuplicationAssetIcon,
    mergeDuplicationRole: commonMergeDuplicationRoleIcon,
    filter: commonFilterIcon,
    trendUp: commonTrendUpIcon,
    trendDown: commonTrendDownIcon,
  },
  connector: {
    ateraNetwork: connectorAteraNetworkIcon,
    aws: connectorAWSIcon,
    azure: connectorAzureIcon,
    googleCloud: connectorGoogleCloudIcon,
    ivanti: connectorIvantiIcon,
    logicMonitor: connectorLogicMonitorIcon,
    manageEngine: connectorManageEngineIcon,
    meraki: connectorMerakiIcon,
    oracle: connectorOracleIcon,
    paloAlto: connectorPaloAltoIcon,
    serviceNow: connectorServiceNowIcon,
    viptela: connectorViptelaIcon,
    trend: commonTrendIcon,
    arrowsClockwise: commonArrowsClockwiseIcon,
    wrench: commonWrenchIcon,
    trendUpTriangle: commonTrendUpTriangleIcon,
    trendDownTriangle: commonTrendDownTriangleIcon,
  },
  design: design
} as const
