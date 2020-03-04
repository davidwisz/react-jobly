import React, { useEffect, useState } from 'react';
import JoblyAPI from './JoblyAPI';
import CompanyCard from './CompanyCard';
import './Companies.css';
import Search from './Search';

function Companies() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    async function getCompanies() {
      let res = await JoblyAPI.getCompanies();
      setCompanies(res);
    }
    getCompanies();
  }, []);

  async function search(formData) {
    let res = await JoblyAPI.searchCompanies(formData);
    setCompanies(res);
  }
  return (
    <div className="Companies">
      <h1>Companies</h1>
      <Search findItem={search} />
      {companies.map(company => {
        return <CompanyCard key={company.handle} company={company} />
      })}
    </div>
  )
}

export default Companies; 