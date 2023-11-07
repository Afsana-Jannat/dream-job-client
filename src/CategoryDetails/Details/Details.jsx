import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Details = () => {

    const data = useParams();
    console.log(data);

    const [category, setcategory] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/details/${data.id}`)
        .then(res=>res.json())
        .then(data=>setcategory(data))
    },[data.id])

    console.log(category);
    const { image, job_category, name, job_title, application_deadline,
        job_posting_date, salary_range} = category;
    return (
        <div>
            <h2 className='text-5xl mb-4 mt-6 text-purple-500 text-center'>
                 {name} details</h2>
            <div className='mt-6 md:ml-14'>
            <img src={image} alt="" />
            </div>
            <h2 className='text-2xl font-bold mt-6 mb-6 text-slate-600 ml-8'>Job Category: {job_category}</h2>
             <p className='text-2xl font-bold mt-6 mb-6 text-slate-600 ml-8'>{job_title}</p>
             <p className='text-2xl font-bold mt-6 mb-6 text-slate-600 ml-8'>Job Posting date: {job_posting_date}</p>
             <p className='text-2xl font-bold mt-6 mb-6 text-slate-600 ml-8'>Application date: {application_deadline}</p>
             <p className='text-2xl font-bold mt-6 mb-6 text-slate-600 ml-8'>Salary Range: {salary_range}</p>
             <br />
        </div>
    );
};

export default Details;