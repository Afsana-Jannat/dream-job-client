import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const {_id, image, job_category} = category;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-40" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <i className="text-3xl font-bold text-blue-800
     text-center">{job_category}</i>
     <div className="card-actions justify-end">
      <Link to={`/applied/${_id}`}>
      <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;