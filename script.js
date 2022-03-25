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
      else{ //if box is already initialized, then add column
          for(let i = 0; i < numRows; i++){ //loop through each row
              tableRef.rows[i].insertCell(-1) //add cell at the end of each row
          }
          numCols++; //increase column counter
      }
}

// Remove a row
function removeR() {
    if(numRows>0){ //check if theres at least one row 
        var row = tableRef.deleteRow(-1); //deletes a row
        numRows--; //decrease row counter
        if(numRows === 0){ 
          numCols =0;//if no rows, set numCols to 0(initial state)
        }
      }
}

// Remove a column
function removeC() {
    if(numCols>0){ //check if theres at least one column 
        for(let  i = 0; i < numRows; i++){ 
          tableRef.rows[i].deleteCell(-1); //loops thru the rows and deletes each cell from the bottom
        }
        numCols--; // decrease column counter 
        if(numCols === 0){ 
          numRows =0; // if no columns, set numRows to initial state
        }
      }
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
