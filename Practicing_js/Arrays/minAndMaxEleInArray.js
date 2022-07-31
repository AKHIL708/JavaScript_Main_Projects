console.log("printing the min and max element in an array")
let NumList = [0,1,2,3,4,5,6,7,10];
let max = NumList[0]
let min = NumList[0]
for(let i=0; i<NumList.length; i++){
    console.log(NumList[i])
    if(NumList[i]>max){max = NumList[i]}
    if(NumList[i]<min){min = NumList[i]}
}
console.log("min value :",min)
console.log("max value :",max)


// explination : In the above code in line number 3 and 4 we are simply taking two element in an
// array and simply we are comparing that element with the values present in the whole array which is 
// NumList 



let demo = []
NumList.map((val)=>{
    console.log(val)
    demo.unshift(val)
})
console.log(demo)