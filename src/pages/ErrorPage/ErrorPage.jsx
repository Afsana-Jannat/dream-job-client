import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
       <div>
         <div className="mt-6">
            <img src="https://i.ibb.co/mDZdF2Y/3-1.jpg" alt="" />
        </div>
        <Link
           className='text-blue-400 btn text-3xl font-bold mt-6 ml-10'
            to="/">Home</Link>
       </div>
    );
};

export default ErrorPage;