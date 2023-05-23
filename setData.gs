function byIndex() {

var lastCol = mainSheet.getLastColumn()

for(i=1;i<=lastCol;i++){
var des = mainSheet.getRange(4,i,1,1).getValue()
if(des == "Item Description" ){
Logger.log(i)

var filterList = filterSheet.getRange(2,1,filterSheet.getLastRow()-1,1).getValues().flat()

var data = mainSheet.getRange(1,1,mainSheet.getLastRow(),mainSheet.getLastColumn()).getValues()
// Logger.log(filterList)
// Logger.log(data)

var newData = []

data.forEach(d=>{

  if(filterList.indexOf(d[i-1])==-1){
      newData.push(d);

  }
})
  Logger.log(newData)

filterOutSheet.getRange(filterOutSheet.getLastRow()+1,1,newData.length,newData[0].length).setValues(newData)

mainSheet.clear()






}}}