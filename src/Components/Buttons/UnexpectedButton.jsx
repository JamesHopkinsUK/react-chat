import "./Buttons.css";

const Buttons = (props) => {
  const buttons = [
    { text: "One button", handler: props.actionProvider.handleButtonChoice, id: 1 },
    { text: "Un-expected button", handler: props.actionProvider.handleButtonChoiceTwo, id: 2 },
  ];

  const buttonsMarkup = buttons.map((button) => (
    <button
      className="option-button"
      key={button.id}
      onClick={button.handler}
    >
      {button.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Buttons;
