// interação: o botão "Menu" abre e fecha a navegação no celular 

const botaoMenu = document.getElementById("btn-menu"); 

const menu = document.getElementById("menu"); 

  

botaoMenu.addEventListener("click", function () { 

  const aberto = menu.classList.toggle("aberto");        // toggle devolve true se ligou 

  botaoMenu.setAttribute("aria-expanded", aberto);       // avisa o leitor de tela 

}); 

  

// o formulário não envia nada de verdade: só confirma na tela 

const form = document.getElementById("form-contato"); 

form.addEventListener("submit", function (evento) { 

  evento.preventDefault();                                  // não recarrega a página 

  document.getElementById("aviso").textContent = "Obrigada! Mensagem registrada."; 

  form.reset();                                             // limpa os campos 

});