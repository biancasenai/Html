alerta = () => {
    alert("Olá, eu sou um alerta!")
};

const enviar = () => {
let nome = document.getElementById("nome").value;
document.getElementById("resposta").innerHTML = `<h2>Olá ${nome},formulario enviado com sucesso!</h2>`;
if (nome == ""){
    alert("bem vindo!");
}else{
alert(`Olá ${nome}, bem vindo!`)
}
};
