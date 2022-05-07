// TO DO
// Use checkUsername API to check unique username (in  submit functions?)
// Have default values passed in
// Style

import React from 'react'

function BioForm({setBio, bio}) {

  function handleChange(event) {
    setBio({...bio, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <h2>My Profile</h2>

      <label htmlFor="firstName" className="label">
        First Name
      </label>
      <input
        className="form-box"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={bio?.firstName || ''}
        required
      />

      <label htmlFor="lastName" className="label">
        Last Name
      </label>
      <input
        className="form-box"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={bio?.lastName || ''}
      />

      <label htmlFor="username" className="label">
        Username
      </label>
      <input
        className="form-box"
        id="username"
        name="username"
        onChange={handleChange}
        value={bio?.username || ''}
        required
      />

      <label htmlFor="email" className="label">
        Email
      </label>
      <input
        className="form-box"
        name="email"
        id="email"
        value={bio?.email || ''}
        onChange={handleChange}
        disabled={true}
      />

    <label htmlFor="about" className="label">
        About
      </label>
      <input
        className="form-box"
        id="about"
        name="about"
        onChange={handleChange}
        value={bio?.about || ''}
        required
      />
    </div>
  )
}

export default BioForm