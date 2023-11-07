import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [applyjobs, setApplyjobs] = useState([]);

    const url = `https://dream-job-server-seven.vercel.app/myjob?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setApplyjobs(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`https://dream-job-server-seven.vercel.app/applyjob/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire('deleted successfully');
                    const remaining = applyjobs.filter(applyjob =>
                        applyjob._id !== id);
                        setApplyjobs(remaining);
                }
            })
        }
    }

   
    return (
        <div>
            <h2 className="text-center mt-4 mb-8 text-blue-800 text-3xl font-bold">My applied jobs: {applyjobs.length}</h2>
            <div className="overflow-x-auto font-bold text-blue-700">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" 
                                    className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Job-Title</th>
                            <th>Job-Category</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applyjobs.map(applyjob => <tr key={applyjob._id}>
                                <th>
                                <button onClick={() => handleDelete(applyjob._id)} className="btn btn-sm btn-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                                </th>
                                <td>
                                    <div className="avatar">
                                      <div className="rounded w-24 h-24">
                                        {applyjob.image && <img src={applyjob.image} alt="Avatar Tailwind CSS Component" />}
                                      </div>
                                    </div>
                                </td>
                                <td>
                                  {applyjob.job_title}
                                </td>
                                <td>
                                  {applyjob.job_category}
                                </td>
                                <td>{applyjob.email}</td>
                                <td>
                                    {applyjob.date}
                                </td>
                                <th>
                                    {
                                       applyjob.status?applyjob.status :' pending '
                                    }
                                </th>
                              </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
};


export default MyJobs;