import { useState } from "react"
import ChatGPTIntegration from "../cmps/Integration/ChatGPTIntegration"
import SocialIntegraion from "../cmps/Integration/SocialIntegraion"
import { workBenchDBService } from "../services/WorkBenchDBService"

function Integration() {
    const [gptPrompt, setGptPrompt] = useState("")
    const [response, setResponse] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [itemPrice, setItemPrice] = useState(0);
    const [itemLink, setItemLink] = useState("");

    function onChangeHandlerPrompt(data) {
        setGptPrompt(data)
    }
    function onChangeHandlerPrice(data) {
        setItemPrice(data)
    }
    function onChangeHandlerLink(data) {
        setItemLink(data)
    }
    async function clickHandler() {
        try {
            setIsLoading(true)
            const response = await workBenchDBService.setWorkBenchDBPrompt(gptPrompt)
            setIsLoading(false)
            setResponse(response)
        } catch (error) {
            setIsLoading(false)
        }
    }
    return <section>
        <h1>Enter Prompt</h1>
        <div className="flex">
            <ChatGPTIntegration onChange={onChangeHandlerPrompt} onPrice = {onChangeHandlerPrice} onLink={onChangeHandlerLink}  />
            <button onClick={clickHandler}>Generate Prompt</button>
        </div>
        <div className="prompt-res">
            {!isLoading ? (<div>
                <p><strong>Too long not read - {itemPrice}$</strong></p>
                <p style={{ color: "blue" }}>Link - {itemLink}</p>
                <p>{response.item_description_top}</p>
                <p>⭐ Key features:</p>
                {response.item_features?.length > 0 && (
                    <ul>
                        {response.item_features.map((item, index) => (
                            <li className="clean-list" key={index}>{item.features}</li>
                        ))}
                    </ul>

                )}
                <p>{response.item_description_bottom}</p>
                <h3><strong>👉 Click to order now:</strong> <span style={{ color: "blue" }}>{itemLink}</span> </h3>
                <p><strong>Deal price - {itemPrice}$</strong></p>
                <p>{response.item_offer}</p>
                <p><strong>{response.item_hashtags}</strong></p>




            </div>) : <div className="loading-spinner"></div>}
        </div>
        <SocialIntegraion itemLink={itemLink}/>
    </section>
}

export default Integration