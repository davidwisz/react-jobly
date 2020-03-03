import React from 'react';
import './Company.css'
const logo_url = 'https://previews.123rf.com/images/scrap4vec/scrap4vec1808/scrap4vec180801384/108020394-orange-color-generic-arrow-abstract-mark-symbol-logo-design-idea-concept-illustration-for-architectu.jpg';

function Company({company}) {
  // fix destructuring of company props
  console.log(company.handle);

  return (
    <div className="Company">
      <img style={{maxWidth: '50px', float: 'right'}} src={logo_url}/>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
    </div>
  );
}

export default Company; 