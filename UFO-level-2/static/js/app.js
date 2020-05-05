// from data.js
var tableData = data;

// Selecting the body of table
var tbody = d3.select("tbody");

// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach((ufoReport) => {
    // Appending a row to the body
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      // Appending a cell to the row for each value in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Selecting the button
var button = d3.select("#filter-btn");

// Selecting the form
var form = d3.select(".form-group");

// Creating event handlers for clicking the button
button.on("click", runEnter);

// Creating the function to run for the event
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Selecting the Date
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    // Selecting the City
    var inputElement2 = d3.select("#city");
    var inputCity = inputElement2.property("value");
  
    // Selecting the State
    var inputElement3 = d3.select("#state");
    var inputState = inputElement3.property("value");

    // Selecting the Country
    var inputElement4 = d3.select("#country");
    var inputCountry = inputElement4.property("value");

    // Selecting the Shape
    var inputElement5 = d3.select("#shape");
    var inputShape = inputElement5.property("value");
  
    // Creating a checker to have at least one input
    var checker = false;

    // Creating the filterData
    var filteredData =tableData;

    // Creating the conditions for being sure that we have input
    if (inputDate !== ""){
        filteredData = filteredData.filter(ufo => ufo.datetime === inputDate);
        checker = true;
    };

    // Creating the conditions for being sure that we have input
    if (inputCity !== ""){
        filteredData = filteredData.filter(ufo => ufo.city === inputCity);
        checker = true;
    };

    // Creating the conditions for being sure that we have input
    if (inputState !== ""){
        filteredData = filteredData.filter(ufo => ufo.state === inputState);
        checker = true;
    };

    // Creating the conditions for being sure that we have input
    if (inputCountry !== ""){
        filteredData = filteredData.filter(ufo => ufo.country === inputCountry);
        checker = true;
    };

    // Creating the conditions for being sure that we have input
    if (inputShape !== ""){
        filteredData = filteredData.filter(ufo => ufo.shape === inputShape);
        checker = true;
    };
   
        
    tbody.html("");

   // Showing the filteredData in a table format
    if (checker = true){
    filteredData.forEach((ufoReport) => {
        // Appending a row to the body
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          // Appending a cell to the row for each value in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
    };
    
};