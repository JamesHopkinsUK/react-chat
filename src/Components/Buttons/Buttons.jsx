import "./Buttons.css";

const Buttons = (props) => {
  const buttons = [
    { text: "One Button", handler: props.actionProvider.handleButtonChoice, id: 1 },
    { text: "Two Buttons", handler: props.actionProvider.handleButtonChoiceTwo, id: 2 },
    { text: "Three Buttons", handler: props.actionProvider.handleButtonChoiceThree, id: 3 },
    { text: "Four Buttons", handler: () => {}, id: 4 },
    { text: "Misspelled button", handler: () => {}, id: 5 },
    { text: "Unexpected button", handler: () => {}, id: 6 },
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
