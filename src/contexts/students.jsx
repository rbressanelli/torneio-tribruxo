import { useState, useEffect, createContext, useCallback } from "react";
import api from "../services/api";

export const StudentsContext = createContext();

const StudentsProvider = ({ children }) => {
  const [studentsList, setStudentsList] = useState([]);
  const [cardList, setCardList] =  useState([]);   

  const getStudentsFromApi = useCallback(
    async () => {
      try {
        const response = await api.get("/students/")
        setStudentsList(response.data.slice(0, 11))
      } catch(err) {
        console.log(err)
      }
    },[]
  )

    const sortCharacter = (array) => {
    return Math.floor(Math.random() * array.length );
  }

  const chooseStudents = useCallback(() => {
    let sortIndex = sortCharacter(studentsList);    

    let firstCharacter = studentsList.find((character) => {
      return character === studentsList[sortIndex];
    });    
    
    let secondCharacterArray = studentsList.filter((character) => {
      return character.house !== firstCharacter.house;
    }); 
    
    let secondCharacter = secondCharacterArray[sortCharacter(secondCharacterArray)];

    let thirdCharacterArray = secondCharacterArray.filter((character) => {
      return character.house !== secondCharacter.house;
    });    

    let thirdCharacter = thirdCharacterArray[sortCharacter(thirdCharacterArray)];
    
    let output = [firstCharacter, secondCharacter, thirdCharacter]
    
    setCardList(output)

  },[studentsList])

  
  useEffect(() => {
    getStudentsFromApi()     
  }, [getStudentsFromApi])   
  
  const contextValue = {
      cardList,
      setStudentsList,
      chooseStudents,
  }  


  return (
      <StudentsContext.Provider value={contextValue}>
          {children}
      </StudentsContext.Provider>
  )
};

export default StudentsProvider;
