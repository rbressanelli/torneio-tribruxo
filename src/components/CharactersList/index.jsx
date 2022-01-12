import Card from "../Card";
import { StudentsContext } from "../../context/students";
import { useContext } from "react";

const CharactersList = () => {
  const { cardList } = useContext(StudentsContext);

  return (
    <>
      {cardList.map((student, index) => (
        <Card key={index} characters={student} />
      ))}
    </>
  );
};

export default CharactersList;
