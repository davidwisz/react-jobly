import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

const logo_url = 'https://previews.123rf.com/images/scrap4vec/scrap4vec1808/scrap4vec180801384/108020394-orange-color-generic-arrow-abstract-mark-symbol-logo-design-idea-concept-illustration-for-architectu.jpg';

function CompanyCard(props) {
  console.log(props);
  let {handle, name, description } = props.company;
  // fix destructuring of company props
  const companyCardImage = {
    maxWidth: '50px', 
    float: 'right'
  }
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <img style={companyCardImage} src={logo_url} alt={""}/>
        <h3>{name}</h3>
        <p>{description}</p>
      </Link> 
    </div>
  );
}

export default CompanyCard; 
