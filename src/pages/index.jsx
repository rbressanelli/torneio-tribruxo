import Head from "next/head";
import { Button, Container, Div, Main, Title } from "../styles/styles";
import { useRouter } from "next/router";
import { StudentsContext } from "../contexts/students";
import { useContext, useState } from "react";
import gryffindor from "../assets/gryffindor.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";
import slytherin from "../assets/slytherin.png";
import hogwarts from "../assets/hogwarts.png";
import Image from "next/image";
import InfoModal from "../components/InfoModal";

const Home = () => {
  const route = useRouter();
  const { chooseStudents } = useContext(StudentsContext);
  const [showModal, setShowModal] = useState(false);

  const chooseStudentsHandle = async () => {
    await chooseStudents();
    route.push("/sorted");
  };

  return (
    <Container>
      <Head>
        <title>Torneio TriBruxo</title>
        <meta name="description" content="Torneio Tribruxo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <InfoModal show={showModal} handleClick={setShowModal} />
        <button style={{ background: "transparent", border: "transparent" }}>
          <Image
            onClick={() => setShowModal(!showModal)}
            src={hogwarts}
            alt="hogwarts"
            width={150}
            height={150}
          />
        </button>
        <Title>TORNEIO TRIBRUXO</Title>

        <Button onClick={chooseStudentsHandle}>ESCOLHA OS ALUNOS</Button>
        <Div>
          <div>
            <Image src={gryffindor} alt="gryffindor" width={150} height={150} />
          </div>
          <div>
            <Image src={hufflepuff} alt="hufflepuff" width={150} height={150} />
          </div>
          <div>
            <Image src={ravenclaw} alt="ravenclaw" width={150} height={150} />
          </div>
          <div>
            <Image src={slytherin} alt="slytherin" width={150} height={150} />
          </div>
        </Div>
      </Main>
    </Container>
  );
};

export default Home;
