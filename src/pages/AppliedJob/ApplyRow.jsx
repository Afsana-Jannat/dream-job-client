import Swal from "sweetalert2";


const ApplyRow = ({applyjob, handleDelete}) => {
    const {_id, job_category, email, date, image} = applyjob
  

    return (
              <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
        </td>
        <td>
          {job_category}
        </td>
        <td>{email}</td>
        <td>
            {date}
        </td>
      </tr>
    );
};

export default ApplyRow;