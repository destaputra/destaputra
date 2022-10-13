function nilai(num){
    document.formisi.hasil.value =document.formisi.hasil.value+ num;
}
function AC (){
    document.formisi.hasil.value = "";
}
function hapus (){
    document.formisi.hasil.value = document.formisi.hasil.value.substring(0, document.formisi.hasil.value.length -1);
}
function dengan (){
    document.formisi.hasil.value =eval (document.formisi.hasil.value);
}