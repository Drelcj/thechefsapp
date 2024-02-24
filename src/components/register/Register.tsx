"use client"
import React from 'react'

const register = () => {
  return (
    <div className="px-10bg-base-100">
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Want to learn new skills, discover new dishes, and have fun in the kitchen? Sign up with your email and join our Culinary community today. You&apos;ll get access to exclusive tips, tricks, and courses from our top chefs and food experts.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500 text-white">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default register