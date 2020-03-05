import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import { useHistory } from 'react-router-dom';

function SignupForm({gatherInput, handleChange, formData}) {
  return (
    <div className="SignupForm">
      <h1>Sign up</h1>
      <form onSubmit={gatherInput}>
        <div className="form-group">
          <label htmlFor="username">Username</label><br />
          <input  className="form-control" id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First name</label><br />
          <input className="form-control" id="first_name" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last name</label><br />
          <input className="form-control" id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label><br />
          <input className="form-control" id="email" type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <input type="submit" value="Sign up" className="btn btn-primary float-right" />
      </form>
    </div>
  )
};


export default SignupForm;