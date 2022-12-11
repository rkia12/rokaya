import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneFlip,faUser } from '@fortawesome/free-solid-svg-icons'

function TopBar() {
  return (
    <nav className="container navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className='d-flex'>
        <a className="nav-link">Eng</a>/
        <a className="nav-link">Ar</a>
        </div>
        <div className="d-flex">
          <a className="nav-link p-2">
          <FontAwesomeIcon icon={faEnvelope} /> Email<br/>
          bookstore@gmail
          </a>
          <a className="nav-link p-2">
          <FontAwesomeIcon icon={faPhoneFlip} /> Call us <br/>
          +212 6 45872309
          </a>
          <a className="nav-link p-2">
          <FontAwesomeIcon icon={faUser} /> Admin
          </a>
        </div>
      </div>
    </nav>
  );
}
export default TopBar;
