import { Link } from "react-router-dom";
import Index from ".";
import Breadcrumb from "../components/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ children }) => {
  return (
    <Index>
      <div className="container">
        <Breadcrumb from="Home" to={["Profile"]} />
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-secondary text-center">My Profile</h2>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 border-0 bg-white">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link
                      to="/profile/dashboard"
                      className="dropdown-item text-secondary"
                    >
                      <FontAwesomeIcon icon={faDashboard} /> &nbsp; Dashboard
                    </Link>
                  </li>

                  <li className="list-group-item border-0">
                    <Link
                      to="/profile/info"
                      className="dropdown-item text-secondary"
                    >
                      <FontAwesomeIcon icon={faUser} /> &nbsp; My info
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </Index>
  );
};

export default Profile;
