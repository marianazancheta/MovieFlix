var listaFilmes = [];
var listaNomes = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listarFilmesTela(filmeFavorito, nomeFilme);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesTela(filme, nome) {
  listaFilmes.push(filme);
  listaNomes.push(nome);
  var elementos = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    var elementoFilme = "<img src=" + listaFilmes[i] + ">";
    var legendaFilme = "<p>" + listaNomes[i] + "</p>";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementos +=
      "<div class='filmeCapa'>" + elementoFilme + legendaFilme + "</div>";
  }
  elementoListaFilmes.innerHTML = elementos;
}

//var elementos para guardar a listagem durante o loop e depois substituir o conteúdo na div - innerHTML