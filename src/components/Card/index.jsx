import { CardContainer, Container, ImageContainer, SubTitle } from "../../styles/styles";
import Image from "next/image";
import Gryff from "../../assets/gryffindor.png";
import Huff from "../../assets/hufflepuff.png";
import Raven from "../../assets/ravenclaw.png";
import Slyth from "../../assets/slytherin.png";

const Card = ({ characters }) => {

  const charactersHouse = {
    Gryffindor: "gryffindor",
    Ravenclaw: "ravenclaw",
    Slytherin: "slytherin",
    Hufflepuff: "hufflepuff",
  };

  return (
    <Container>
      {characters && (
        <CardContainer className={charactersHouse[characters.house]}>
          <SubTitle>{characters.name}</SubTitle>
          <div>
            <ImageContainer              
              src={characters.image}
              alt={characters.name}
              width={180}
              height={180}              
              objectFit="cover"              
            />
          </div>
          <SubTitle>{characters.actor}</SubTitle>
          <div>
            <Image
              src={
                characters.house === "Gryffindor"
                  ? Gryff
                  : characters.house === "Ravenclaw"
                  ? Raven
                  : characters.house === "Slytherin"
                  ? Slyth
                  : Huff
              }
              alt={characters.house}
              width={70}
              height={70}
            />
          </div>
          <SubTitle>{characters.house}</SubTitle>
        </CardContainer>
      )}
    </Container>
  );
};

export default Card;
