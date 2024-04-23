import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import   { Toaster } from 'react-hot-toast';
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
 
  const {createUser} = useContext(AuthContext)
  const {
    register,
    formState: { errors },
  } = useForm();
  
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, password);
    const user = {name,email,password}
    createUser(email,password)
    fetch('https://coffee-store-server-nine-khaki.vercel.app/users',{
      method: 'POST',
      headers: {
        "content-type":'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
     form.reset()
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center font-bold text-2xl">Please Sign Up</h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shadow-2xl border-[#936748] border-2">
            <form
              onSubmit={formSubmit}
              className="card-body lg:w-96 md:w-[360px] w-72"
            >
              <h1
                className="text-center text-[#936748] font-bold text-2xl mb-2 "
                data-aos="flip-left"
                data-aos-delay="200"
                data-aos-anchor=".example-selector"
              >
                Account Registration
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: "Please fill in the name field*",
                  })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                <div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photo", {
                    required: "Please fill in the photo url field*",
                  })}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
                <div>
                  {errors.photo && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.photo.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                <div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Please fill in the password field*",
                    })}
                    type={"password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                
              </div>

              <div type="submit" className="form-control mt-6">
                <button className="btn btn-primary bg-[#936748] text-white border-none">
                  Register
                </button>
              </div>
              <Toaster />
              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="underline p-1 font-bold text-[#936748]"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
