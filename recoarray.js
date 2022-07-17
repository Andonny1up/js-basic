var articulos = [
    { nombre: "Telefono", costo: 3000},
    { nombre: "Tv", costo: 3500},
    { nombre: "Auto", costo: 7000},
    { nombre: "Secadora", costo: 2500},
    { nombre: "Lampara", costo: 1000}
];
//filter
var articuloFiltrado = articulos.filter(function(articulo) {
    return articulo.costo <= 3000
});

articuloFiltrado;
//map
var nombrearticulo = articulos.map(function(articulo) {
    return articulo.nombre
});
nombrearticulo;
//find
var encuentra = articulos.find(function(articulo) {
    return articulo.nombre === "Tv";
});
encuentra;
//forEch
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});
//some
var articulobaratos = articulos.some(function (articulo) {
    return articulo.costo <= 2500;
});
articulobaratos;