import CharactersList from "../components/CharactersList";
import { Button, Container, Main, MainContainer, Title } from "../styles/styles";
import { useContext } from "react/cjs/react.development";
import { StudentsContext } from "../contexts/students";
import Head from "next/head";

const Sorted = () => {
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
        {handleAnotherSort && (
          <MainContainer>
            <CharactersList />
          </MainContainer>
        )}
      </Main>
    </Container>
  );
};

export default Sorted;
