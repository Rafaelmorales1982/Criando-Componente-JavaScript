class Cardnews extends HTMLElement {
  constructor() {
    //primeiro a ser executado
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build()); //envocar do build
    shadow.appendChild(this.style()); //envocar do style
  }
  build() {
    //método para construir os elementos html
    const componentRoot = document.createElement("div"); //componente pai tenho que colocar os filhos nele appendChild
    //criando a class para o componentRoot ou seja setando a class nele
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div"); //filho do componentRoot
    cardLeft.setAttribute("class", "card_left");


    
    //criando os elementos filhos do card-Left
    const autor = document.createElement("span");
    const imgPerfil = document.createElement("img");
    imgPerfil.src = this.getAttribute("imgPerfil");
    imgPerfil.setAttribute("class", "foto_perfil");
    //Criando as propriedades colocando conteúdo na tag
    //atributo criado autor não ter contéudo Anonymous vai ser mostrado com ou
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    // criando mais atributos com conteúdo para tag a
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");
    //pindurando os filhos de cardLeft
    cardLeft.appendChild(autor); //tag <span>
    cardLeft.appendChild(imgPerfil);
    cardLeft.appendChild(linkTitle); //tag <a></a>
    cardLeft.appendChild(newsContent); //tag <p></p>

    const cardRight = document.createElement("div"); //filho componentRoot
    cardRight.setAttribute("class", "card_right");

    //criando uma tag imag para cardRight
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") ||  "./assets/foto-default.jpg";
    newsImage.alt = "Fotos da notícia";
    //pindurando os filhos de cardRight
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft); // filho de componentRoot
    componentRoot.appendChild(cardRight); // filho de componentRoot

    //criando os elementos filhos do card-Left

    return componentRoot;
  }

  style() {
    //método para aplicar os estilos do css
    const style = document.createElement("style");
    style.textContent = `
    /*Deixando padrão */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

.card {
  width: 80%;
  border: 1px solid gray;
  /*Utilizando display flex para colocar os elementos ao lado do outro*/
  display: flex;
  flex-direction: row; /*Colocando os elemento em linha */
/*Espaçamento entre os elementos*/
justify-content: space-between;


  /*Utilizando box shadow generator criado em outro site*/
  -webkit-box-shadow: 11px 9px 5px 0px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 11px 9px 5px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 11px 9px 5px 0px rgba(0, 0, 0, 0.43);
  margin-top:10px;

  position:relative;

}

/*
.card_left, .card_right {
    border: 1px solid blue;
}
+/
/*Ajutando os elemento da esquerda*/
.card_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}

.card_left span {
  font-weight: bold;
  display:flex;
  position:absolute;
  top:15%;
  left:40px;
  
}

/*pegando a tag dentro da div card_left h1*/
.card_left a {
  margin-top: 15px;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.card_left p {
  color: rgb(72, 69, 69);
}
.foto_perfil {
    width: 20px;
    height: 20px;
    display:flex;
    position:absolute;
    top:15%;
  
}

.img-vader {
    height: 100%;
}
    

    
    `;
  return style;
  }
}

customElements.define("card-news", Cardnews);
