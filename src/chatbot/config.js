import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/options/Options";

const config = {
    botName: "LearningBot",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#328f46"
        },
        chatButton: {
            backgroundColor: "#328f46"
        }
    },
    initialMessages: [createChatBotMessage(`السلام عليكم, مرحباً بكم في مركز الهدا لتحفيظ القران الكريم , كيف يمكنني أن أساعدك؟`, {
        widget: "options"
    })],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },

    ],
};

export default config;