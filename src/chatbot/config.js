import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/options/Options";
import BotAvatar from "./BotAvatar";

const config = {
    botName: "Layla the bot",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#328f46"
        },
        chatButton: {
            backgroundColor: "#328f46"
        }
    },
    initialMessages: [createChatBotMessage(`لاالسلام عليكم, مرحباً بكم في مركز الهدا لتحفيظ القران الكريم , كيف يمكنني أن أساعدك؟`, {
        widget: "options"
    })],
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    },
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },

    ],
};

export default config;