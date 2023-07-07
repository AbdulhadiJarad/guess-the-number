import { messages } from "../../Statics"


const generateBotsChat = () => {
    return messages[Math.floor(Math.random() * 49)]
}

export default generateBotsChat