// Inicializa o mapa ao carregar a página
var map = L.map('map');

var googleLayer = L.tileLayer('https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  opacity: 1.0,
  attribution: '<a href="https://www.google.com/permissions/geoguidelines/attr-guide.html">Map data ©Google</a>',
  minZoom: 14,
  maxZoom: 25
}).addTo(map);

var googleLayer2 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  opacity: 1.0,
  attribution: '<a href="https://www.google.com/permissions/geoguidelines/attr-guide.html">Map data ©Google</a>',
  minZoom: 14,
  maxZoom: 25
}).addTo(map);

var imageBounds = [[-28.695173369051737, -49.402997605368434], [-28.669249822867556, -49.33823390131716]];
var imageOverlay = L.imageOverlay('img/criciuma1957.jpg', imageBounds, { opacity: 1.0, minZoom: 1, maxZoom: 1 });

L.marker([-28.6842749807576, -49.367706616406856]).addTo(map)
  .bindPopup('<div id="localizacao1" class="content-popup"><p>Estádio Heriberto Hülse</p><button id="btnpop1" type="button">Ver imagens</button></div>')
  .openPopup(); // Marcador Estádio

L.marker([-28.67503818880365, -49.368594736048664]).addTo(map)
  .bindPopup('<div class="content-popup"><p>Praça do Congresso</p><button id="btnpop1" type="button">Ver imagens</button></div>')
  .openPopup(); // Marcador Praça do Congresso

L.marker([-28.67207236421732, -49.37092236423567]).addTo(map)
  .bindPopup('<div class="content-popup"><p>Gruta Nossa Senhora de Lourdes</p><button id="btnpop1" type="button">Ver imagens</button></div>')
  .openPopup(); // Marcador Gruta Nossa Senhora de Lourdes

L.marker([-28.67070187205379, -49.416186844802084]).addTo(map)
  .bindPopup('<div class="content-popup"><p>Parque dos Imigrantes</p><button id="btnpop1" type="button">Ver imagens</button></div>')
  .openPopup(); // Marcador Parque dos Imigrantes

L.marker([-28.691698859841363, -49.38391270229288]).addTo(map)
  .bindPopup('<div class="content-popup"><p>Skate Park Criciúma</p><button id="btnpop1" type="button">Ver imagens</button></div>')
  .openPopup(); // Marcador Skate Park Criciúma
                    
map.setView([-28.67503818880365, -49.368594736048664], 16);

L.control.sideBySide(googleLayer, googleLayer2).addTo(map);


$("#btnLocal1").click(function () {
  map.setView([-28.6842749807576, -49.367706616406856], 16);
});

$("#btnLocal2").click(function () {
  map.setView([-28.67503818880365, -49.368594736048664], 16);
});

$("#btnLocal3").click(function () {
  map.setView([-28.67207236421732, -49.37092236423567], 16);
});

$("#btnLocal4").click(function () {
  map.setView([-28.67070187205379, -49.416186844802084], 16);
});

$("#btnLocal5").click(function () {
  map.setView([-28.691698859841363, -49.38391270229288], 16);
});
