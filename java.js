let mensagemDigitadanome, mensagemDigitadaemail, mensagemDigitaassunto, mensagemDigitadamensagem;

function enviar() {
    mensagemDigitadanome = document.getElementById('nome').value;
    mensagemDigitadaemail = document.getElementById('email').value;
    mensagemDigitaassunto = document.getElementById('assunto').value;
    mensagemDigitadamensagem = document.getElementById('mensagem').value;

    if (mensagemDigitadanome.trim() === "" || mensagemDigitadaemail.trim() === "" || mensagemDigitaassunto.trim() === "" || mensagemDigitadamensagem.trim() === "") {
        return;
    }
}

var enviarMensagem = document.getElementById('enviarMensagem');

enviarMensagem.addEventListener('click', function() {
    enviar();
    console.log('Mensagem enviada.');
});
