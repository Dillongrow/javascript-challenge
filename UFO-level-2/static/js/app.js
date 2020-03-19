// from data.js
var tableData = data;

console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
        console.log(sighting);
            var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
        cell.text(value);
         }); 
});


var filter = d3.select("#filter-btn");

filter.on("click", function() {

    tbody.html("");

    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
       
        var row = tbody.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});
