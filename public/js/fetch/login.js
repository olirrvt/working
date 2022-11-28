const input = document.getElementsByTagName("input");
const url = "http://localhost:3015/login";

const logar = async () => {

    const emailUser = input[2].value.trim();
    const senhaUser = input[3].value.trim();

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