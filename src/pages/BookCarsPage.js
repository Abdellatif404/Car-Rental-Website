import { GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";

function BookCars() {
  const fetchedData = [
    {
      img1: "https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg",
      img2: "https://img.autotrader.co.za/17873025",
      brand: "Cleo",
      model: "2020",
      price: "40",
      gearbox: "manuel",
      type: "diesel",
      available: "no",
    },
    {
      img1: "https://www.razaoautomovel.com/wp-content/uploads/2021/11/Dacia-Duster-4x4-6-scaled_925x520_acf_cropped.jpg",
      img2: "https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg",
      brand: "Dacia duster",
      model: "2021",
      price: "80",
      gearbox: "automatic",
      type: "diesel",
      available: "yes",
    },
    {
      img1: "https://www.autoscout24.be/cms-content-assets/4fQU2L9IjLwNij7QB6gOiw-c5f49bec2d06453bbd255d318e9f48d9-renault-clio-back-1100.jpeg",
      img2: "https://www.tz.de/bilder/2020/03/05/13575896/1458722285-renault-clio-macht-ganz-schoen-kann-auch-innenraum-ueberzeugen-2tfxSz5ldJea.jpg",
      brand: "Renault clio",
      model: "2019",
      price: "60",
      gearbox: "manuel",
      type: "petrol",
      available: "yes",
    },
    {
      img1: "https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg",
      img2: "https://img.autotrader.co.za/17873025",
      brand: "Default brand",
      model: "0000",
      price: "000",
      gearbox: "---",
      type: "---",
      available: "---",
    },
    {
      img1: "https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg",
      img2: "https://img.autotrader.co.za/17873025",
      brand: "Default brand",
      model: "0000",
      price: "000",
      gearbox: "---",
      type: "---",
      available: "---",
    },
    {
      img1: "https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg",
      img2: "https://img.autotrader.co.za/17873025",
      brand: "Default brand",
      model: "0000",
      price: "000",
      gearbox: "---",
      type: "---",
      available: "---",
    },
  ];

  return (
    <>
      <Navbar>
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
      </Navbar>

      <VStack>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} rowGap={6} columnGap={8} p={10}>
          {fetchedData.map((carData) => {
            return (
              <GridItem colSpan={1}>
                <CarCard props={carData} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default BookCars;

/*



*/
