import React from 'react'
import Header from './components/header'
import CardContainer from './components/card-container'
import UserChart from './components/user-chart'
import RevenueChart from './components/revenue-chart'
import TopStreamChart from './components/top-stream-chart'
import RecentStreamsTable from './components/recent-stream'
import ChartContainer from './components/chart-container'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <CardContainer/>
      <ChartContainer/>
    </React.Fragment>
  )
}

export default App
