var billBox = document.querySelector(".bill-box")
var cashBox = document.querySelector(".cash-box")
var billButton = document.querySelector(".bill-button")
var cashButton = document.querySelector(".cash-button")
var msg = document.querySelector("#comment")
var noOfNotes = document.querySelectorAll(".no-of-notes")
var resetbtn = document.querySelector(".reset-button")
var hiddenPart = document.querySelector(".hidden")
hiddenPart.style.display = "none"
// let bill = billBox.value;
// let cash = cashBox.value;
billButton.addEventListener('click',function unhide(){
  hiddenPart.style.display = "block"
})
var captionVal = document.querySelector(".caption")
resetbtn.addEventListener('click',function refresh(){
  location.reload();
})
//console.log('Bill Outside - ' , bill)
Notes = ['2000','500','200','50','20','10'];
cashButton.addEventListener('click',function Logic(){
    hidemessage();
    bill = Number(billBox.value)
    cash = Number(cashBox.value)
    // console.log(typeof(bill))
    // console.log(typeof(cash))
    // console.log(bill)
    // console.log(cash)

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