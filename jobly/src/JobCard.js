import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

function JobCard({job}) {
  return (
    <div className='JobCard'>
      <h3>{job.title}</h3>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button className='Apply'>APPLY</button>
      <br className='clear'/>
    </div>
  );
};

export default JobCard;