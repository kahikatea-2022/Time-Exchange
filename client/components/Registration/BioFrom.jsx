// TO DO
// Use checkUsername API to check unique username (in  submit functions?)
// Have default values passed in
// Style

import React from 'react'
import { useFormik } from 'formik'

import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  username: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  about: Yup.string().required('Required'),
})

function BioForm({setBio, values}) {
  
    const formik = useFormik({
      initialValues: {
        firstName: values?.firstName || '',
        lastName: values?.lastName || '',
        username: values?.username || '',
        email: values?.email || '', 
        about: values?.about || '',
      },
      onSubmit: (values) => {
        setBio(values)
      },
      validationSchema: registerSchema,
    })
    // Errors aren't showing - FIX
    function showAnyErrors(inputName) {
      return formik.errors[inputName] && formik.touched[inputName] ? (
        <p className="inputError">{formik.errors[inputName]}</p>
      ) : null
    }

  return (
    <section className="form">
      <h2>My Profile</h2>
      <form className="bioForm" onSubmit={formik.handleSubmit}>

        <label htmlFor="firstName" className="label">
          First Name
        </label>
        {showAnyErrors('firstName')}
        <input
          className="form-box"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        {showAnyErrors('lastName')}
        <input
          className="form-box"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="username" className="label">
          Username
        </label>
        {showAnyErrors('username')}
        <input
          className="form-box"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="form-box"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          // disabled={true}
        />

      <label htmlFor="about" className="label">
          About
        </label>
        {showAnyErrors('about')}
        <input
          className="form-box"
          id="about"
          name="about"
          onChange={formik.handleChange}
          value={formik.values.about}
        />

        <button type="submit">
          Register
        </button>
      </form>
    </section>
  )
}

export default BioForm
