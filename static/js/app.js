// from data.js
var tableData = data;

console.log(tableData);

//add new ufo sighting record
var add_record = {
  datetime: "1/28/1996",
  city: "dallas",
  state: "tx",
  country: "us",
  shape: "star",
  durationMinutes: "5 mins.",
  comments: "Cowboys win a superbowl, that's alien!."}
tableData.splice(2, 0, add_record);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

 data.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");
   Object.entries(sightingReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
  });
 var submit = d3.select("#submit");
    
 // function to take input and recreate table
 submit.on("click", function() {
   // stops page from refreshing
   d3.event.preventDefault();
 
   //need this to do the filter
   d3.select(".summary").html("");
 
   // user input as variable for date
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
    
   // Filter Date
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
   
   // loop through for date
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);

    });
  });
});

{/* <script type='text/javascript'>
  (document).ready(function() {
    ('.filter').multifilter()
    })
</script> */}
