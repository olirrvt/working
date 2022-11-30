const inputEmail = document.querySelector("#email-user");
const inputSenha = document.querySelector("#senha-user");

const url = "http://localhost:3015/login";
const buttonInput = document.getElementById("btn-login-formulario");

const logar = async () => {

    const emailUser = inputEmail.value;
    const senhaUser = inputSenha.value;

    await fetch(url, {
         method: "POST",
         headers: {
              "Content-Type": "application/json"
         },
         body: JSON.stringify({
              email: emailUser,
              senha: senhaUser
         })
    })
    .then(res => res.json())
    .then(res => {
        const usuario = res.usuario;
        // Constante com o usuário
        if (usuario) {
            window.location.href = "http://localhost:3040/"
        } else {
            console.log("Erro!")
            // Passar mensagem de erro ao usuário!
        }
    })
};

buttonInput.addEventListener("click", () => {
    logar()
});