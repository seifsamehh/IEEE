import React from 'react'
import one from '../../images/global_warming_graphic.webp'
import two from '../../images/image2.webp'
import './style/intro.css'

function Intro() {
  return (
    <section className='intro'>
      <div className="upper-part">
        <div className="intro-heading">
          <span>1</span>
          <h1>INTRODUCTION</h1>
        </div>
        <div className="gallery">
          <img src={one} alt="first graph" />
          <img src={two} alt="second graph" />
        </div>
      </div>
      <div className="lower-part">
        <h1>WHAT IS GLOBAL WARMING ?</h1>
        <p>Global warming is the gradual warming of Earth's climate system since the pre-industrial era (between 1850 and 1900), which is attributed to human activity, particularly the burning of fossil fuels, which raises the amounts of greenhouse gases that trap heat in Earth's atmosphere. Although the terms "climate change" and "the term" are frequently used interchangeably, the latter refers to both naturally occurring warming and the impact it has on our world. The most typical way to measure it is as an increase in the average global surface temperature.Human activities are thought to have contributed to an increase in Earth's global average temperature of about 1 degree Celsius (1.8 degrees Fahrenheit) since the pre-industrial era. This temperature increase is currently happening at a rate of 0.2 degrees Celsius (0.36 degrees Fahrenheit) per decade. There is no doubt that human activity has warmed the atmosphere, ocean, and land.</p>
      </div>
    </section>
  )
}

export default Intro