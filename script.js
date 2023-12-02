function appendValue(value){
    document.getElementById('dis').value +=
    value;

}  function clearDisplay(){
    document.getElementById('dis').value = '';
}
function calculate() {
 try {
     document.getElementById('dis').value =
     eval(document.getElementById('dis').value);
 }
 catch (error) {
     document.getElementById('dis').value = 'error';
 }
}
