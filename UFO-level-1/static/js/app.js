// from data.js
var tableData = data;

console.log(tableData);

// get table references
var tbody = d3.select("tbody");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
tableData.forEach(function(sighting) {
        console.log(sighting);
            var row = tbody.append("tr");

            // Loop through each field in the dataRow and add
            // each value as a table cell (td)
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
        cell.text(value);
         }); 
});

//get filter reference
var filter = d3.select("#filter-btn");

//create event
filter.on("click", function() {

    tbody.html("");

    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);

    //add which input values to filter
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    //pull data for input values
    filteredData.forEach(function(selections) {

        console.log(selections);
       
        //append to table
        var row = tbody.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});
