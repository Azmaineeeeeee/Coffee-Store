import { MdOutlineDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Coffee = ({coffee,coffees,setCoffees}) => {
    const {_id,name,supplier,category,details,photo} = coffee;
    const handleDelete = (_id) => {
       
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`https://coffee-store-server-nine-khaki.vercel.app/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                 Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }); 
          const remaining = coffees.filter(cof => cof._id !== _id)
          setCoffees(remaining);
            }
        })
        }
      });
    }
    return (
       
       
      <div className="flex bg-[#f5efeb] p-4 rounded-md shadow-xl">
         <div>
        <figure><img className="h-44 ml-4 w-40 rounded-lg" src={photo} alt="Movie"/></figure>
        </div>
        <div className="card-body">
          <div className="space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p><span className="font-bold mr-2">Supplier:</span>{supplier}</p>
          <p><span className="font-bold mr-2">Category:</span>{category}</p>
          </div>
          </div>
          <div>
         
          <div className="join join-vertical mt-6">
  <button className="btn join-item"><IoEyeOutline className="text-xl text-[#936748] " /></button>
  <Link to = {`/updatecoffee/${_id}`}>
  <button className="btn join-item"><CiEdit className="text-xl" /></button>
  </Link>
  <button onClick={() => handleDelete(_id)} className="btn join-item"><MdOutlineDeleteSweep className="text-xl text-red-950" /></button>
</div>
          
          </div>
        
      </div>
       
      
    );
};
Coffee.propTypes = {
    coffee: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        supplier: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired
    }),
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired
};

export default Coffee;