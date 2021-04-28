/* Declaração de variáveis p/ acesso DOM */
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false


/* Aumentar tamanho imput */
nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

/* Validação de nome superior a 3 caractere*/
function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <3){
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "blue"
        nomeOk = true
    }
}
/* Validação de e-mail para que possua @ e .*/
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "blue"
        emailOk = true
    }
}

/* Validação de assunto, limite caractere*/
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "O texto é muito grande, por gentileza digite no máximo 100 caractere."
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

/* Validação de campus, se todos estiverem de acordo com os critérios será enviado*/
function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}

/* Zoom mapa*/
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

/* Voltar mapa ao tamanho normal*/
function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "350px"
}