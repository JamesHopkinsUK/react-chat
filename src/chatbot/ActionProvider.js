class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hey there!");
    this.addMessageToState(message);
  };

  handleButtons = () => {
    const message = this.createChatBotMessage("Cool, here are some buttons!", {
      widget: "buttons",
    });
    this.addMessageToState(message);
  };

  handleButtonChoice = () => {
    const message = this.createChatBotMessage("Okay, here you go:", {
      widget: "buttonChoice",
    });
    this.addMessageToState(message);
  };

  handleButtonChoiceTwo = () => {
    const message = this.createChatBotMessage("Sure, here's two buttons:", {
      widget: "buttonChoiceTwo",
    });
    this.addMessageToState(message);
  };

  handleButtonChoiceThree = () => {
    const message = this.createChatBotMessage("Three... that's the magic number:", {
      widget: "buttonChoiceThree",
    });
    this.addMessageToState(message);
  };

  handleCards = () => {
    const message = this.createChatBotMessage("Sure, pick which cards you would like:", {
      widget: "cards",
    });
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
