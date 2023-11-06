import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const category = useLoaderData();
    const { job_category } = category;

    return (
        <div>
            <h2>applied job: {job_category}</h2>
        </div>
    );
};

export default AppliedJob;