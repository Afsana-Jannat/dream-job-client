import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AppliedJob = () => {
    const category = useLoaderData();
    const { job_category, image,job_title,_id } = category;
    const {user} = useContext(AuthContext)

    const handleAppliedJob = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const apply = {
            name,
            email,
            image,
            date,
            job_category,
            jobId:_id,
            job_title
        }
          console.log(apply);

          fetch('https://dream-job-server-seven.vercel.app/applyjob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apply)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('service book successfully')
            }
            else{
              Swal.fire(data.message)
            }
          })

    }

    return (
        <div>
            <h2 className="text-center mt-6 text-3xl font-bold">Applied job category: {job_category}</h2>
            <div className="card-body">
      <form onSubmit={handleAppliedJob}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" defaultValue={new Date()} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" name="number" placeholder="Phone Number" className="input input-bordered" required />
        </div>
      </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary btn-block" 
          value="Applied" />
        </div>
      </form>
      </div>
        </div>
    );
};

export default AppliedJob;