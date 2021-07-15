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
    initialMessages: [createChatBotMessage(`السلام عليكم , يرحب 😃 بكم  مركز الهدالتحفيظ القران الكريم بدبي و نسعد بانضمامكم الي منصات الهدا لتعليم القران الكريم  مركز الهدا هو مركز مرخص من دائره الشؤون الاسلاميه و العمل الخيري - حكومه دبي و يعمل (مجاناً)
    Peace be upon you, welcomes you 😃 Al-Hada Center for the memorization of the Noble Qur’an in Dubai and we are happy to have you join the Al-Hada platforms for teaching the Holy Qur’an Al-Hada Center is a center licensed by the Department of Islamic Affairs and Charitable Work - Dubai Government and it works (for free)
    `, {
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