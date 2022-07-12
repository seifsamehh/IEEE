import React from 'react'
import awarness1 from '../../images/awarness1.webp'
import awarness2 from '../../images/awarness2.webp'
import './style/awarnass.css'

function Awarnass() {
  return (
    <section className='awareness'>
      <div className="left-content">
        <div className="awareness-heading">
            <span>4</span>
            <h1>AWARENESS OF CLIMATE CHANGE IMPACTS AND ADAPTATION</h1>
        </div>
      </div>
      <div className="right-part">
        <div className="gallery">
          <img src={awarness1} alt="awarness1" />
          <img src={awarness2} alt="awarness2" className='two' />
        </div>
        <p>Fighting the climate crisis gives us a chance to put the well-being of people first by ensuring a right to a healthy environment. This will allow us to enhance human rights, for example by enabling more people to access cleaner and cheaper energy resources and create job opportunities in new sectors.Because we have the knowledge, power, and ability to stop climate change.</p>
        <p className='special'>Encourage climate change awareness in your community by focusing on local or regional impacts. Highlight those changes your audience might have already noticed. Because climate impacts vary, you will need to be alert for climate change impacts in your specific region. Once you’ve identified a few impacts, think about how they might affect your community. Then, tie it all to climate change.</p>
      </div>
    </section>
  )
}

export default Awarnass