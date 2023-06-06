document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

    alert("Prontinho! Nós iremos entrar em contato assim que possível.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}

// Verifica se ocorreu um erro
  if (ocorreuErro) {
    window.location.href = "error/error2.html";
  }
