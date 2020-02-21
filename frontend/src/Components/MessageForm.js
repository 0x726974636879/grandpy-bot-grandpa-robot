import React, { useContext, useState } from "react";
import axios from "axios";
// Contexts
import ConversationContext from "../Contexts/ConversationContext";
import ApiKeyContext from "../Contexts/ApiKeyContext"


const SendMessage = () => {
    const [message, setMessage] = useState("");
    const conversationContextValue = useContext(ConversationContext);
    const apiKeyContextValue = useContext(ApiKeyContext)

    const handleChange = event => {
        // Get the written message.
        const msg = event.currentTarget.value;
        // Put the message in the state.
        setMessage(msg);
    }

    const handleSubmit = event => {
        // Stop the initial action that reset the page.
        event.preventDefault();
        const msg = message
        // Add the user message to the conversation.
        conversationContextValue.updateConversation({
            "user": "Me",
            "text": msg
        })
        // Send the message to Flask Background with Axios package.
        axios.post('/askbot', {
            message: msg
        })
            .then((response) => {
                // Get the response data.
                const responseDescription = response.data.description;
                const responseAddress = response.data.address;
                const responsePosition = response.data.position;

                if (responseAddress) {
                    let response = {
                        "user": "GrandPY",
                        "text": responseAddress
                    }
                    if (responsePosition) {
                        response["position"] = {
                            "lng": responsePosition.lng,
                            "lat": responsePosition.lat
                        }
                        apiKeyContextValue.updateApiKey()
                    }
                    conversationContextValue.updateConversation(response);
                }
                conversationContextValue.updateConversation({
                    "user": "GrandPY",
                    "text": responseDescription
                });
            })
            .catch((error) => console.log(error));
        document.querySelector('.message-input').reset();
    }

    return (
        <div className="message-box">
            <form className="message-input" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    className="message-input"
                    placeholder="Ask your question..."
                    required
                />
                <button type="submit" className="message-submit">Send</button>
            </form>
        </div>
    )
}
export default SendMessage;
