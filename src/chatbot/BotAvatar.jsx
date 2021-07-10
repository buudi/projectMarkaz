import React from "react";
import { ReactComponent as Icon } from './avatar.svg';

const BotAvatar = () => {
    return (
      <div className="react-chatbot-kit-chat-bot-avatar">
        <div className="react-chatbot-kit-chat-bot-avatar-container">
            <Icon className="react-chatbot-kit-chat-bot-avatar-icon"  />
        </div>
      </div>
    );
  };
  
  export default BotAvatar;