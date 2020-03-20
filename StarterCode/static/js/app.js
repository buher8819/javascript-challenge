// Using the UFO dataset provided in the form of an array of 
// JavaScript objects, write code that appends a table to your 
// web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, 
// city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through the 
// date/time column to find rows that match user input.
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
tableData.forEach(function (ufoReport){
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function ([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
//using HTML file for button with id filter-btn
var button = d3.select("#filter-btn");
//listener
button.on("click", function() {
    // prevent page from refreshing:
    d3.event.preventDefault();
    tbody.html(""); //prevents filtered data from simply adding to original data
    //id is datetime for date input
    var pick_date = d3.select("#datetime");
    var text = pick_date.property("value");
    var filtered = tableData.filter(table => table.datetime === text);
    filtered.forEach(function (ufoReport) {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function ([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});