function word(a){

var space=""


for(i=a.length-1;i>=0;i--){
    space=space+a[i]
}
if(a==space){
    console.log("it is");
    
}else{console.log("it is not");
}
}
word("madam")