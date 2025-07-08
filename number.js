function largest(){
    let x=10;
    let y=20;
    let z=30;
    if(x>y && x>z){
        console.log("X is largest");
    }
    else if(y>x && y>z){
        console.log("Y is largest");
    }
    else{
        console.log("Z is largest");
    }
}
module.export = largest;