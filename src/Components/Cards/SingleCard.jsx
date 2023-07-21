import "./Cards.css";

const Cards = (props) => {
  const cards = [
    { text: "Single card", handler: () => {}, id: 1 },
  ];

  const cardsMarkup = cards.map((card) => (
    <div className="card" key={card.id} onClick={card.handler}>
      {card.text}
    </div>
  ));

  return <div className="card-container">{cardsMarkup}</div>;
};

export default Cards;
