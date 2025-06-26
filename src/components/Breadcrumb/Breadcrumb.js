import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Breadcrumb = ({activeName, middleName, middleUrl}) => {
  return (
    <>
       <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <div className="breadcrumb-content">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <FaHome className="fa fa-home home--icon" />
                      </Link>
                    </li>
                    {
                        middleName ? (
                            <li className="breadcrumb-item">
                            <Link to={`${middleUrl}`}>{middleName}</Link>
                          </li>
                        ) : (
                            ""
                        )
                    }
                  
                    <li className="breadcrumb-item active" aria-current="page">
                      {activeName}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb