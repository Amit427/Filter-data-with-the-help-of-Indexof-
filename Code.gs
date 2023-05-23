var ss = SpreadsheetApp.getActive()
var mainSheet = ss.getSheetByName('Dr. RAMESH DASARI');
var filterSheet = ss.getSheetByName('Has to be filtered')
var filterOutSheet = ss.getSheetByName('Filter Out Data')

var filterList = filterSheet.getRange(2,1,filterSheet.getLastRow()-1,1).getValues().flat()


var allListItem = []
var rowNum = []

function findDescription() {

var lastCol = mainSheet.getLastColumn()

for(i=1;i<=lastCol;i++){
var des = mainSheet.getRange(4,i,1,1).getValue()
if(des == "Item Description" ){
// Logger.log(i)
//  const cellAddress = mainSheet.getRange(4, i).getA1Notation();
//         var cellsWithText = [].push(cellAddress);
// Logger.log(cellAddress)

var data = mainSheet.getRange(5,1,mainSheet.getLastRow(),15).getValues()

for(j=1;j<=mainSheet.getLastRow()-4;j++){

var listOnMain = data[j][i-1]
allListItem.push(data[j][i-1])

}

var listLength = allListItem.length
// Logger.log(allListItem.length)




for(k=0;k<filterList.length;k++){

for(l=0;l<listLength;l++){

if(filterList[k] == allListItem[l]){

// Logger.log(filterList[k]  +"        " +   allListItem[l]     ) 
rowNum.unshift(l+6)


}}}

rowNum.sort(function(a, b) {
    return b - a;
  });

// Logger.log(rowNum)

for(n=0;n<rowNum.length;n++){

// Logger.log(rowNum[n])
var row = rowNum[n]
mainSheet.deleteRow(row)

}
filterOutSheet.getRange(filterOutSheet.getLastRow()+1,1,data.length,data[0].length).setValues(data)
}




}
}
