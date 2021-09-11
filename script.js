var billBox = document.querySelector(".bill-box")
var cashBox = document.querySelector(".cash-box")
var billButton = document.querySelector(".bill-button")
var cashButton = document.querySelector(".cash-button")
var msg = document.querySelector("#comment")
var noOfNotes = document.querySelectorAll(".no-of-notes")
//var bill = billBox.value;
//var cash = cashBox.value;
Notes = ['2000','500','200','50','20','10'];
cashButton.addEventListener('click',function Logic(){
    hidemessage();
    console.log(billBox.value)
    console.log(cashBox.value)
  if(billBox.value > cashBox.value){
    message = "Error: Cash amount should be greater than or equal to Bill Amount";
    display(message);
  }  
  else{
    var returnAmt = cashBox.value - billBox.value;
    if(returnAmt == 0){
      message = "We are good! :)"
      display(message);
    }
    for(var i = 0; i<Notes.length; i++){
      var val = Math.trunc(returnAmt/Notes[i]);
      returnAmt = returnAmt % Notes[i]; 
      console.log("val: " + val + " returnAmt: " + returnAmt )
      noOfNotes[i].innerText =  val
    }
      
  }
});
function display(message){
    msg.innerText = message;
    msg.style.display = "block";
}
function hidemessage(){
    msg.style.display = "none";
}