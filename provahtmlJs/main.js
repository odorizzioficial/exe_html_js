function validarFormulario() {
  var campoA = parseInt(document.getElementById('campoA').value);
  var campoB = parseInt(document.getElementById('campoB').value);

  if (campoB > campoA) {
    document.getElementById('mensagem').innerHTML = "Formulário válido! B é maior que A.";
    document.getElementById('mensagem').style.color = "green";
  } else {
    document.getElementById('mensagem').innerHTML = "Formulário inválido! B precisa ser maior que A.";
    document.getElementById('mensagem').style.color = "red";
  }
  return false;
}