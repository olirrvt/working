const inputForm = document.getElementsByTagName("input");
const btnEnviar = document.querySelector("#btn-cadastro-formulario");

var formCadastro = {
    username: false,
    emailF: false,
    senhaF: false,
    cepF: false,
    cpfF: false,
    rgF: false
}

function usernameValidation() {
    inputForm[0].addEventListener('keyup', function() {
        const alertaUser = document.querySelector('#alerta-username');
        const username = inputForm[0].value.trim();
        const regexUsername = /^[a-z0-9_-]{3,15}$/
        // Entre 3 a 15, com letras, numeros, underline
        // e traço

        btnCadastrar();

        if (username === '') {
            alertaUser.style.display = 'flex'
            inputForm[0].style.border = '2px solid red'
            alertaUser.innerHTML = "User obrigatório!"
            formCadastro.username = false;
        } 

        else if (!regexUsername.test(username)) {
            alertaUser.style.display = 'flex'
            inputForm[0].style.border = '2px solid red'
            alertaUser.innerHTML = "User inválido!"
            formCadastro.username = false;

        } else {
            alertaUser.style.display = 'none'
            inputForm[0].style.border = '2px solid green'
            formCadastro.username = true;
        }
    })
}

function emailValidation() {
    
    inputForm[1].addEventListener('keyup', function() {

    const alerta = document.getElementById('alerta');
    const emailUser = inputForm[1].value.trim()
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/; 

    btnCadastrar();

    if (emailUser === '') {
        alerta.style.display = 'flex' 
        inputForm[1].style.border = '2px solid red'
        alerta.innerHTML = 'E-mail obrigatório!'
        formCadastro.emailF = false;
    }

    else if (!regexEmail.test(emailUser)) {
        alerta.style.display = 'flex' 
        inputForm[1].style.border = '2px solid red'
        alerta.innerHTML = 'E-mail inválido!'
        formCadastro.emailF = false;
    } else {
        alerta.style.display = 'none'
        inputForm[1].style.border = '2px solid green'
        formCadastro.emailF = true;
    }
    })
}


function senhaValidation() {

    inputForm[2].addEventListener('keyup', function() {
        
        const alertaSenha = document.querySelector("#alerta-senha");
        const senhaUser = inputForm[2].value.trim();
        const regexSenha = /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&@\/\(\)\?\^\'\\\+\-\*]))^.*/

        // Senha de no mínimo 6 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial

        btnCadastrar()

        if(senhaUser === '') {
            alertaSenha.style.display = 'flex' 
            inputForm[2].style.border = '2px solid red'
            alertaSenha.innerHTML = 'Senha obrigatória!'
            formCadastro.senhaF = false;
        }
    
        else if (!regexSenha.test(senhaUser)) {
            formCadastro.senhaF = false;
            alertaSenha.style.display = 'flex' 
            inputForm[2].style.border = '2px solid red'
            alertaSenha.innerHTML = 'Senha inválida'
        } else {
            // btnEnviar.style.background = "green"
            alertaSenha.style.display = 'none'
            inputForm[2].style.border = '2px solid green'
            formCadastro.senhaF = true;
        }
    })
};

// CADASTRO DADOS 02

function cepValidation() {
    inputForm[3].addEventListener('keyup', function() {

        const cepUser = inputForm[3].value;
        const alertaCep = document.querySelector("#alerta-cep");
        const regexCep =  /(^[0-9]{5})-?([0-9]{3}$)/

        btnCadastrar()
        
        if (cepUser == '') { 
            alertaCep.style.display = 'flex' 
            inputForm[3].style.border = '2px solid red'
            alertaCep.innerHTML = 'CEP obrigatório!'
            formCadastro.cepF = false;
        }
        else if (!regexCep.test(cepUser)) {
            formCadastro.cepF = false;
            alertaCep.style.display = 'flex' 
            inputForm[3].style.border = '2px solid red'
            alertaCep.innerHTML = 'CEP inválido'
        } else {
            alertaCep.style.display = 'none'
            inputForm[3].style.border = '2px solid green'
            formCadastro.cepF = true;
        }
    })
};

function rgValidation() {
    inputForm[4].addEventListener('keyup', function() {

        const rgUser = inputForm[4].value;
        const alertaRg = document.getElementById("alerta-rg");
        const regexRg = /(\d{1,2})(\d{3})(\d{3})(\d{1})$/

        btnCadastrar()

        if (alertaRg == '') {
            alertaRg.style.display = 'flex';
            inputForm[4].style.border = '2px solid red';
            alertaRg.innerHTML = 'RG obrigatório!'
            formCadastro.rgF = false;
        }
        else if (!regexRg.test(rgUser)) {
            formCadastro.rgF = false;
            alertaRg.style.display = 'flex';
            inputForm[4].style.border = '2px solid red';
            alertaRg.innerHTML = 'RG inválido';
        } else {
            alertaRg.style.display = 'none';
            inputForm[4].style.border = '2px solid green';
            formCadastro.rgF = true;
        }
    })
};

function cpfValidation() {
    inputForm[5].addEventListener('keydown', function() {

        const userCpf = inputForm[5].value;
        const alertaCpf = document.getElementById("alerta-cpf");
        const regexCpf = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/

        btnCadastrar()

        if (userCpf == '') {
            console.log(userCpf);
            alertaCpf.style.display = 'flex';
            inputForm[5].style.border = '2px solid red';
            alertaCpf.innerHTML = 'CPF obrigatório!'
            formCadastro.cpfF = false;
        }
        else if (!regexCpf.test(userCpf)) {
            // console.log(userCpf)
            // console.log(regexCpf.test(userCpf));
            formCadastro.cpfF = false;
            alertaCpf.style.display = 'flex';
            inputForm[5].style.border = '2px solid red';
            alertaCpf.innerHTML = 'CPF inválido';
        } else {
            alertaCpf.style.display = 'none';
            inputForm[5].style.border = '2px solid green';
            formCadastro.cpfF = true;
        }
    })
};

// BOTÃO

function btnCadastrar() {

    if (formCadastro.username && formCadastro.emailF && formCadastro.senhaF && formCadastro.cepF && formCadastro.cpfF){
        btnEnviar.removeAttribute('disabled') 
    } else {
        btnEnviar.setAttribute('disabled', true)
        // Erro na validação
    }
};


document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada completamente", inputForm)
    emailValidation();
    senhaValidation();
    usernameValidation();
    cepValidation();
    cpfValidation();
    rgValidation();
})