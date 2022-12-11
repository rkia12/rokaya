import { Link } from "react-router-dom";
import Index from "./index";

const Login = () => (
  <Index>
    <div className="container m-5 row h-100 pb-5">
      <div className="col-md-4 col-sm-12 mx-auto mt-4 mb-5 border rounded py-2 shadow">
        <strong className="py-3 my-3 fw-bold fs-3">Sign In</strong>
        <br />
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
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Remeber me ?
            </label>
          </div>
        </div>

        <div className="mb-3">
          <input
            type="submit"
            className="form-control btn btn-primary"
            id="exampleFormControlInput1"
            value="Sign In"
          />
        </div>
        <div className="mb-2 text-center">
            you don't Have an account ?
        <Link to='/register' >Sign up</Link>
        </div>
      </div>
    </div>
  </Index>
);

export default Login;
