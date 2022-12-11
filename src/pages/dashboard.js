import Breadcrumb from "../components/breadcrumb";
import Profile from "./profile";

const Dashboard = () => {
  return (
    <Profile>
      <Breadcrumb from="Profile" to={["dashboard"]} />
      <table class="table mt-3">
        <thead>
          <tr>
            <th scope="col">N'order</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Date</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>first book</td>
            <td>230 DH</td>
            <td>300</td>
            <td>23/11/2022</td>
            <td>Complete</td>
          </tr>
          

        </tbody>
      </table>
    </Profile>
  );
};

export default Dashboard;
