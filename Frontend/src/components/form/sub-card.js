import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCard = ({
  textHoverColor = "",
  bgColor,
  question,
  route,
  btnText,
}) => {
  return (
    <div
      className={
        bgColor +
        " p-4 text-white text-center d-flex align-items-center order-md-last"
      }
    >
      <div className="p-lg-5 p-md-0 p-4 w-100">
        <Heading fontFamily="" fontWeight="400" mb={3}>
          Welcome to Locavo
        </Heading>
        <Text mb={6}>{question}?</Text>
        
        <Link to={route} className={textHoverColor + " subcard-btn-outline"}>
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default SubCard;
