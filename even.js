function evenlist(){
    let arr=[1,99,78,22,42,60,31,53,49];
    for(let i=2;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
}
module.exports = evenlist;