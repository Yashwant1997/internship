import React from 'react'

const InfoComponent = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left side with image */}
        <div className="col-md-6">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D" alt="App Image" className="img-fluid" />
        </div>

        {/* Right side with app information */}
        <div className="col-md-6">
          <h2>App Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id eros quis mi commodo aliquam. Ut ac
            interdum odio. Sed nec consectetur magna. Aliquam erat volutpat. Morbi vitae arcu non augue cursus
            lobortis. Aenean interdum ex vitae velit volutpat, et venenatis purus efficitur.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eget ligula
            ut purus tincidunt condimentum. Nulla facilisi. Sed fringilla mi ac velit faucibus lacinia.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>

    
  )
}

export default InfoComponent
