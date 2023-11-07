import { useLoaderData } from "react-router-dom";
import AllJobCard from "./AllJobCard";


const Alljob = () => {

    const alljobs = useLoaderData();

    return (
        <div className="">
            <h2 className="text-4xl text-center text-blue-400">Add Job: {alljobs.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3
       gap-7 lg:ml-6 mt-10 mb-6 ">
            {
               alljobs.map(alljob => <AllJobCard
               key={alljob._id}
               alljob={alljob}
               ></AllJobCard>)
            }
            </div>
        </div>
    );
};

export default Alljob;