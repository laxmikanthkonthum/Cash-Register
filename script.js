var billBox = document.querySelector(".bill-box")
var cashBox = document.querySelector(".cash-box")
var billButton = document.querySelector(".bill-button")
var cashButton = document.querySelector(".cash-button")
var msg = document.querySelector("#comment")
//var bill = billBox.value;
//var cash = cashBox.value;
cashButton.addEventListener('click',function Logic(){
    hidemessage();
    console.log(billBox.value)
    console.log(cashBox.value)
  if(billBox.value > cashBox.value){
    message = "Cash amount should be greater than or equal to Bill";
    display(message);
  }  
  else{
      
  }
});
function display(message){
    msg.innerText = message;
    msg.style.display = "block";
}
function hidemessage(){
    msg.style.display = "none";
}