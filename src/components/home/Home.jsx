import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Tilt from 'react-vanilla-tilt'
import one from '../../images/global_warming_graphic.webp'
import two from '../../images/image2.webp'
import awarness1 from '../../images/awarness1.webp'
import awarness2 from '../../images/awarness2.webp'
import seaice from '../../images/seaice.webp'
import sealevel from '../../images/sealevel.webp'
import carbon from '../../images/carbon.webp'
import global from '../../images/global.webp'
import seif from '../../images/seif.webp'
import mostafa from '../../images/mostafa.webp'
import ahmed from '../../images/ahmed.webp'
import youssef from '../../images/youssef.webp'
import video1 from '../../videos/a_year_in_the_life_of_co2_10s.webm'
import video2 from '../../videos/sea-ice.webm'
import video3 from '../../videos/sea_level_Southeast United States.webm'
import video4 from '../../videos/sea_lveve_Northern Europe.webm'
import video5 from '../../videos/sea_level_Southeast United States.webm'
import video6 from '../../videos/Southeast Asia_sea_level.webm'
import video7 from '../../videos/carbon_dioxide.webm'
import video8 from '../../videos/Global_Temperature.webm'
import './style/home.css'

function Home() {
  return (
    <>
        <section className='home'>
        <HorizontalScroll    
          pageLock      = { true }
          reverseScroll = { true }
          style         = { {width: "100vw", height: "100vh"} }
          config        = {{ stiffness: 3, damping: 2 }}
          >
            {/* intro */}
            <div className="intro">
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
            </div>
            {/* climate */}
            <div className="climate">
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
            </div>
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
            {/* awareness */}
            <div className="awareness">
              <div className="left-content">
                <div className="awareness-heading">
                    <span>4</span>
                    <h1>AWARENESS OF CLIMATE CHANGE IMPACTS AND ADAPTATION</h1>
                </div>
                <button class="button button--telesto"><span><span><a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/" target="_blank">carbon footprint</a></span></span></button>
              </div>
              <div className="right-part">
                <div className="gallery">
                  <img src={awarness1} alt="awarness1" />
                  <img src={awarness2} alt="awarness2" className='two' />
                </div>
                <p>Fighting the climate crisis gives us a chance to put the well-being of people first by ensuring a right to a healthy environment. This will allow us to enhance human rights, for example by enabling more people to access cleaner and cheaper energy resources and create job opportunities in new sectors.Because we have the knowledge, power, and ability to stop climate change.</p>
                <p className='special'>Encourage climate change awareness in your community by focusing on local or regional impacts. Highlight those changes your audience might have already noticed. Because climate impacts vary, you will need to be alert for climate change impacts in your specific region. Once you’ve identified a few impacts, think about how they might affect your community. Then, tie it all to climate change.</p>
              </div>
            </div>
            {/* agreement-1 */}
            <div className="agreements-1">
              <div className="agreements-heading">
                    <span>5</span>
                    <h1>AGREEMENTS</h1>
              </div>
              <div className="first-agreement">
                <h1>1-Kyoto Protocol</h1>
                <p>By 1995, countries began negotiations to strengthen the global response to climate change. Two years later, the Kyoto Protocol was adopted.  Legally, the Kyoto Protocol binds developed country to emissions.  The Protocol's first commitment period began in 2008 and ended in 2012, while the second commitment period began on 1 January 2013 and ended in 2020. Today, 197 countries are parties to the Convention and 192 are Parties to the Kyoto Protocol.</p>
              </div>
              <div className="second-agreement">
                <h1>2-World' Pledges in Paris 2015</h1>
                <p>The 194 countries that signed the "Paris Climate 2015 Agreement", including the United States of America, pledged a number of climate-related measures and decisions, including:</p>
                <h1>a- Stop Global Warming</h1>
                <p>The international community pledged to limit global warming to “below two degrees Celsius,” compared to the pre-industrial era, and to “follow up efforts to stop the temperature rise at 1.5 degrees Celsius.”This imposes a severe reduction in greenhouse gas emissions by taking measures to reduce energy consumption, and invest in alternative energies and reforestation.</p>
                <h1>b- Review Pledges</h1>
                <p>One of the most important measures of the agreement is to put in place a mechanism for a five-year review for the national pledges which remain optional. The first mandatory review will take place in 2025, while subsequent reviews should see “progress”.In 2018, a number of 194 countries have done the first evaluation for their social activities, on condition that their contributions will be reviewed in the current session.</p>
                <h1>c- Financial Support for the Countries of the South</h1>
                <p>Developed countries had pledged to offer an annual US Dollar 100 billion as of 2020 to help the developing countries move towards clean energy and to adapt with the global warming gas emissions which are their first victims.Within the agreement, the developing countries also demanded that the annual one hundred billion dollars is only a "minimum amount", and a new goal will be proposed in 2025. In this vein, the developed countries refuse to pay the aids alone, and demand that other countries. </p>
              </div>
            </div>
            {/* agreements-2 */}
            <div className="agreements-2">
              <div className="first-agreement">
                <h1>Egypt to Host Climate Conference COP27 Next Year</h1>
                <p>Egypt is scheduled to host COP27 next year, among Egypt's preparations to host the Climate Conference next year:<br/>
                -To put mechanisms for choosing the climate action champion, his activities to be taken into account when Egypt chooses the climate action champions.<br/>
                -To raise the ambition, finance, the link between the actions to face the impacts of climate change and the business community, stimulate investment in climate action and mechanisms to attract the private sector.<br/>
                1- President Sisi launched the initiative to link the three conventions during the opening of Egypt's presidency of the Biological Diversity Conference. We are working with several funding institutions to implement the initiative's activities and to prepare a framework for the post- 2020 biodiversity road map, which will be approved next year.<br/>
                2-The Prime Minister assumed the presidency of the National Council for Climate Change as a membership of all relevant ministries and sectors.<br/>
                3- Working on the National Climate Change Strategy and the National Adaptation Strategy.<br/>
                4- Participating with the private sector, youth and civil society, as well as taking innovative actions for confrontation, encourage them to adopt climate solutions and provide more funding and actual action.<br/>
                5- Linking between climate change and biodiversity as it was an important theme that Egypt is keen to highlight during its presidency of the Biodiversity Conference.<br/>
                6-Egypt has completed its efforts to support the African continent in the climate negotiations and in Paris Agreement and has reached the two African initiatives on adaptation and renewable energy.</p>
              </div>
            </div>
            {/* about */}
            <div className="about">
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
            </div>
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='home-media'>
            {/* intro */}
            <div className="intro">
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
            </div>
            {/* climate */}
            <div className="climate">
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
            </div>
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
            {/* awareness */}
            <div className="awareness">
              <div className="left-content">
                <div className="awareness-heading">
                    <span>4</span>
                    <h1>AWARENESS OF CLIMATE CHANGE IMPACTS AND ADAPTATION</h1>
                </div>
                <button class="button button--telesto"><span><span><a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/" target="_blank">carbon footprint</a></span></span></button>
              </div>
              <div className="right-part">
                <div className="gallery">
                  <img src={awarness1} alt="awarness1" />
                  <img src={awarness2} alt="awarness2" className='two' />
                </div>
                <p>Fighting the climate crisis gives us a chance to put the well-being of people first by ensuring a right to a healthy environment. This will allow us to enhance human rights, for example by enabling more people to access cleaner and cheaper energy resources and create job opportunities in new sectors.Because we have the knowledge, power, and ability to stop climate change.</p>
                <p className='special'>Encourage climate change awareness in your community by focusing on local or regional impacts. Highlight those changes your audience might have already noticed. Because climate impacts vary, you will need to be alert for climate change impacts in your specific region. Once you’ve identified a few impacts, think about how they might affect your community. Then, tie it all to climate change.</p>
              </div>
            </div>
            {/* agreement-1 */}
            <div className="agreements-1">
              <div className="agreements-heading">
                    <span>5</span>
                    <h1>AGREEMENTS</h1>
              </div>
              <div className="first-agreement">
                <h1>1-Kyoto Protocol</h1>
                <p>By 1995, countries began negotiations to strengthen the global response to climate change. Two years later, the Kyoto Protocol was adopted.  Legally, the Kyoto Protocol binds developed country to emissions.  The Protocol's first commitment period began in 2008 and ended in 2012, while the second commitment period began on 1 January 2013 and ended in 2020. Today, 197 countries are parties to the Convention and 192 are Parties to the Kyoto Protocol.</p>
              </div>
              <div className="second-agreement">
                <h1>2-World' Pledges in Paris 2015</h1>
                <p>The 194 countries that signed the "Paris Climate 2015 Agreement", including the United States of America, pledged a number of climate-related measures and decisions, including:</p>
                <h1>a- Stop Global Warming</h1>
                <p>The international community pledged to limit global warming to “below two degrees Celsius,” compared to the pre-industrial era, and to “follow up efforts to stop the temperature rise at 1.5 degrees Celsius.”This imposes a severe reduction in greenhouse gas emissions by taking measures to reduce energy consumption, and invest in alternative energies and reforestation.</p>
                <h1>b- Review Pledges</h1>
                <p>One of the most important measures of the agreement is to put in place a mechanism for a five-year review for the national pledges which remain optional. The first mandatory review will take place in 2025, while subsequent reviews should see “progress”.In 2018, a number of 194 countries have done the first evaluation for their social activities, on condition that their contributions will be reviewed in the current session.</p>
                <h1>c- Financial Support for the Countries of the South</h1>
                <p>Developed countries had pledged to offer an annual US Dollar 100 billion as of 2020 to help the developing countries move towards clean energy and to adapt with the global warming gas emissions which are their first victims.Within the agreement, the developing countries also demanded that the annual one hundred billion dollars is only a "minimum amount", and a new goal will be proposed in 2025. In this vein, the developed countries refuse to pay the aids alone, and demand that other countries. </p>
              </div>
            </div>
            {/* agreements-2 */}
            <div className="agreements-2">
              <div className="first-agreement">
                <h1>Egypt to Host Climate Conference COP27 Next Year</h1>
                <p>Egypt is scheduled to host COP27 next year, among Egypt's preparations to host the Climate Conference next year:<br/>
                -To put mechanisms for choosing the climate action champion, his activities to be taken into account when Egypt chooses the climate action champions.<br/>
                -To raise the ambition, finance, the link between the actions to face the impacts of climate change and the business community, stimulate investment in climate action and mechanisms to attract the private sector.<br/>
                1- President Sisi launched the initiative to link the three conventions during the opening of Egypt's presidency of the Biological Diversity Conference. We are working with several funding institutions to implement the initiative's activities and to prepare a framework for the post- 2020 biodiversity road map, which will be approved next year.<br/>
                2-The Prime Minister assumed the presidency of the National Council for Climate Change as a membership of all relevant ministries and sectors.<br/>
                3- Working on the National Climate Change Strategy and the National Adaptation Strategy.<br/>
                4- Participating with the private sector, youth and civil society, as well as taking innovative actions for confrontation, encourage them to adopt climate solutions and provide more funding and actual action.<br/>
                5- Linking between climate change and biodiversity as it was an important theme that Egypt is keen to highlight during its presidency of the Biodiversity Conference.<br/>
                6-Egypt has completed its efforts to support the African continent in the climate negotiations and in Paris Agreement and has reached the two African initiatives on adaptation and renewable energy.</p>
              </div>
            </div>
            {/* about */}
            <div className="about">
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
            </div>
    </section>
    </>
  )
}

export default Home