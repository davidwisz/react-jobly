import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

const logo_url = 'https://previews.123rf.com/images/scrap4vec/scrap4vec1808/scrap4vec180801384/108020394-orange-color-generic-arrow-abstract-mark-symbol-logo-design-idea-concept-illustration-for-architectu.jpg';

function CompanyCard({company}) {
  // fix destructuring of company props

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <img style={{maxWidth: '50px', float: 'right'}} src={logo_url} alt={""}/>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </Link> 
    </div>
  );
}

export default CompanyCard; 
