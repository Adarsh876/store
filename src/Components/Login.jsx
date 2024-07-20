import React from 'react'
import './login.css'

export default function Login() {
  return (
   <div className='container'>
      <div classNameName="d-flex justify-content-center align-items-center w-100 mt-5">
      <div className=" rounded shadow" style={{width:'60rem', height:'500px', overflow:'hidden'}}>
          <div className="row d-flex">
              
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center" style={{width:'50%'}}>
                  <div className="logo">
                      <button className="btn btn-outline-danger" style={{borderRadius:'50%', width:'5rem', height:'5rem'}}>
                          <i className="fa-solid fa-user fs-1"></i>
                      </button>
                  </div>
                  <div className="text-danger text-center">
                      <h3 className="fw-bold">Welcome User</h3>
                  </div>
                  <form>
                  <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
                  </form>
                  
              </div>
  
              
              <div className="right-section text-light d-flex justify-content-center align-items-center flex-column col-md-6 p-3" style={{width: '50%', height: '500px'}}>
                  <div className="logo d-flex">
                      <i className="fa-brands fa-slack me-2 fs-2"></i><h4 className="fw-bold">Store</h4>
                  </div>
                  <div>
                      <h3>Don't Have an Account</h3>
                  </div>
                  <div className="mt-3 text-center p-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi non suscipit quidem autem recusandae corporis eveniet similique impedit incidunt nemo necessitatibus, sed amet consequuntur error accusamus tenetur.</p>
                  </div>
                  <div>
                      <button className="btn btn-outline-light">SIGN UP</button>
                  </div>
              </div>
              
            </div>
      </div>
  </div>
   </div>

    
  )
}
