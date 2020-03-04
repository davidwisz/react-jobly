import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import JobCard from './JobCard';
import './Company.css';

function Company() {
  const {handle} = useParams();
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getCompany() {
    let res = await JoblyAPI.getCompany(handle);
      setCompany(res);
      setJobs(res.jobs);
    }
    getCompany();
  }, []);

  {console.log("Job stuff", company.jobs)}
  return (
    <div className='Company'>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {jobs.map(job => {
        return <JobCard key={job.id} job={job}/>
      })}
    </div>
  );
};

export default Company;