import { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast,  { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext)
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      const lastLoggedIn = user.metadata.lastSignInTime;
      console.log(user);
      const checkUser = {email,lastLoggedIn}
      fetch('https://coffee-store-server-nine-khaki.vercel.app/users',{
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(checkUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      toast.success("User logged in Successfully")
      navigate('/')
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        toast.error('Invalid Credentials',errorMessage)
      });
   
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center font-bold text-2xl">Please Sign In</h2>
      <div
        className="hero"
        data-aos="flip-right"
        data-aos-delay="200"
        data-aos-anchor=".example-selector"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-xl mx-auto shadow-2xl ">
            <form
              onSubmit={formSubmit}
              className="card-body bg-[#f5efeb] rounded-xl"
            >
              <div className="form-control">
                <h1 className="text-center font-bold text-2xl mb-2 ">
                  SignIn Here
                </h1>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary bg-[#936748] border-none shadow-xl text-lg">
                  Login
                </button>
              </div>

              <p className=" text-sm">
                First Time Here?{" "}
                <Link to="/signup" className="underline p-1">
                  Please SignUp first
                </Link>
              </p>
              <div className="flex items-center justify-center mt-2">
                <div className="flex-1 h-0.5  mr-2"></div>
                <h1 className="text-center text-sm">Or Sign In Using</h1>
                <div className="flex-1 h-0.5  ml-2"></div>
              </div>
              <Toaster />
              {/* <div className="flex justify-center gap-4 p-2">
              <FaGoogle
                onClick={() => handleGoogleSignIn()}
                className="text-2xl text-white hover:scale-110 ease-in-out  duration-3000 "
              />
              <FaGithub
                onClick={() => handleGithubSignIn()}
                className="text-2xl text-white hover:scale-110 ease-in-out  duration-3000"
              />
            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
