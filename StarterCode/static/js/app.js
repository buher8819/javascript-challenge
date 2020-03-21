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