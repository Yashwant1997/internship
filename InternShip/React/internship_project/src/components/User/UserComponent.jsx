import React from 'react'

function UserComponent() {
  return (
   
     <div> 
       <div className="container mt-5">
    <h2>Static Table</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="https://plus.unsplash.com/premium_photo-1674932532821-708d9658c640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="User" className="img-thumbnail" style={{width: "50px", height: "50px"}} />
            John Doe
          </td>
          <td>2022-04-09</td>
          <td>User</td>
          <td>Active</td>
          <td>
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-danger ms-2">Delete</button>
          </td>
        </tr>

        <tr>
          <td>
            <img src="https://plus.unsplash.com/premium_photo-1679888488670-4b4bf8e05bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="User" className="img-thumbnail" style={{width: "50px", height: "50px"}} />
            Shrinivas Patil
          </td>
          <td>2022-02-09</td>
          <td>Admin</td>
          <td>Suspended</td>
          <td>
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-danger ms-2">Delete</button>
          </td>
        </tr>

        <tr>
          <td>
            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="User" className="img-thumbnail" style={{width: "50px", height: "50px"}} />
            Sachin Tendulkar
          </td>
          <td>2022-03-09</td>
          <td>Publisher</td>
          <td>Suspended</td>
          <td>
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-danger ms-2">Delete</button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
  </div> 

     
  )
}

export default UserComponent