import "./Buttons.css";

const Buttons = (props) => {
  const buttons = [
    { text: "Missplled Button", handler: props.actionProvider.handleButtonChoiceMisspelled, id: 1 },
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
