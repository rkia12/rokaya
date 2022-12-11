import Breadcrumb from "../components/breadcrumb";
import Profile from "./profile";
import profileImg from "../assets/images/profile.jpg";

const ProfileInfo = () => {
  return (
    <Profile>
      <Breadcrumb from="Profile" to={["Info"]} />
      <form className="my-5">
        <div className="mb-3 text-center">
          <img
            src={profileImg}
            className="mx-auto img-fluid rounded-circle mb-2"
            style={{ height: "150px", width: "150px" }}
          />
          <input type="file" className="form-control mt-2" />
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label
              for="exampleInputEmail1"
              className="form-label text-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col">
            <label
              for="exampleInputPassword1"
              className="form-label text-secondary"
            >
              Old password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Old password"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col">
            <label
              for="exampleInputPassword1"
              className="form-label text-secondary"
            >
              New password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="New password"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col">
            <label
              for="exampleInputPassword1"
              className="form-label text-secondary"
            >
              Zide code
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="zipe code"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label text-secondary"
          >
            Adress
          </label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </Profile>
  );
};

export default ProfileInfo;
