export function Login(){

    return <form>
    <div className="mb-3">
    <h3 id="heading"> Login Here </h3>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Enter Username
      </label>
      <input
        type="text"
        placeholder="enter username"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
     
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
      Login
    </button>
  </form>
  
}