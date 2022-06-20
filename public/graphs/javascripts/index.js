window.Apex = {
  chart: {
    foreColor: "#fff",
    toolbar: {
      show: false,
    },
  },
  colors: ["#FCCF31", "#17ead9", "#f02fc2"],
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#40475D",
  },
  xaxis: {
    axisTicks: {
      color: "#333",
    },
    axisBorder: {
      color: "#333",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      gradientToColors: ["#F55555", "#6078ea", "#6094ea"],
    },
  },
  tooltip: {
    theme: "dark",
    x: {
      formatter: function (val) {
        return moment(new Date(val)).format("HH:mm:ss");
      },
    },
  },
  yaxis: {
    decimalsInFloat: 2,
    opposite: true,
    labels: {
      offsetX: -10,
    },
  },
};

var trigoStrength = 3;
var iteration = 11;
var iteration2 = 11;

function getRandom() {
  var i = iteration;
  return (
    (Math.sin(i / trigoStrength) * (i / trigoStrength) +
      i / trigoStrength +
      1) *
    (trigoStrength * 2)
  );
}

function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
}

let hrIndex = 0;
const hrData = [
  10, 0, 11, 0, 13, 0, 12, 0, 11, 0, 10, 0, 15, 0, 17, 0, 15, 0, 17, 0, 19, 0,
  20, 0, 23, 0, 24, 0, 25, 0, 30, 0, 29, 28, 37, 35, 37, 39, 50, 65, 30, 25, 20,
  15, 10, 15, 11, 10,
];
function getHR() {
  hrIndex++;
  if (hrIndex == hrData.length - 1) {
    hrIndex = 0;
  }
  return hrData[hrIndex];
}

function getNewData(baseval, yrange) {
  var newTime = baseval + 300000;
  return {
    x: newTime,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  };
}

var optionsLine = {
  chart: {
    height: 350,
    type: "line",
    stacked: true,
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 50,
      },
    },
    dropShadow: {
      enabled: true,
      opacity: 0.3,
      blur: 5,
      left: -7,
      top: 22,
    },
    events: {
      animationEnd: function (chartCtx) {
        const newData1 = chartCtx.w.config.series[0].data.slice();
        newData1.shift();
        window.setTimeout(function () {
          chartCtx.updateOptions(
            {
              series: [
                {
                  data: newData1,
                },
              ],
            },
            false,
            false
          );
        }, 50);
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
  },
  markers: {
    size: 0,
    hover: {
      size: 0,
    },
  },
  series: [
    {
      name: "Heart Beat",
      data: [[100, 100]],
    },
  ],
  xaxis: {
    categories: [""],
  },
  title: {
    text: "Heart Beat Monitor",
    align: "left",
    style: {
      fontSize: "12px",
    },
  },
  subtitle: {
    text: "0",
    floating: true,
    align: "right",
    offsetY: 0,
    style: {
      fontSize: "22px",
    },
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: "left",
    onItemClick: {
      toggleDataSeries: false,
    },
    position: "top",
    offsetY: -33,
    offsetX: 60,
  },
};

var chartLine = new ApexCharts(
  document.querySelector("#linechart"),
  optionsLine
);
chartLine.render();

var optionsProgress1 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#40475D"],
      },
    },
  },
  stroke: {
    width: 0,
  },
  series: [
    {
      name: "Temperature",
      data: [44],
    },
  ],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Temperature",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "44C",
    style: {
      fontSize: "20px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Temperature"],
  },
  yaxis: {
    max: 100,
  },
  fill: {
    opacity: 1,
  },
};

var chartProgress1 = new ApexCharts(
  document.querySelector("#progress1"),
  optionsProgress1
);
chartProgress1.render();

var optionsProgress2 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#40475D"],
      },
    },
  },
  colors: ["#17ead9"],
  stroke: {
    width: 0,
  },
  series: [
    {
      name: "Pressure",
      data: [80],
    },
  ],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Pressure",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "80%",
    style: {
      fontSize: "20px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Pressure"],
  },
  yaxis: {
    max: 100,
  },
  fill: {
    type: "gradient",
    gradient: {
      inverseColors: false,
      gradientToColors: ["#6078ea"],
    },
  },
};

var chartProgress2 = new ApexCharts(
  document.querySelector("#progress2"),
  optionsProgress2
);
chartProgress2.render();

var optionsProgress4 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#40475D"],
      },
    },
  },
  colors: ["#f02fc2"],
  stroke: {
    width: 0,
  },
  series: [
    {
      name: "SpO2",
      data: [74],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      gradientToColors: ["#6094ea"],
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "SpO2",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "0%",
    style: {
      fontSize: "20px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["SpO2"],
  },
  yaxis: {
    max: 100,
  },
};

var chartProgress4 = new ApexCharts(
  document.querySelector("#progress4"),
  optionsProgress4
);
chartProgress4.render();

// window.setInterval(function () {
//   iteration++;

//   chartLine.updateSeries([
//     {
//       data: [
//         ...chartLine.w.config.series[0].data,
//         [chartLine.w.globals.maxX + 300000, getHR()]
//       ]
//     }
//   ]);
// }, 50);

let p4Data;
let i = setInterval(function () {
  iteration2++;
  p4Data = getRangeRandom({ min: 94, max: 98 });
  chartProgress4.updateOptions({
    series: [
      {
        data: [p4Data],
      },
    ],
    subtitle: {
      text: p4Data + "%",
    },
  });
}, 500);

setTimeout(function () {
  clearInterval(i);
  if (p4Data < 95) {
    Swal.fire({
      icon: "error",
      title: "SPO2",
      text: "Quantité d'oxtgène dans le sang insuffisante!",
    });
  }
}, 5000);

var wsUri = "ws://192.168.1.10:1337";
var output;

function init() {
  testWebSocket();
  console.log("userid:", userid);
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onmessage = function (evt) {
    onMessage(evt);
  };
  websocket.onopen = function (event) {
    websocket.send(`id: ${userid}`);
  };
}

function onMessage(evt) {
  var data = evt.data.split(",");
  chartProgress1.updateOptions({
    series: [
      {
        data: [data[2]],
      },
    ],
    subtitle: {
      text: data[2] + "°C",
    },
  });

  chartProgress2.updateOptions({
    series: [
      {
        data: [data[3]],
      },
    ],
    subtitle: {
      text: data[3] + "%",
    },
  });

  chartLine.updateSeries([
    {
      data: [
        ...chartLine.w.config.series[0].data,
        [chartLine.w.globals.maxX + 3000000, parseInt(data[1], 10)],
      ],
    },
  ]);

  if (parseInt(data[1], 10) < 50 || parseInt(data[1], 10) > 100) {
    Swal.fire({
      icon: "error",
      title: "ECG",
      text: "Rythme cardiaque irrégulier",
    });
  }

  if (parseFloat(data[2]) < 36.1 || parseFloat(data[2]) > 37.6) {
    Swal.fire({
      icon: "error",
      title: "Température",
      text: "Hyperthermie",
    });
  }
}

window.addEventListener("load", init, false);
