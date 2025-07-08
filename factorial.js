function fact(){
    let num=10;
    let result = 1;
    for(let i = 2;i<num;i++){
        result = result * i;
    }
    console.log("the factorial is:",result);
}
module.export = fact;