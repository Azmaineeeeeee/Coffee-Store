import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const updatedCoffee =  useLoaderData()
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {name,quantity,supplier,category,details,photo}
        console.log(coffee);
        fetch(`https://coffee-store-server-nine-khaki.vercel.app/${updatedCoffee._id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Great'
                  })
            }
        })
        form.reset()
        
    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="bg-[#F4F3F0] p-20 ">
          
          <h1 className="text-center font-bold text-3xl text-red-900">Update Coffee Info: {updatedCoffee.name}</h1>
          <form onSubmit={ handleAddCoffee} className="flex justify-center mt-6">
            <div className="flex flex-col gap-4 bg-white shadow-2xl p-8 rounded-md mx-auto">
           <div className="flex md:flex-row flex-col gap-4">
           <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" name="name" className="grow w-1/2" defaultValue={updatedCoffee.name} placeholder="Coffee Name"  />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Quantity
              <input type="number" 
              name="quantity" 
              className="grow w-1/2" defaultValue={updatedCoffee.quantity} placeholder="Available Quantity" />
            </label>
           </div>
           <div className="flex md:flex-row flex-col gap-4">
           <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input type="text" name="supplier" className="grow w-1/2" defaultValue={updatedCoffee.supplier} placeholder="Supplier" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input type="text" name="taste" className="grow w-1/2" defaultValue={updatedCoffee.taste} placeholder="Taste" />
            </label>
           </div>
           <div className="flex md:flex-row flex-col gap-4">
           <label className="input input-bordered flex items-center gap-2">
              Category
              <input type="text" name="category" className="grow" defaultValue={updatedCoffee.category} placeholder="Category" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input type="text" name="details" className="grow" defaultValue={updatedCoffee.details} placeholder="Details" />
            </label>
           </div>
            <label className="input input-bordered flex items-center gap-2">
              Photo URL
              <input type="text" name="photo" className="grow" defaultValue={updatedCoffee.photo} placeholder="Photo" />
            </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary bg-red-950 border-none">Update Coffee</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;