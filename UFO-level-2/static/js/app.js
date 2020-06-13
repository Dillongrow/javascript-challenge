// from data.js
var tableData = data;

console.log(tableData);

//get table references
var tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
        console.log(sighting);
            var row = tbody.append("tr");

            // Next, loop through each object in the data
            // and append a row and cells for each value in the row
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
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    console.log(filteredData);

    //pull data from input vaules
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
