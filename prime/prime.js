function prime(a) {
var result="yup"
for(i=2;i<a;i++){
    if(a%i==0){
        result="nop"

    }   
}
if(a==1){
    result="nop"
    
}
console.log(result);

}
prime(7)