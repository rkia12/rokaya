import { Link } from "react-router-dom";
import Index from "./index";

const Register = () => (
  <Index>
    <div className="container m-5 row h-100 pb-5">
      <div className="col-md-4 col-sm-12 mx-auto mt-4 mb-5 border rounded py-2 shadow">
        <strong className="py-3 my-3 fw-bold fs-3">Sign Up</strong>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="username"
          />
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First name"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Address
          </label>
          <textarea
            className="form-control"
            id="flexCheckChecked"
          ></textarea>
        </div>

        <div className="mb-3">
          <Link to="/dashboard">

          <input
            type="submit"
            className="form-control btn btn-primary"
            id="exampleFormControlInput1"
            value="Sign Up"
            />
            </Link>
        </div>
        <div className="mb-2 text-center">
          Have an account ?<Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  </Index>
);

export default Register;
