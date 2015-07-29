/*
 * Convenience function to get the currently active sheet
 */
function sheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function valueFromCell(cell) {
  var rowNdx = cell.getRowIndex();
  var colNdx = cell.getColumnIndex();
  return sheet().getRange(rowNdx, colNdx, 1, 1).getValue();
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CodeSchool')
      .addItem('Hello World!', 'showDialog')
      .addItem('Show Selected Value', 'showSelected')
      .addToUi();
}

function showDialog() {
  Logger.log("saying hello...");
  SpreadsheetApp.getUi().alert('Hello World!!');
}

function DOUBLE_IT(input) {
  return input * 2;
}

function showSelected() {
  var mycell = sheet().getActiveCell();
  Browser.msgBox("vfc:" + valueFromCell(mycell));
}
