
export function Signup(){

    return <form id="form">
    <div className="mb-3">
      <h3 id="heading"> Signup Here </h3>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
      />
      </div>

       <div className="mb-3">
      <label  className="form-label">
        City
      </label>
      <select className="form-label form-control">
        <option> Select city</option>
        <option> Faisalabad</option>
        <option> Jaranwala</option>
        <option> Lahore</option>
      </select>

    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
   
    <button type="submit" className="btn btn-primary">
      Sign-up
    </button>
  </form>
  
}