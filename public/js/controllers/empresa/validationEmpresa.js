const inputFormEmpresa = document.getElementsByTagName("input");

const cnpjEmpresa = inputFormEmpresa[4].value.trim()

const validarNomeEmpresa = () => {
    inputFormEmpresa[1].addEventListener('keyup', () => {
        const nomeEmpresa = inputFormEmpresa[1].value.trim();
        const alertaEmpresa = document.querySelector("#alerta-nomeEmpresa");
        const textoAlerta = document.querySelector("#aviso-nomeEmpresa");

        if (nomeEmpresa === '') {
            alertaEmpresa.style.display = 'flex';
            inputFormEmpresa[1].style.border = '2px solid #9b111e';
            textoAlerta.innerHTML = 'O nome da empresa é obrigatório!'
        } else {
            alertaEmpresa.style.display = 'none';
            inputFormEmpresa[1].style.border = '2px solid #008000';
        };
    });
};

const validarEmailEmpresa = () => {
    inputFormEmpresa[2].addEventListener("keyup", () => {
        const emailEmpresa = inputFormEmpresa[2].value.trim();
        const alertaEmpresa = document.querySelector("#alerta-emailEmpresa");
        const textoAlerta = document.querySelector("#aviso-emailEmpresa");
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
        
        if (emailEmpresa === '') {
            alertaEmpresa.style.display = 'flex';
            inputFormEmpresa[2].style.border = '2px solid #9b111e';
            textoAlerta.innerHTML = 'O email da empresa é obrigatório!'
        } 

        else if (!regexEmail.test(emailEmpresa)) {
            alertaEmpresa.style.display = 'flex';
            inputFormEmpresa[2].style.border = "2px solid #9b111e";
            textoAlerta.innerHTML = 'Insira um email válido!';
        } else {
            alertaEmpresa.style.display = 'none';
            inputFormEmpresa[2].style.border = '2px solid #008000';
        };
    });
};

const validarSenhaEmpresa = () => {
    inputFormEmpresa[3].addEventListener("keyup", () => {
        const senhaEmpresa = inputFormEmpresa[3].value.trim();
        const alertaEmpresa = document.querySelector("#alerta-senhaEmpresa");
        const textoAlerta = document.querySelector("#aviso-senhaEmpresa");
        const regexSenha = /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&@\/\(\)\?\^\'\\\+\-\*]))^.*/

        // Senha de no mínimo 6 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial

        if (senhaEmpresa === '') {
            alertaEmpresa.style.display = 'flex';
            inputFormEmpresa[3].style.border = '2px solid #9b111e';
            textoAlerta.innerHTML = 'A senha é obrigatória!'
        }

        else if (!regexSenha.test(senhaEmpresa)) {
            alertaEmpresa.style.display = 'flex';
            inputFormEmpresa[3].style.border = "2px solid #9b111e";
            textoAlerta.innerHTML = 'Insira uma senha válida!';
        } else {
            alertaEmpresa.style.display = 'none';
            inputFormEmpresa[3].style.border = '2px solid #008000';
        };
    });
};

document.addEventListener("DOMContentLoaded", () => {
    validarNomeEmpresa();
    validarEmailEmpresa();
    validarSenhaEmpresa();
});