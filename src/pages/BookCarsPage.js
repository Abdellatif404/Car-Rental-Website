
import Header from "../components/navbar/Navbar";

function BookCars() {
  return (
    <>
      <Header
        component={
          <div className="d-flex align-items-center">
            <div className="container-fluid">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="badge badge-pill bg-danger">1</span>
                    <span>
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <div className="wrapper">
        <div className="vehicle-card">
          <div className="details">
            <div className="thumb-gallery">
              <img
                className="first"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-119.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
              <img
                className="second"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-117.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
            </div>
            <div className="info">
              <h3>Bugatti Chiron</h3>

              <div className="price">
                <span>Price Starting at</span>
                <h4>$2,998,000</h4>
              </div>
              <div className="ctas">
                <a href="#" className="btn-book primary">
                  Model Details
                </a>
                <a href="#" className="btn-book secondary">
                  Cars for Sale
                </a>
                <div style={{ clear: "both" }}></div>
              </div>
              <div className="specs">
                <div className="spec mpg">
                  <span>EPA City/Hwy</span>
                  <p>
                    9/14
                    <span />
                    mpg
                  </p>
                </div>
                <div className="spec mpg">
                  <span>0-60</span>
                  <p>
                    2.3
                    <span />
                    sec
                  </p>
                </div>
                <div className="spec mpg">
                  <span>Horsepower</span>
                  <p>
                    1500
                    <span />
                    hp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vehicle-card">
          <div className="details">
            <div className="thumb-gallery">
              <img
                className="first"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/06/2018-Ferrari-812-Superfast-115.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
              <img
                className="second"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/06/2018-Ferrari-812-Superfast-101.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
            </div>
            <div className="info">
              <h3>Bugatti Chiron</h3>

              <div className="price">
                <span>Price Starting at</span>
                <h4>$2,998,000</h4>
              </div>
              <div className="ctas">
                <a href="#" className="btn-book primary">
                  Model Details
                </a>
                <a href="#" className="btn-book secondary">
                  Cars for Sale
                </a>
                <div style={{ clear: "both" }}></div>
              </div>
              <div className="specs">
                <div className="spec mpg">
                  <span>EPA City/Hwy</span>
                  <p>
                    9/14
                    <span />
                    mpg
                  </p>
                </div>
                <div className="spec mpg">
                  <span>0-60</span>
                  <p>
                    2.3
                    <span />
                    sec
                  </p>
                </div>
                <div className="spec mpg">
                  <span>Horsepower</span>
                  <p>
                    1500
                    <span />
                    hp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vehicle-card">
          <div className="details">
            <div className="thumb-gallery">
              <img
                className="first"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/09/2018-Mercedes-AMG-GT-GTC-116.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
              <img
                className="second"
                src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/09/2018-Mercedes-AMG-GT-GTC-114.jpg?crop=1xw:1xh;center,center&resize=480:*"
              />
            </div>
            <div className="info">
              <h3>Bugatti Chiron</h3>

              <div className="price">
                <span>Price Starting at</span>
                <h4>$2,998,000</h4>
              </div>
              <div className="ctas">
                <a href="#" className="btn-book primary">
                  Model Details
                </a>
                <a href="#" className="btn-book secondary">
                  Cars for Sale
                </a>
                <div style={{ clear: "both" }}></div>
              </div>
              <div className="specs">
                <div className="spec mpg">
                  <span>EPA City/Hwy</span>
                  <p>
                    9/14
                    <span />
                    mpg
                  </p>
                </div>
                <div className="spec mpg">
                  <span>0-60</span>
                  <p>
                    2.3
                    <span />
                    sec
                  </p>
                </div>
                <div className="spec mpg">
                  <span>Horsepower</span>
                  <p>
                    1500
                    <span />
                    hp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCars;
