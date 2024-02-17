
function ChatGPTIntegration({ onChange, onLink, onPrice }) {
    function onChangeHandlerPrompt(value) {
        onChange(value)
    }
    function onChangeHandlerPrice(value) {
        onPrice(value)
    }
    function onChangeHandlerLink(value) {
        onLink(value)
    }

    return <div>
        <input className="prompt-input" type="text" placeholder="Enter prompt" onChange={(ev) => onChangeHandlerPrompt(ev.target.value)} />
        <input className="prompt-input" type="number" placeholder="Enter price" onChange={(ev) => onChangeHandlerPrice(ev.target.value)} />
        <input className="prompt-input" type="text" placeholder="Enter link" onChange={(ev) => onChangeHandlerLink(ev.target.value)} />

    </div>
}


export default ChatGPTIntegration