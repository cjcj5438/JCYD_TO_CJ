class ButtonHelloElement extends HTMLButtonElement{
    constructor(){
        super()
        this.addEventListener('click',()=>{
            alert("hello world")
        })
    }
}
customElements.define("button-hello",ButtonHelloElement,{extends:"button"})