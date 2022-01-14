import CharactersList from "../components/CharactersList";
import {
  Button,
  Container,
  Main,
  MainContainer,
  Title,
} from "../styles/styles";
import { useContext } from "react";
import { StudentsContext } from "../contexts/students";
import Head from "next/head";
import api from "../services/api";

const Sorted = ({dataProps}) => {
  const { chooseStudents } = useContext(StudentsContext);

  const handleAnotherSort = async () => {
    await chooseStudents();
  };

  return (
    <Container>
      <Head>
        <title>Torneio TriBruxo</title>
      </Head>
      <Main>
        <Title>Torneio Tribruxo</Title>
        <Button onClick={handleAnotherSort}>FAÇA UMA NOVA ESCOLHA</Button>
        <MainContainer>
          <CharactersList renderList={dataProps}/>
        </MainContainer>
      </Main>
    </Container>
  );
};

export async function getStaticProps() {
  const response = await api.get("/students/")
  const dataProps = response.data.slice(0, 3)
  return {
    props: {dataProps}, 
  }
}

export default Sorted;
