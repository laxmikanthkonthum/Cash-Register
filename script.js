var billBox = document.querySelector(".bill-box")
var cashBox = document.querySelector(".cash-box")
var billButton = document.querySelector(".bill-button")
var cashButton = document.querySelector(".cash-button")
var msg = document.querySelector("#comment")
var noOfNotes = document.querySelectorAll(".no-of-notes")
var resetbtn = document.querySelector(".reset-button")
var hiddenPart = document.querySelector(".hidden")
var billValidation = document.getElementById("bill-validation");

hiddenPart.style.display = "none"

billButton.addEventListener('click',function unhide(){
  bill = Number(billBox.value);
  console.log(bill)
  if (bill < 1) {
    billValidation.innerText= "Please enter a bill value greater than 1";
  }
  else{
    billValidation.style.display = "none"
    hiddenPart.style.display = "block";
    billButton.disabled = "true"
  }
})
var captionVal = document.querySelector(".caption")
resetbtn.addEventListener('click',function refresh(){
  location.reload();
})

Notes = ['2000','500','200','50','20','10'];
cashButton.addEventListener('click',function Logic(){
    hidemessage();
    bill = Number(billBox.value);
    cash = Number(cashBox.value);

    console.log(bill,typeof bill)

  if(bill > cash){
    message = "Error: Cash amount should be greater than or equal to Bill Amount";
    display(message);
  }  
  else{
    var returnAmt = cash - bill;

    captionVal.innerText = "Amount to be returned is: " + returnAmt

    if(returnAmt == 0){
      message = "We are good! :)"
      display(message);
    }
    for(var i = 0; i<Notes.length; i++){
      var val = Math.trunc(returnAmt/Notes[i]);
      returnAmt = returnAmt % Notes[i]; 
      //console.log("val: " + val + " returnAmt: " + returnAmt )
      if(val != 0){
      noOfNotes[i].innerText =  val
    }
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