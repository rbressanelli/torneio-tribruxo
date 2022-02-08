import { Modal } from "../../styles/styles";

const InfoModal = ({ show, handleClick }) => {
  return (
    <>
      <Modal 
        visibility={show.toString()}         
        >
        <h1>História</h1>
        <p>
          O Torneio Tribruxo é um campeonato entre as três maiores escolas de
          magia da Europa: Academia de Magia Beauxbatons, Escola de Magia e
          Bruxaria de Hogwarts e Instituto Durmstrang, cada escola sendo
          representada por um Campeão.
        </p>
        <p>
          Os campeões realizam, ao longo do ano, três tarefas - tradicionalmente
          julgadas pelos diretores das escolas concorrentes diferentes -
          projetadas para testar a habilidade mágica, inteligência e coragem dos
          campeões.
        </p>
        <p>
          Os Campeões competem por honra e glória de vencer o Torneio, para a
          Taça Tribruxo, e um prêmio monetário de 1000 galeões. O primeiro
          torneio foi realizado em algum momento no final dos século XII ou do
          século XII.
        </p>
        <p>
          Aqui serão escolhidos os 3 competidores que duelarão entre si para que
          o vencedor participe do Torneio Tribruxo em nome da Escola Hogwarts.
        </p>
        <button onClick={() => handleClick(!show)}>X</button>
      </Modal>
    </>
  );
};

export default InfoModal;
