function leap(){
    let year=2020;
    if(year%4==0 && year%100!==0){
        console.log("its a lep year");
    }
    else if(year%400==0 && year%100!==0){
        console.log("its a lep year");
    }
    else{
        console.log("its not a leap year")
    }
}
module.export=leap;