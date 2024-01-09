import React from 'react'

function Home() {
  return (
    <>
    <header className="masthead">
          <div className="col-lg-6">
              <div className="masthead-heading text-uppercase" style={{color: "black", fontSize:"40px"}}>Detection of Lung Diseases<br/>from X-ray Images</div>
              <div className="masthead-subheading" style={{color: "black", fontSize:"20px"}}>Click below to know more</div>
              <a className="btn btn-primary btn-xl text-uppercase" href="#predict">Lung Diseases prediction</a>
          </div>
    </header>
    </>
  )
}

export default Home
