
import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [character, setCharacter] = useState(null)

  const reqApi = async() => {
    const random = Math.floor(Math.random()*41)
    const api = await fetch(
      `https://apisimpsons.fly.dev/api/personajes?page=${random}`
    )
    const frase = await api.json()
    setCharacter(frase.docs)
  }

  return (
      <Container>
        <Header/>
        {!character ? (
          <Welcome  reqApi={reqApi}/>
        ) : (
          <CharacterContainer character={character} reqApi={reqApi}/>
        )}
      </Container>
  );
}

export default App;
