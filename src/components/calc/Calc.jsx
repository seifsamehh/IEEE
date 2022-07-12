import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import './style/calc.css'

function Calc() {
  return (
    <>
        <section className='argeements'>
        <HorizontalScroll    
          pageLock      = { true }
          reverseScroll = { true }
          style         = { {width: "100vw", height: "100vh"} }
          config        = {{ stiffness: 3, damping: 2 }}
          >
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
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='argeements-media'>
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
    </section>
    </>
  )
}

export default Calc