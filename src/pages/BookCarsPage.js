import { GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";

function BookCars() {
  return (
    <>
      <Header
        component={
          <>
            <ul className="navbar-nav login-buttons d-flex flex-row">
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/profile">
                  <i className="fa fa-user fa-lg"></i>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/login">
                  <i className="logout-icon fa fa-sign-out fa-lg"></i>
                </Link>
              </li>
            </ul>
          </>
        }
      />

      <VStack>
        <SimpleGrid columns={[1, 2, 3, 4]} rowGap={3} columnGap={3}>
          <GridItem colSpan={1}>
            <CarCard />
          </GridItem>
          <GridItem colSpan={1}>
            <CarCard />
          </GridItem>
          <GridItem colSpan={1}>
            <CarCard />
          </GridItem>
          <GridItem colSpan={1}>
            <CarCard />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default BookCars;

/*

<li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="badge badge-pill bg-danger">1</span>
                    <span>
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                  </a>
                </li>

*/



/*

<div className="wrapper">
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

*/