import React from 'react'
import video1 from '../../videos/a_year_in_the_life_of_co2_10s.webm'
import './style/climate.css'

function Climate() {
  return (
    <section className='climate'>
      <div className="left-part">
        <div className="content">
          <h1>WHAT IS CLIMATE CHANGE ?</h1>
          <p>A long-term change in the typical weather patterns that have come to characterise local, regional, and global climates on Earth is referred to as climate change. The phrase is synonymous with a wide variety of observed outcomes that are a result of these changes.Human activities, especially the burning of fossil fuels, which raises the concentrations of heat-trapping greenhouse gases in Earth's atmosphere and thus increases the planet's average surface temperature, are the main causes of the climate changes that have been observed since the early 20th century. Global warming is the term used to describe these temperature increases that are caused by humans. Along with internal variability (such as cyclical ocean patterns like El Nio, La Nia, and the Pacific Decadal Oscillation) and external forcings (such as volcanic activity, changes in the Sun's energy output, and fluctuations in Earth's orbit), natural processes can also affect climate.</p>
        </div>
      </div>
      <div className="right-part">
        <div className="climate-heading">
          <span>2</span>
          <h1>CLIMATE</h1>
        </div>
        <video autoPlay loop muted>
          <source src={video1} type='video/webm'></source>
        </video>
      </div>
    </section>
  )
}

export default Climate