import React from 'react'
import Tilt from 'react-vanilla-tilt'
import seif from '../../images/seif.webp'
import mostafa from '../../images/mostafa.webp'
import ahmed from '../../images/ahmed.webp'
import youssef from '../../images/youssef.webp'
import './style/about.css'

function About() {
  return (
    <section className='about'>
      <div className="cards">
        <Tilt>
          <div className="card-1">
            <img src={seif} alt="seif" />
            <h1>SEIF ELDIN SAMEH</h1>
            <h3>CODING</h3>
          </div>
        </Tilt>
        <Tilt>
          <div className="card-2">
            <img src={mostafa} alt="mostafa" />
            <h1>MOSTAFA SAYED</h1>
            <h3>PROJECT MANGER & TESTING</h3>
          </div>
        </Tilt>
        <Tilt>
          <div className="card-3">
            <img src={ahmed} alt="ahmed" />
            <h1>AHMED MOHAMED</h1>
            <h3>ANALYST</h3>
          </div>
        </Tilt>
        <Tilt>
          <div className="card-4">
            <img src={youssef} alt="youssef" />
            <h1>YOUSSEF SAYED</h1>
            <h3>DESIGING</h3>
          </div>
        </Tilt>
      </div>
    </section>
  )
}

export default About