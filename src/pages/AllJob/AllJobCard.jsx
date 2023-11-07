

const AllJobCard = ({alljob}) => {
    const {name, job_category, job_title, salary_range, job_posting_date, application_deadline, image} = alljob;

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{job_category}</p>
          <p>{job_title}</p>
          <p>{salary_range}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default AllJobCard;