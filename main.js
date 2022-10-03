const form = document.getElementById('form-container');
const primeiroNumero = document.getElementById('number1');
const segundoNumero = document.getElementById('number2');


form.addEventListener('submit', function(e) {
    const mensagemErro = document.querySelector('.error-message');
    e.preventDefault();
    
    if (segundoNumero.value > primeiroNumero.value) {
        const mensagemSucesso = document.querySelector('.success-message');

        mensagemSucesso.innerHTML = `Formulario Validado com Sucesso`;
        mensagemErro.style.display = 'none';
        mensagemSucesso.style.display = 'block';

        primeiroNumero.value = '';
        segundoNumero.value = '';

    } else {
        mensagemErro.innerHTML = `${primeiroNumero.value} é maior que ${segundoNumero.value} tente um numero menor`;
        mensagemErro.style.display = 'block';
    }

})

