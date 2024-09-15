/*
1.找店鋪對應的區部名字
2.找到名字後, 再找他的信箱
3.因為原始data是兩個不同的資料庫檔案,
  會自動做兩次的查找, 所以取名叫double_vlookup(應該吧是這樣的意思吧?)
4.資料庫查詢請自行修改
*/
var 區信箱;
var 部信箱;

function double_vlookup(){

let vname = ss.getSheetByName('(勿動)部區店鋪表');
let vmail = ss.getSheetByName('(勿動)人事資料表');
let vnamelast = vname.getLastRow(); 
let vmaillast = vmail.getLastRow();
let vdata = vname.getRange(1, 1, vnamelast, 6).getValues();

   for(n = 0; n < vdata.length; n++){
      if(vdata[n][0]==店鋪代號){break}
   }
let 部name = vdata[n][5];
let 區name = vdata[n][4];

var 部名字 = 部name;
var 區名字 = 區name;

let vaddress = vmail.getRange(2, 2, vmaillast, 22).getValues();   
  for(m = 0; m < vaddress.length; m++){
     if(vaddress[m][0]==區名字){break}
  }

  for(k = 0; k < vaddress.length; k++){
     if(vaddress[k][0]==部名字){break}
  }

let 區address = vaddress[m][21];
區信箱 = 區address;

let 部address = vaddress[k][21];
部信箱 = 部address;

}


