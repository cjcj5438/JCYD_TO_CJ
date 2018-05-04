//沙箱
const div =document.getElementById("id")
const shadowRoot=div.createShadowRoot();
const span = document.createElement('span')

span.textContent='hello world'
shadowRoot.appendChild(span)