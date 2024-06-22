const tglDark = document.querySelector("#switch--dark");
const body = document.body
const imagem = document.querySelector(".img--main");
const elipse = document.querySelector(".Sol")
let temaPreferido = localStorage.getItem("tema");

tglDark.addEventListener("change", alterarTema);

function carregarTema(){
    if (temaPreferido === "dark"){
        body.classList.add("dark");
        imagem.setAttribute("src", "noite-transformed.jpeg")
        elipse.setAttribute("src","Ellipse2.png")
        
    }else{
        body.classList.remove("dark");
        imagem.setAttribute("src","dia-transformed (1).jpeg")
        elipse.setAttribute("src","Ellipse1.png")
    }
}

function alterarTema() {
    // Existe a classe dark body?
   if (body.classList.contains("dark")){
    body.classList.remove("dark");
    imagem.setAttribute("src","dia-transformed (1).jpeg")
    elipse.setAttribute("src","Ellipse1.png")
    localStorage.setItem("tema", "")
   } else{
    body.classList.add("dark");
    imagem.setAttribute("src", "noite-transformed.jpeg")
    elipse.setAttribute("src","Ellipse2.png")
    localStorage.setItem("tema", "dark")
   }
}

// const resposta = prompt("Qual sua senha?")
// localStorage.setItem("senha", resposta)
// console.log(localStorage.getItem("senha"))

// setItem("Chave", valor) gravar um valor no localStorage
// getItem("Chave") resgata um valor no localStorage
// ewmoveItem("Chave") remove um único valor do LocalStorage
// clear() limpa todo çocal storage do seu dóminio 

carregarTema()