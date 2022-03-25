// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let tableRef = document.getElementById("grid"); //to reference the table in the index 

// Add a row
function addR() {
    if(numRows === 0  && numCols === 0){
        var row = tableRef.insertRow(0);
        row.appendChild(row.insertCell(0));
        numRows++; //increase row counter
        numCols++; //increase column counter
      }
      else{ //if box is already initialized, then add row
        var row = tableRef.insertRow(-1); //insert row into last index 
        for(let  i = 0; i < numCols; i++){ //loop thru each col
          row.appendChild(row.insertCell(0)); //insert a cell for each column
        }
        numRows++; //increase row counter
      }
}

// Add a column
function addC() {
    //initialize the first box (if no cell)
    if(numRows === 0  && numCols === 0){
        var row = tableRef.insertRow(0);
        row.appendChild(row.insertCell(0));
        numRows++; //increase row counter
        numCols++; //increase column counter
      }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
