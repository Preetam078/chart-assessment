import React from 'react'
import Header from './components/header'
import CardContainer from './components/card-container'
import UserChart from './components/user-chart'
import RevenueChart from './components/revenue-chart'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <CardContainer/>
      <UserChart/>
      <RevenueChart/>
    </React.Fragment>
  )
}

export default App
