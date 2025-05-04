import React from 'react';

const Section = ({ id, title, background }) => {
  return (
    <section id={id} style={{ height: '100vh', backgroundColor: background, padding: '80px 20px' }}>
      <h1>{title}</h1>
    </section>
  );
};

export default Section;
