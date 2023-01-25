const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btnIMC = document.getElementById("btn-resultado");
const resultadoCap = document.getElementById("imc-resultado");
const respuesta = document.getElementById("parrafo-respuesta");
const reiniciar = document.getElementById("reiniciar");
const imprimir = document.getElementById("imprimir");

const ctx = document.getElementById('myChart');
      
const graf = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Peso'],
    datasets: [{
        label: 'Bajo peso',
        data: [18.5],
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)'
        ],
        borderColor: [
        'rgba(255, 26, 104, 1)'
        ],
        borderWidth: 1
    },
    {
        label: 'Saludable',
        data: [24.9],
        backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
        'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    },
    {
        label: 'Sobrepeso',
        data: [29.9],
        backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
        'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    },
    {
        label: 'Obesidad 1',
        data: [34.9],
        backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
        'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    },
    {
        label: 'Obesidad 2',
        data: [39.9],
        backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
        'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    },
    {
        label: 'Obesidad 3',
        data: [40],
        backgroundColor: [
        'rgba(153, 25, 255, 0.2)'
        ],
        borderColor: [
        'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }
] 
      },
      options: {
        indexAxis: "y",
        barPercentage: 0.1,
        categoryPercentage: 3,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            stacked: true
          },
          x: {
            stacked: true,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false
            }
          }
        }
      }
    });



btnIMC.addEventListener("click", function () {
    let imc = Number(Number(peso.value / Math.pow(altura.value, 2)).toFixed(1));
    let categoria;

    for(let i = 0; i < graf.data.datasets.length; i++) {
        if(imc <= graf.data.datasets[i].data) {
            graf.data.datasets[i].backgroundColor.shift();
            graf.data.datasets[i].backgroundColor.push('rgba(57, 255, 26, 0.4)');
            graf.data.datasets[i].borderColor.shift();
            graf.data.datasets[i].borderColor.push('green');
            categoria = graf.data.datasets[i].label;
            graf.data.datasets[i].label = graf.data.datasets[i].label + " (su IMC)";
            break
        } else if(imc > 40) {
            graf.data.datasets[5].backgroundColor.shift();
            graf.data.datasets[5].backgroundColor.push('rgba(57, 255, 26, 0.4)');
            graf.data.datasets[5].borderColor.shift();
            graf.data.datasets[5].borderColor.push('green');
            categoria = graf.data.datasets[5].label;
            graf.data.datasets[5].label = graf.data.datasets[5].label + " (su IMC)";
            break
        }
    }

    resultadoCap.classList.remove("inactivo");
    resultadoCap.classList.add("activo");
    btnIMC.disabled = true;

    respuesta.innerHTML = `Su <b>IMC</b> es de <b>"${imc}"</b> y se encuentra en la categoría de <b>"${categoria}"</b>. Recordemos que aquellos IMC menores a <b>18,5</b> se encuentran en una categoria de <b>bajo peso</b>, es decir, por debajo de lo saludable. Aquellos que están <b>entre 18,5 y 24,9</b> se categorizan como saludables. Un IMC que excede al saludable es el de la categoria de <b>sobrepeso</b> y se encuentra <b>entre 25,0 y 29,9</b>. Finalmente aquellos IMC que superan un IMC de <b>más de 30</b> se los considera como <b>obesidad</b>.`;


    graf.update();
})

reiniciar.addEventListener("click", function() {
    location.reload();
})

imprimir.addEventListener("click", function() {
    window.print()
})





