import styled from "styled-components";

export default function Character(props) {
  const { dataCharacter } = props;
  const { Genero, Estado, Historia, Imagen, Nombre, Ocupacion } = dataCharacter;

  return (
    <ContentCharacter>
      <Title>{Nombre}</Title>
      <ContainerImage>
        <Image src={Imagen} alt={Nombre} />
      </ContainerImage>
      <PhraseText>{Ocupacion}</PhraseText>
      <PhraseText>Estado: {Estado}</PhraseText>
      <PhraseText>Genero: {Genero}</PhraseText>
    </ContentCharacter>
  );
}

const ContentCharacter = styled.div`
  padding: 20px;
  border: 1px solid #2a9d8f;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;

  &:hover {
    filter: brightness(40%);
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: #264653;
  font-size:18px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ContainerImage = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 90px;
  height: 150px;
`;

const PhraseText = styled.h4`
  color: #2a9d8f;
  margin: 20px;
`;