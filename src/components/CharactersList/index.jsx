import Card from "../Card";
import { StudentsContext } from "../../contexts/students";
import { useContext } from "react";

const CharactersList = ({renderList}) => {
  const { cardList } = useContext(StudentsContext);

  if(cardList.length !== 0) {
    renderList = undefined
  }  
  return (
    <>
      {
        renderList ? 
        renderList.map((student, index) => (
        <Card key={index} characters={student} />
      )) :
        cardList.map((student, index) => (
        <Card key={index} characters={student} />
      ))
      
      }
    </>
  );
};

export default CharactersList;
