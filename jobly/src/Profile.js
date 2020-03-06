import React, {useState, useContext, useEffect} from 'react';
import UserContext from './UserContext';

function Profile() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  console.log('currentUsercurrentUser', currentUser)
  // let {username, first_name, last_name, email, photo_url} = {currentUser};

  let [formData, setFormData] = useState({
    username: currentUser.username || '', 
    first_name: currentUser.first_name || '', 
    last_name: currentUser.last_name || '', 
    email: currentUser.email, photo_url: currentUser.photo_url, 
    password:''
  });
  
  // useEffect(() => {
  //   console.log('USE EFFECT', currentUser);
  //   setCurrentUser(currentUser)
  // }, [currentUser]);

  function handleChange() {

  }

  function gatherInput() {

  }
  return (
  <div className="Profile container col-4">
    <form onSubmit={gatherInput}>
        <div className="form-group">
          <label htmlFor="username">Username</label><br />
          <p>a {formData.username} b</p>
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
        <div className="form-group">
          <label htmlFor="photo_url">Photo URL</label><br />
          <input className="form-control" id="photo_url" type="text" name="photo_url" value={formData.photo_url} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <input type="submit" value="Sign up" className="btn btn-primary float-right" />
      </form>

  </div>
  )
}

export default Profile; 