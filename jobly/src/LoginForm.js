import React, { useState } from 'react';


function LoginForm({gatherInput, handleChange, formData}) {
  return (
    <form onSubmit={gatherInput}>
      <div className="form-group">
        <label htmlFor="username">Username</label><br />
        <input className="form-control" id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label><br />
        <input className="form-control" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <input className="btn btn-primary float-right" type="submit" value="Log in" />
    </form>
  )
}

export default LoginForm;