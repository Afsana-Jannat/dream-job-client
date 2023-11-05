import { Link, Navigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {

    const {signin} = useAuth();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
         // validation
         if (password.length < 6) {
            Swal.fire('Password must be at 6 characters');
            return;
        }
        // Check if the password contains at least one alphabet character (a-zA-Z)
        if (!/[a-zA-Z]/.test(password)) {
            return Swal.fire("password need at least 1 alphabet");
          }

          // Check if the password contains at least one symbol character
          if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return Swal.fire("password need at least 1 symbol");
          }

          signin(email, password)
          .then(() =>{
              Swal.fire("log in successs")
  
          })
  
          .catch(error =>{
              Swal.fire(error.message)
          })

        

           // creating a new user
        signin(email, password)
        .then(res => console.log(res.user))
        .catch(error=>console.error(error))

    }


    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">

                    <img className="rounded-full" src="https://i.ibb.co/59FgtfM/sign-page-abstract-concept-illustration-335657-2242.jpg"
                        alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mt-4 text-xl'>Do not have an account?
                            <Link
                                className='text-blue-400 font-bold'
                                to="/register">Register</Link></p>
                    </div>
                    <div className="text-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;