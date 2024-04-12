const key = "20059faedada3aeed445cbb5a1b1ce18";

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name;

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`
    ).then(resposta => resposta.json());

    colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocalização não é suportada neste navegador.");
    }
 }
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
      " Longitude: " + position.coords.longitude);
    
  }