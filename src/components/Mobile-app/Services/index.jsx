import React from 'react';
//= Components
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';

function Services({ theme }) {
  return (
    <section className="serv-block section-padding">
      <div className="container">
        <SectionLeft theme={theme} />
        <SectionRight theme={theme} />
      </div>
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  )
}

export default Services