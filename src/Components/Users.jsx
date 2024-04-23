import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Users = () => {
   
    let count = 1;
    const [users,setUsers] = useState([])
    const [remainingUsers,setRemainingUsers] = useState(users)
    useEffect(() => {
      fetch('https://coffee-store-server-nine-khaki.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setRemainingUsers(data);
      })
    },[])
    const handleDelete = (id) => {
        fetch(`https://coffee-store-server-nine-khaki.vercel.app/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
              alert('Deleted Successfully')
              const leftUsers = remainingUsers.filter(user => user._id !== id)
              setRemainingUsers(leftUsers)
          }
        })
      }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl text-red-950">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Last LogIn Time</th>
        <th>Delete</th>
       
      </tr>
    </thead>
    {
        remainingUsers.map(user => 
            <tbody key={user._id}>
      
      <tr>
        <th>{count++}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.lastLoggedIn}</td>
        <td><button onClick={() => handleDelete(user._id)} className="btn bg-red-700 text-white">Delete</button></td>
        
      </tr>
      
    </tbody>
        )
    }
  </table>
</div>
            
        </div>
    );
};

export default Users;