import Card from "../Card/Card.jsx";

import style from "./cardList.module.css";

function CardList({props, clickHandler}) {
  //[personajes]

  return (
    <div className={style.container}>
      {props.map((character) => (
        <Card
          key={character.id}
          character={character}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
}

export default CardList;
