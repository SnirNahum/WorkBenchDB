import { useState } from "react"
import { workBenchDBService } from "../services/WorkBenchDBService"
import { asyncStorageService } from "../services/async-storage.service"
import HelperTextMisaligned from "./AddProduct"

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

    async function generatePost() {
        try {
            if (!gptPrompt.trim()) {
                return
            }
            setIsLoading(true)
            const response = await workBenchDBService.setWorkBenchDBPrompt(gptPrompt)
            response['tldr'] = 'Too long not read - '
            response['keyFeatures'] = '⭐ Key features:'
            response['orderNow'] = '👉 Click to order now: '
            response['dealPrice'] = 'Deal price -  '
            response['itemLink'] = itemLink
            response['itemPrice'] = itemPrice
            setIsLoading(false)
            setResponse(response)
        } catch (error) {
            setIsLoading(false)
        }
    }

    async function addProduct() {
        if (!response) return
        let newProduct = workBenchDBService.getEmptyProduct()
        newProduct.price = response.price
        newProduct.title = response.title
        newProduct.img = response.itemLink
        const newData = await asyncStorageService.post('productDB', newProduct)
        return newData
    }
    return <section>
        <h1>Create new Product</h1>

        <div className="prompt-res">
            {!isLoading ? (<div>
            </div>) : <div className="loading-spinner"></div>}
            <button onClick={addProduct}>Add product</button>
        </div>
        {/* <SocialIntegraion itemLink={response.itemLink} /> */}
        <HelperTextMisaligned response={response} onChange={onChangeHandlerPrompt} onPrice={onChangeHandlerPrice} onLink={onChangeHandlerLink} />
        <div  class="codepen-button" onClick={generatePost}><span>Generate post</span></div>
    </section>
}

export default Integration