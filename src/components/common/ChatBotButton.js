import React from 'react';
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import Chatbot from "react-chatbot-kit";
import config from "../../chatbot/config";
import ActionProvider from "../../chatbot/ActionProvider";
import MessageParser from "../../chatbot/MessageParser";


function ChatBotButton() {
    const popover = (
        <Popover w="100%" id="popover-basic">

            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
            />
        </Popover>
    );

    return (
        <div style={{ marginTop: 5, marginLeft: 10 }}>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Button variant="secondary">Chat with Layla the bot!</Button>
            </OverlayTrigger>
        </div>
    );
}

export default ChatBotButton;