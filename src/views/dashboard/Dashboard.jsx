import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/Content'

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <NavBar />
        <div className="body flex-grow-1 px-3 bg-white pb-5">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard