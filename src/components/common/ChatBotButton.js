import React, { useEffect } from 'react';
import { Styles } from "./styles/backToTop.js";
import { ChakraProvider } from "@chakra-ui/react";
import { Popover, PopoverTrigger, Box, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react';

import Chatbot from "react-chatbot-kit";
import config from "../../chatbot/config";
import ActionProvider from "../../chatbot/ActionProvider";
import MessageParser from "../../chatbot/MessageParser";


function ChatBotButton() {
    useEffect(() => {
        const topBtn = document.querySelector(".chatbot-btn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });
    });

    return (
        <Styles>
            {/* Back To Top */}
            <ChakraProvider>
                <button type="text" className="chatbot-btn">
                    <Popover>
                        <PopoverTrigger>
                            <Box
                                tabIndex="0"
                                role="button"
                                aria-label="Some box"
                                p={5}
                                bg="gray.300"
                                children="chat with Layla the bot"
                            />
                        </PopoverTrigger>
                        <PopoverContent bg="tomato" color="white">
                            <PopoverHeader fontWeight="semibold">Chat with Layla</PopoverHeader>
                            <PopoverArrow bg="pink.500" />
                            <PopoverCloseButton bg="purple.500" />
                            <Chatbot
                                config={config}
                                actionProvider={ActionProvider}
                                messageParser={MessageParser}
                            />
                        </PopoverContent>
                    </Popover>
                </button>
            </ChakraProvider>
        </Styles>
    );
}

export default ChatBotButton;