import React, {useEffect, useState} from 'react';
import JoblyAPI from './JoblyAPI';
import Company from './Company';
import './Companies.css';
import Search from './Search';

function Companies() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    async function getCompanies() {
    let res = await JoblyAPI.getCompanies();
      setCompanies(res);
      console.log(res);
    }
    getCompanies();
  }, []);

  return (
    <div className="Companies">
      <h1>Companies</h1>
      {/* <Search /> */}
      {companies.map(company => {
        return <Company key={company.handle} company={company}/>
      })}
    </div>
  )
}

export default Companies; 