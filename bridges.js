let bridgeCoordinates = [30, -95] // sets the view of the map
let zoomLevel = 3
let map = L.map('bridge-map').setView(bridgeCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // this is the copyright info for the map
}).addTo(map)

bridges = [
    {"name": "Verrazano-Narrows Bridge", "Location":	"New York, NY",	"span": 1298.4, "coordinates": [40.6066, -74.0447] },
    {"name": "Golden Gate Bridge", "Location":	"San Francisco and Marin, CA",	"span": 1280.2, "coordinates": [37.8199, -122.4783] },
    {"name": "Mackinac Bridge", "Location":	"Mackinaw and St Ignace, MI",	"span": 1158.0, "coordinates": [45.8174, -84.7278] },
    {"name": "George Washington Bridge", "Location": "New York, NY and New Jersey, NJ",	"span": 1067.0, "coordinates": [40.8517, -73.9527] },
    {"name": "Tacoma Narrows Bridge", "Location": "Tacoma and Kitsap, WA",	"span": 853.44, "coordinates": [47.2690, -122.5517] },
]

// will obtain the bridge spans into an array
let bridgeSpans = [] // empty array
bridges.forEach(bridge => { //for every bridge
    let bridgeSpan = bridge.span // get the span for that bridge
    bridgeSpans.push(bridgeSpan) // add the span to the array
})
console.log("These are the bridge spans: ", bridgeSpans)

let bridgeNames = [] 
bridges.forEach(bridge => {
    let bridgeName = bridge.name
    bridgeNames.push(bridgeName)
})
console.log("These are the bridge names: ", bridgeNames)


var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [38, 95], // size of the icon 
    iconAchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var secondBridgeIcon = L.icon({
    iconUrl: 'bridge2.png',
    iconSize: [38, 95], // size of the icon 
    iconAchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//track the span - same as tracking the currency exchange rate value
//track which bridge has that span - same way as you tracked the currency code
let longestBridge
let longestBridgeSpan = 0

bridges.forEach(function(spanOfBridge) { // loop over each bridge in turn
    if (spanOfBridge.span > longestBridgeSpan) { // if span is longer than any others we've seen so far
        longestBridge = bridge // save this bridge in longestBridge variable
        longestBridgeSpan = spanOfBridge.span // save the bridge's span in longestBridgeSpan variable for future comparisons
    }
})
console.log("Longest bridge", longestBridge)


bridges.forEach(function(oneBridge){
    // if statement - is this the longest bridge? Draw special marker
    // else, draw marker
    if(oneBridge.span > longestBridge) {
        let markerText = `<b>${oneBridge.name}</b><br>${oneBridge.span}` // adds the bridge name and span to each icon as a popup
        L.marker(oneBridge.coordinates, {icon:bridgeIcon}).bindPopup(markerText).addTo(map) // added the bridgeicon image to the map
    } else {
        let markerText = `<b>${oneBridge.name}</b><br>${oneBridge.span}` // adds the bridge name and span to each icon as a popup
        L.marker(longestBridge, {icon:secondBridgeIcon}).bindPopup(markerText).addTo(map) // added the bridgeicon image to the map
    }
})


// create variable for an element in the html
// all of the html is the 'document'
let bridgeNameInput = document.querySelector('#bridge-name') 
let spanLengthInput = document.querySelector('#span-length')
let chartCanvas = document.querySelector('#bridge-bar-chart')

let ctx = chartCanvas.getContext('2d')

let bridgeChart = new Chart(ctx, {
    type : 'bar',
    data: {
        datasets: [
            {
            data: bridgeSpans, // this will be the bridge data
            backgroundColor: ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet']
            }
        ],
        labels: bridgeNames
    },
    options: {}
})

