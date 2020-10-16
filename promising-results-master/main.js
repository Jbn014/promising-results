//slowMath.add(6, 2) 
//.then((res)=> {
//    console.log(res)
//    return slowMath.multiply(res, 2)
//}).then((res)=> {
//    console.log(res)
//    return slowMath.divide(res, 4)
//}).then((res)=>{
//    console.log(res)
 //   return slowMath.subtract(res, 3)
//}).then((res)=>{
//    console.log(res)
 //   return slowMath.add(res, 98)
//}).then((res)=>{
 //   console.log(res)
 //   return slowMath.remainder(res, 2)
//}).then((res)=>{
 //   console.log(res)
//    return slowMath.remainder(res, 40)
//}).then((res)=>{
//    console.log(res)
//    return slowMath.add(res, 32)
//}).then((res)=>{
//    console.log("The final result is " + res)
//}).catch((console.log("error")))

async function doMath(){
    try{
    let math2 =  await slowMath.add(1, 1)
    console.log(math2)
    math2 = await slowMath.multiply(math2, 2)
    console.log(math2)
    math2 = await slowMath.divide(math2, 4)
    console.log(math2)
    math2 = await slowMath.subtract(math2, 3)
    console.log(math2)
    math2 = await slowMath.add(math2, 98)
    console.log(math2)
    math2 = await slowMath.remainder(math2, 2)
    console.log(math2)
    math2 = await slowMath.multiply(math2, 50)
    console.log(math2)
    math2 = await slowMath.remainder(math2, 40)
    console.log(math2)
    math2 = await slowMath.add(math2, 32)
    console.log(`The final result is ${math2}`)

} catch (error) {
    console.log(error)
}
}
doMath()
