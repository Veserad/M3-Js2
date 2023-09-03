rojo.addEventListener('click', function(){
    document.getElementById('cuerpo').style.backgroundColor = 'red';
},false);

azul.addEventListener('click', function(){
    document.getElementById('cuerpo').style.backgroundColor = 'blue';
},false);

verde.addEventListener('click', function(){
    document.getElementById('cuerpo').style.backgroundColor = 'green';
},false);

var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];

const aprobados = alumnos.filter(function(alumnos){
    return alumnos.nota >= 7;
})
console.log(aprobados);

function contador(){
    document.getElementById("total").textContent = document.getElementById("contar").value.length;
}

document.getElementById("contar").addEventListener("input", contador);