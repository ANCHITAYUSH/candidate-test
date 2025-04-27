import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import { Header } from './components/header'
import { EuiFlexItem, EuiPage, EuiPageBody } from '@elastic/eui'
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
    <EuiPage
      paddingSize="none"
      style={{ minHeight: '100vh', width: '100%', backgroundColor: 'white' }}
    >
      <Sidebar />
      <EuiPageBody paddingSize="l">
        <Header />
        <EuiFlexItem>
          <Dashboard />
        </EuiFlexItem>
      </EuiPageBody>
    </EuiPage>              
  )
}

export default App
