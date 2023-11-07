import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const AllJobCard = ({alljob}) => {
  const {user} = useAuth();
    const {_id, name, job_category, job_title, salary_range, job_posting_date, application_deadline, image} = alljob;

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{job_title}</p>
          <p>Posting data: {job_posting_date}</p>
          <p>Application deadline: {application_deadline}</p>
          <p>{salary_range}</p>
            <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link> 
        </div>
      </div>
    );
};

export default AllJobCard;