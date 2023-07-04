
function trocarImagem(animal) {
    var imagem;
    
    if (animal === 'cachorro') {
      imagem = 'cachorro.jpg';
    } else if (animal === 'gato') {
      imagem = 'gato.jpeg';
    }
    
    document.getElementById('animal-image').src = imagem;
  }
  let valordoclick = 1
var contador = { name: "contador", dinheiro: 0, ganharDinheiro() { contador.dinheiro += valordoclick } };

function ganharDinheiro() {
  contador.ganharDinheiro()
  atualizarDinheiro()
}

function atualizarDinheiro() {
  var dinheiroText = document.getElementById("money-text")
  dinheiroText.textContent = contador.dinheiro;
}

var animalImage = document.getElementById("animal-image");
animalImage.addEventListener("click", ganharDinheiro);








function buttonClick(buttonNumber) {
    if (buttonNumber == 1) {
      if (contador.dinheiro >= 45) {
        contador.dinheiro = contador.dinheiro - 45;
        valordoclick++
        atualizarDinheiro();
      }
    }
    if (buttonNumber == 2) {
        if (contador.dinheiro >= 600) {
          contador.dinheiro = contador.dinheiro - 600;
          valordoclick = valordoclick + 2
          atualizarDinheiro();
        
        }
      }
      if (buttonNumber == 3) {
        if (contador.dinheiro >= 8000) {
          contador.dinheiro = contador.dinheiro - 8000;
          valordoclick = valordoclick + 3
          atualizarDinheiro();
        }
      }
      if (buttonNumber == 4) {
        if (contador.dinheiro >= 1300000) {
          contador.dinheiro = contador.dinheiro - 1300000;
          valordoclick = valordoclick + 30
          atualizarDinheiro();
        }
      }
      if (buttonNumber == 5) {
        if (contador.dinheiro >= 50000000) {
          contador.dinheiro = contador.dinheiro - 50000000;
          valordoclick = valordoclick + 400
          atualizarDinheiro();
        }
      }
      if (buttonNumber == 6) {
        if (contador.dinheiro >= 12000000000) {
          contador.dinheiro = contador.dinheiro - 12000000000;
          valordoclick = valordoclick + 5000000000
          atualizarDinheiro();
        }
      }
  }
