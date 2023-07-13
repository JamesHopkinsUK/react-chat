import "./Cards.css";

const Cards = (props) => {
  const cards = [
    { text: "Single card", handler: () => {}, id: 1 },
    { text: "Multiple cards", handler: () => {}, id: 2 },
  ];

  const cardsMarkup = cards.map((card) => (
    <button className="option-button" key={card.id} onClick={card.handler}>
      {card.text}
    </button>
  ));

  return <div className="options-container">{cardsMarkup}</div>;
};

export default Cards;
