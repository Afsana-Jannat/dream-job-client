import Swal from "sweetalert2";


const AddJob = () => {
    const handleAddJob = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const job_category = form.job_category.value;
        const job_title = form.job_title.value;
        const salary_range = form.salary_range.value;
        const job_posting_date = form.job_posting_date.value;
        const application_deadline = form.application_deadline.value;
        const image = form.image.value;

        const newAddJob = {name, job_category, job_title, salary_range, job_posting_date, application_deadline, image }
        console.log(newAddJob)

        // send data to the server
        fetch('http://localhost:5000/allCategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddJob)
        })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.inserteId){
                   Swal.fire('added successfully')
                }
             })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-4 mb-4">Add A Job</h2>
            <form onSubmit={handleAddJob}>
                {/* form row name job-cat*/}
                <div className="md:flex mr-2 mb-5">
                    <div className="form-control ml-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Job category</span>
                        </label>
                        <select className="select w-full" required name='job_category'>
                            <option disabled selected>Select Brand</option>
                            <option value={'On site Job'}>On site Job</option>
                            <option value={'Remote Job'}>Remote Job</option>
                            <option value={'Part Time'}>Part Time</option>
                            <option value={'Hybrid'}>Hybrid</option>
                        </select>
                    </div>
                </div>
                 {/* form row jobtitle salary*/}
                <div className="md:flex mb-5">
                    <div className="form-control ml-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="job_title" placeholder="title" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Salary</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary_range" placeholder="Salary" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* form row date*/}
                <div className="md:flex mb-5">
                    <div className="form-control ml-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Posting Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="job_posting_date" placeholder="job posting date" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Application Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="application_deadline" placeholder="application deadline" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* image url */}
                <div className="form-control mb-8 md:w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image"  placeholder="image" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" className=" mb-8 text-white text-xl bg-slate-500 btn btn-block" value="Add Job" />
            </form>
        </div>
    );
};

export default AddJob;