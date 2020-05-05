// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach((ufoReport) => {
    // Append a row to the body
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      // Append a cell to the row for each value in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);


// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    //console.log(inputValue);
    
  
    // Filtering tableData based on the input
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    tbody.html("");

    // Creating error massage for empty input
    var error = d3.select('.error');

    // Object.values(tableData).forEach(value => {
    //     if(value !== inputValue){
    //         console.log('error');
    //     };
    // });
    

    if(inputValue.length === 0) {
            console.log("Error of Input");
            error.text("Please enter a Date");

        }else{
           
            error.html("");
    

    filteredData.forEach((ufoReport) => {
        // Append a row to the body
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          // Append a cell to the row for each value in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
    };

};