import react from "react";
import lupa from "../../assets/images/lupa.png";
import "../header/header.css"
export default (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          HOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search Pokemon"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
                <img className="lupa" src={lupa} />
              </span>
            </div>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
            <a><button type="button" className="btn btn-primary" id="button" onClick={props.openModal}>
                Add Pokemon.. </button>
              </a>
            </li>

            {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};
