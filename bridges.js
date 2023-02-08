let bridgeCoordinates = [30, -95]
let zoomLevel = 3
let map = L.map('bridge-map').setView(bridgeCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

bridges = [
    {"name": "Verrazano-Narrows Bridge", "Location":	"New York, NY",	"span": 1298.4, "coordinates": [40.6066, -74.0447] },
    {"name": "Golden Gate Bridge", "Location":	"San Francisco and Marin, CA",	"span": 1280.2, "coordinates": [37.8199, -122.4783] },
    {"name": "Mackinac Bridge", "Location":	"Mackinaw and St Ignace, MI",	"span": 1158.0, "coordinates": [45.8174, -84.7278] },
    {"name": "George Washington Bridge", "Location": "New York, NY and New Jersey, NJ",	"span": 1067.0, "coordinates": [40.8517, -73.9527] },
    {"name": "Tacoma Narrows Bridge", "Location": "Tacoma and Kitsap, WA",	"span": 853.44, "coordinates": [47.2690, -122.5517] },
]
/*
var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [38, 95], // size of the icon 
    iconAchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});*/

bridges.forEach(function(bridgesMap){
    let markerText = `<b>${bridgesMap.name}</b><br>${bridgesMap.span}`
    L.marker([bridgesMap.coordinates]).bindPopup(markerText).addTo(map)
})
/*
let longestBridge = 0
if (bridges.span > longestBridge) {
    longestBridge = bridges.span
}
console.log(longestBridge)

//{icon: bridgeIcon}

let bridgeNameInput = document.querySelector('#bridge-name')
let spanLengthInput = document.querySelector('#span-length')

let chartCanvas = document.querySelector('#bridge-doughnut-chart')
let ctx = chartCanvas.getContext('2d')

let bridgeChart = new Chart(ctx, {
    type : 'doughnut',
    data: {
        datasets: [
            {
            data: [bridges.name, bridges.span], // this will be the bridge data
            backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}
})

let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]
*/
