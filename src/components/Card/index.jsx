import { CardContainer, Container, ImageContainer } from "../../styles/styles";
import Image from "next/image";
import Gryff from "../../assets/gryffindor.png";
import Huff from "../../assets/hufflepuff.png";
import Raven from "../../assets/ravenclaw.png";
import Slyth from "../../assets/slytherin.png";

const Card = ({ characters }) => {

  const imageLoader = ({ src, width, height }) => {
    return `${src}?w=${width}&h=${height}`;  
    // return `${src}`  
  };

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
          <h3>{characters.name}</h3>
          <div>
            <ImageContainer
              // loader={imageLoader}
              src={characters.image}
              alt={characters.name}
              // width={180}
              // height={180}
              objectFit="cover"              
            />
          </div>
          <h3>{characters.actor}</h3>
          <h3>{characters.house}</h3>
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
        </CardContainer>
      )}
    </Container>
  );
};

export default Card;
