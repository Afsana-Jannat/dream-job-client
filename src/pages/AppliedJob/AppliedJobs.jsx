import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ApplyRow from "./ApplyRow";
import Swal from "sweetalert2";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [applyjobs, setApplyjobs] = useState([]);

    const url = `http://localhost:5000/applyjob?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setApplyjobs(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/applyjob/${id}`,{
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
        fetch(`http://localhost:5000/applyjob/${id}`, {
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
                const update = applyjobs.find(applyjob => applyjob._id === id);
            }
        })
    }
    return (
        <div>
            <h2>total applied job: {applyjobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Job-Category</th>
                            <th>Email</th>
                            <th>date</th>
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