const arr =  ["Apple", "Rose", "Summer"]
//for - in => indices will be fetched
//=> if you need to get the element then you need to do operation in array e.g arr[idx]

for (let idx in arr){
   //console. log(idx, arr[idx])
   }
   //for - of => entire element will be extracted

for (let elem of arr){
  //console.log(elem)

}

const obj ={
    fruit:"apple",
    flower: "rose",
    season : "summer"
}


for(var key of Object.keys(obj) ){
   // console.log(obj[key])
}
for(var key in obj ){
    console.log(obj)
}