var numeroSecreto = parseInt(Math.random() * 11)
var tentativa = 3

function Chutar() {
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou!!'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      'Você deve escolher um numero entre 0 e 10 <br> você tem apenas ' +
      tentativa +
      ' tentativa(s)'
  } else if (chute > numeroSecreto) {
    tentativa = tentativa - 1
    elementoResultado.innerHTML =
      'Foi por pouco, seu numero está alto <br> Agora você só tem ' +
      tentativa +
      ' tentativa(s)'
  } else if (chute < numeroSecreto) {
    tentativa = tentativa - 1
    elementoResultado.innerHTML =
      'Quase...está chegando perto, seu numero está baixo. <br> Cuidado, agora você só tem ' +
      tentativa +
      ' tentativa(s)'
  }
  if (tentativa == 0) {
    resultado.innerHTML =
      'Infelizmente você esgotou suas chances de acerta o numero secreto <br> O numero era: ' +
      numeroSecreto
  }
}
