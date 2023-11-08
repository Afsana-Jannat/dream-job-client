import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ApplyRow from "./ApplyRow";
import Swal from "sweetalert2";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [applyjobs, setApplyjobs] = useState([]);

    const url = `https://dream-job-server-seven.vercel.app/applyjob?email=${user?.email}`
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

    const handleConfirm = id =>{
        fetch(`https://dream-job-server-seven.vercel.app/applyjob/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
       
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = applyjobs.filter(applyjob => applyjob._id !== id);
                const updated = applyjobs.find(applyjob => applyjob._id === id);
                updated.status = 'confirm'
                const newApply = [updated, ...remaining];
                setApplyjobs(newApply);
            }
        })
    }
    return (
        <div className="container md:px-20">
            <h2 className="text-center mt-4 mb-8 text-blue-800 text-3xl font-bold">Total applied job: {applyjobs.length}</h2>
            <div className="overflow-x-auto font-bold text-blue-700">
                <table className="table text-orange-900">
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
                            applyjobs.map(applyjob => <ApplyRow
                                key={applyjob._id}
                                applyjob={applyjob}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></ApplyRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
};

export default AppliedJobs;