import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Components/Options/Options";
import Buttons from "../Components/Buttons/Buttons";
import ButtonChoice from "../Components/Buttons/OneButton";
import ButtonChoiceTwo from "../Components/Buttons/TwoButtons";
import ButtonChoiceThree from "../Components/Buttons/ThreeButtons";
import ButtonChoiceFour from "../Components/Buttons/FourButtons";
import ButtonChoiceMisspelled from "../Components/Buttons/MisspelledButton";
import ButtonChoiceUnexpected from "../Components/Buttons/UnexpectedButton";
import Cards from "../Components/Cards/Cards";

const config = {
  botName: "E2E Bot",
  initialMessages: [
    createChatBotMessage(
      `Hiya, I'm the E2E bot. What would you like to do today?`,
      { widget: "options" }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "buttons",
      widgetFunc: (props) => <Buttons {...props} />,
    },
    {
      widgetName: "buttonChoice",
      widgetFunc: (props) => <ButtonChoice {...props} />,
    },
    {
      widgetName: "buttonChoiceTwo",
      widgetFunc: (props) => <ButtonChoiceTwo {...props} />,
    },
    {
      widgetName: "buttonChoiceThree",
      widgetFunc: (props) => <ButtonChoiceThree {...props} />,
    },
    {
      widgetName: "buttonChoiceFour",
      widgetFunc: (props) => <ButtonChoiceFour {...props} />,
    },
    {
      widgetName: "buttonChoiceMisspelled",
      widgetFunc: (props) => <ButtonChoiceMisspelled {...props} />,
    },
    {
      widgetName: "buttonChoiceUnexpected",
      widgetFunc: (props) => <ButtonChoiceUnexpected {...props} />,
    },
    {
      widgetName: "cards",
      widgetFunc: (props) => <Cards {...props} />,
    }
  ],
};

export default config;
