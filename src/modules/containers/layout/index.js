import React from 'react';
import Sidebar from '../../components/sidebar';
//import Navbar from '../../components/navbar'

const Layout = ({children}) => (

    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {children}
          </div>
            <div className="col-xs-2">
              </div>
          <div className="col-xs-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>

  )

export default Layout;
