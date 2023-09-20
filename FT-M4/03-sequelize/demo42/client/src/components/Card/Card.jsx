import {useNavigate} from "react-router-dom";

import {CardContainer, WizardName, CharacterImage, Button} from "./card.style";

function Card({character, clickHandler}) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`detail/${character.id}`);
  }

  // <Link to={`detail/${character.id}`}/>
  return (
    <CardContainer>
      <WizardName>Nombre: {character.name}</WizardName>
      <h2>Casa: {character.house}</h2>
      <CharacterImage src={character.image} alt={character.name} />

      <Button onClick={navigateHandler}>Haz Click!</Button>
    </CardContainer>
  );
}

export default Card;
