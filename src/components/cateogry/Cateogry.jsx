import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Tilt from 'react-vanilla-tilt'
import seaice from '../../images/seaice.webp'
import sealevel from '../../images/sealevel.webp'
import carbon from '../../images/carbon.webp'
import global from '../../images/global.webp'
import video2 from '../../videos/sea-ice.webm'
import video3 from '../../videos/sea_level_Southeast United States.webm'
import video4 from '../../videos/sea_lveve_Northern Europe.webm'
import video5 from '../../videos/sea_level_Southeast United States.webm'
import video6 from '../../videos/Southeast Asia_sea_level.webm'
import video7 from '../../videos/carbon_dioxide.webm'
import video8 from '../../videos/Global_Temperature.webm'
import './style/cateogry.css'

function Cateogry() {
  return (
    <>
        <section className='cateogry'>
      <HorizontalScroll    
          pageLock      = { true }
          reverseScroll = { true }
          style         = { {width: "100vw", height: "100vh"} }
          config        = {{ stiffness: 3, damping: 2 }}
          >
            {/* cateogry one */}
            <div className="cateogry-1">
              <div className="left">
                <div className="cateogry-heading">
                    <span>3</span>
                    <h1>CATEOGRY</h1>
                </div>
                <Tilt>
                  <div className="card">
                    <img src={seaice} alt="sea ice" />
                    <h1>SEA ICE</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video2} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry two */}
            <div className="cateogry-2">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={sealevel} alt="sea level" />
                    <h1>SEA LEVEL</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video3} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry three */}
            <div className="cateogry-3">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={sealevel} alt="sea level" />
                    <h1>SEA LEVEL</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video3} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry four */}
            <div className="cateogry-4">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={sealevel} alt="sea level" />
                    <h1>SEA LEVEL</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video4} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry five */}
            <div className="cateogry-5">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={sealevel} alt="sea level" />
                    <h1>SEA LEVEL</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video5} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry six */}
            <div className="cateogry-6">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={sealevel} alt="sea level" />
                    <h1>SEA LEVEL</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video6} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry seven */}
            <div className="cateogry-7">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={carbon} alt="carbon" />
                    <h1>CARBON DIOXIDE</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video7} type='video/webm'></source>
                </video>
              </div>
            </div>
            {/* cateogry eight */}
            <div className="cateogry-8">
              <div className="left">
                <Tilt>
                  <div className="card">
                    <img src={global} alt="global" />
                    <h1>GLOBAL TEMPERATURE</h1>
                  </div>
                </Tilt>
              </div>
              <div className="right">
                <video muted autoPlay loop>
                  <source src={video8} type='video/webm'></source>
                </video>
              </div>
            </div>
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='cateogry-media'>
      {/* cateogry one */}
      <div className="cateogry-1">
        <div className="left">
          <div className="cateogry-heading">
              <span>3</span>
              <h1>CATEOGRY</h1>
          </div>
          <Tilt>
            <div className="card">
              <img src={seaice} alt="sea ice" />
              <h1>SEA ICE</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video2} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry two */}
      <div className="cateogry-2">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={sealevel} alt="sea level" />
              <h1>SEA LEVEL</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video3} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry three */}
      <div className="cateogry-3">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={sealevel} alt="sea level" />
              <h1>SEA LEVEL</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video3} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry four */}
      <div className="cateogry-4">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={sealevel} alt="sea level" />
              <h1>SEA LEVEL</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video4} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry five */}
      <div className="cateogry-5">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={sealevel} alt="sea level" />
              <h1>SEA LEVEL</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video5} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry six */}
      <div className="cateogry-6">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={sealevel} alt="sea level" />
              <h1>SEA LEVEL</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video6} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry seven */}
      <div className="cateogry-7">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={carbon} alt="carbon" />
              <h1>CARBON DIOXIDE</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video7} type='video/webm'></source>
          </video>
        </div>
      </div>
      {/* cateogry eight */}
      <div className="cateogry-8">
        <div className="left">
          <Tilt>
            <div className="card">
              <img src={global} alt="global" />
              <h1>GLOBAL TEMPERATURE</h1>
            </div>
          </Tilt>
        </div>
        <div className="right">
          <video muted autoPlay loop>
            <source src={video8} type='video/webm'></source>
          </video>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cateogry