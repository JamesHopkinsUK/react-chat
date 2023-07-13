import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Buttons", handler: props.actionProvider.handleButtons, id: 1 },
    { text: "Cards", handler: props.actionProvider.handleCards, id: 2 },
    { text: "Links", handler: () => {}, id: 3 },
    { text: "Rich content", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;
