import React, { useState, useEffect } from "react";
import moment from "moment";
// Components
import Main from "./Main";
// Contexts
import ConversationContext from "../Contexts/ConversationContext"
// CSS
import './App.css'


const App = () => {
    const [conversation, setConversation] = useState([
        {
            "id": 1,
            "user": "GrandPY",
            "text": "Bonjour ! Bienvenue sur GrandPY Bot, pose une question relative à un lieu.",
            "hour": "Now"
        }
    ]);

    // List all of messages exchange between the human and the bot.
    const handleAdd = message => {
        // Get all messages.
        const conv = conversation
        // Add the current hour.
        moment.locale('fr');
        const current_hour = moment().format('LT');
        message["hour"] = current_hour
        // Add an id to the message.
        message["id"] = Math.round(Math.random() * 100000)
        // Put the message to all messages list.
        conv.push(message)
        // Replace the messages in the state.
        setConversation([...conv])
    };

    const conversationContextValue = {
        conversation: conversation,
        updateConversation: handleAdd
    };

    // Scroll into the last message.
    useEffect(() => {
        let last_message = document.querySelector('.message:nth-last-child(1)');
        last_message.scrollIntoView(true)
    });

    return (
        <ConversationContext.Provider value={conversationContextValue}>
            <Main />
        </ConversationContext.Provider>
    )
}

export default App;
