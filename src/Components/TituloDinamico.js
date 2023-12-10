class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    
    //Base do componente   criando uma tag h1 <cria elementos ou seja tags html>
    const componetRoot = document.createElement("h1");
    /**componetRoot.textContent = "Rafael"; //Adicionando um texto na tag h1
    */
   componetRoot.textContent = this.getAttribute("titulo");//Criando uma propriedade e colocar no html
    //Estilizar o componente
    const style = document.createElement("style");
    style.textContent = `
h1{
    color:red;
    text-align:Center;
}

`;

    //Enviar para a shadow
    shadow.appendChild(componetRoot);
    shadow.appendChild(style);
  }
}
//para criar um componente tem que ter nome composto com hifen
customElements.define("titulo-dinamico", TituloDinamico);
