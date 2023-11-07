import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const Register = () => {
    const { createUserAndUpdate } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const image = event.target.image.value;
        
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

          createUserAndUpdate(email, password,name,image)
          .then(() =>{
              Swal.fire("Register in successs")
  navigate('/')
          })
  
          .catch(error =>{
              Swal.fire(error.message)
          })



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
                        <h1 className="text-3xl text-center font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='mt-4 text-xl'>Do not have an account?
                            <Link
                                className='text-blue-400 font-bold'
                                to="/login">Login</Link></p>
                    </div>
                    <div className="text-center">
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;