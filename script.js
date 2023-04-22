function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");
  
    // Insert a new row at the top of the table
    var newRow = table.insertRow(0);
  
    // Insert a new cell in the new row
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);
  
    // Set the value of the left cell to "New Cell1" and the right cell to "New Cell2"
    leftCell.innerHTML = "New Cell1";
    rightCell.innerHTML = "New Cell2";
  }