import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const JobBycategory = () => {

    const [categorys, setCategory] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/jobcategory')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <div>
                <h3 className="text-5xl text-center mt-4
                font-semibold">Job By
                 <span className="text-blue-400"> Category</span></h3>
            </div>
            <div className='grid md:grid-cols-2
       gap-7 lg:ml-6 mt-10 mb-6 '>
                {
                    categorys.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobBycategory;