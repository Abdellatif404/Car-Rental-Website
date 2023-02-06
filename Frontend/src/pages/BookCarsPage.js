import { GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/ui/car-card";
import Footer from "../components/navbar/Footer";

function BookCars() {
  const fetchedData = [
    {
      img1: "https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg",
      img2: "https://img.autotrader.co.za/17873025",
      brand: "Renault Clio",
      model: "2019",
      price: "30",
      gearbox: "manuel",
      type: "diesel",
      available: "no",
    },
    {
      img1: "https://www.razaoautomovel.com/wp-content/uploads/2021/11/Dacia-Duster-4x4-6-scaled_925x520_acf_cropped.jpg",
      img2: "https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg",
      brand: "Dacia Duster",
      model: "2021",
      price: "80",
      gearbox: "automatic",
      type: "diesel",
      available: "yes",
    },
    {
      img1: "https://location-voiture.ma/uploads/images/cars/slider/572416_ve%CC%81hicule-utilitaire-multispace-berlingo-7-places.jpg",
      img2: "https://thumbs.img-sprzedajemy.pl/1000x901c/ad/92/ef/citroen-berlingo-xtr-ledy-klimatronik-lift-115-berlingo-560193777.jpg",
      brand: "Citroen Berlingo",
      model: "2019",
      price: "60",
      gearbox: "manuel",
      type: "petrol",
      available: "yes",
    },
    {
      img1: "https://www.journalofnomads.com/wp-content/uploads/2019/12/Renting-a-Car-in-Morocco-and-Driving-in-Morocco-e1649421213271.jpg",
      img2: "https://www.locationvoiture-agadir.fr/timg/phpThumb.php?src=../admin/media/img_vehicule/7c66c06e43509490ea500222f2c7e6e4_001.jpg&w=555&h=331&far=C&bg=FFFFFF&f=png&hash=1787e1341c517d3b249a83bdd1f0eefa",
      brand: "Dacia Logan",
      model: "2019",
      price: "40",
      gearbox: "manuel",
      type: "petrol",
      available: "yes",
    },
    {
      img1: "https://sf1.auto-moto.com/wp-content/uploads/sites/9/2016/07/dacia-dokker-1024x768.jpg",
      img2: "https://www.autoscout24.be/cms-content-assets/1pwJ7zcnchpk3d9ZtAYcDu-4e28845edb0deae0b3d47d4584817b6b-Dacia-Dokker-2013-1280-01-1100.jpg",
      brand: "Dacia Dokker",
      model: "2016",
      price: "40",
      gearbox: "manuel",
      type: "petrol",
      available: "no",
    },
    {
      img1: "https://www.oneclickdrive.com/car-for-rent/slider-desktop/Mercedes-Benz_Mayback-S500_2020_10864_10864_3100348325-5_small.jpg?vr=3",
      img2: "https://img.gocar.be/v7/_cloud_wordpress_/2019/06/mercedes-maybach_s_650_24.jpg",
      brand: "Mercedes Benz",
      model: "2019",
      price: "80",
      gearbox: "automatic",
      type: "petrol",
      available: "yes",
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
      <Footer />
    </>
  );
}

export default BookCars;

/*

https://www.largus.fr/images/styles/large_p/public/2022-07/citroen-c3-2022-gris-arg-mk-bd.jpg?itok=Vs78c0uU

https://www.dhnet.be/resizer/DDsQiVLseIQcPpPUb8ZaXn_VZFc=/1200x800/filters:format(jpeg):focal(1275x645:1285x635)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/HYY34NKWC5EWPJGJSYQMCBMCNU.jpg


https://www.automedia.ca/wp-content/uploads/2019/02/jeep-03.jpg

https://www.canada-tourisme.com/wp-content/uploads/2021/07/louer-jeep-wrangler-canada1.jpg

*/
