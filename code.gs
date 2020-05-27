/**
* Marks the last-written-in row with a "last revision" date
*/
function lastEdit(e) {  
  var sheet = e.source.getActiveSheet();
  var lastColumn = sheet.getLastColumn();
  var lastRow = sheet.getLastRow();
  
  var range = sheet.getRange(lastRow, lastColumn - 5);
  range.setValue("Revised: " + getCurrentDate());
  range.setHorizontalAlignment("normal");
}

/**
* Get's the current date in a lovely format.
* 
* Thanks and credit for this function go to : http://stackoverflow.com/a/12409344/5432315
*/
function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  }
  var today = mm+'/'+dd+'/'+yyyy;
  return today; 
}
