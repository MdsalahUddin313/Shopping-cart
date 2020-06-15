
const incItem1 = document.getElementById("incrementItem1");
incItem1.addEventListener("click", function(){
   itemQuantityHandler("quantityOfItem1" , "priceOfItem1" , "increment");
});

const incItem2 = document.getElementById("incrementItem2");
incItem2.addEventListener("click", function(){
   itemQuantityHandler("quantityOfItem2" , "priceOfItem2" , "increment");
});

const decItem1 = document.getElementById("decrementItem1");
decItem1.addEventListener("click", function(){
    itemQuantityHandler("quantityOfItem1" , "priceOfItem1" , "decrement");
})

const decItem2 = document.getElementById("decrementItem2");
decItem2.addEventListener("click", function(){
    itemQuantityHandler("quantityOfItem2" , "priceOfItem2" , "decrement");
})

const itemDel1 = document.getElementById("removeItem1");
itemDel1.addEventListener("click", function(){
   RemoveItemFromCart("item1", "priceOfItem1")
}) 

const itemDel2 = document.getElementById("removeItem2");
itemDel2.addEventListener("click", function(){
   RemoveItemFromCart("item2", "priceOfItem2")
})


function itemQuantityHandler(itemQuantityId, itemPriceId , type){
   const itemQuantity = document.getElementById(itemQuantityId).value;
   const newItemQuantity = type == "increment" ? parseFloat(itemQuantity) + 1 : parseFloat(itemQuantity) - 1 ;
   const itemPrice = document.getElementById(itemPriceId).innerText;
   var itemPriceAmount = parseFloat(itemPrice);
   //Original Product Price
   const itemOriginalPrice = itemPriceAmount / itemQuantity;
   // less then 1 Disable 
   if(newItemQuantity <= 1){
      document.getElementById(itemQuantityId).value = 1;
      document.getElementById(itemPriceId).innerText = itemOriginalPrice;
   }else{
      document.getElementById(itemQuantityId).value = newItemQuantity;
      const updatedPrice = itemOriginalPrice * newItemQuantity;
      document.getElementById(itemPriceId).innerText = updatedPrice;

  }
  updateTotal();
}


function updateTotal(){
   const priceOfItem1 = document.getElementById("priceOfItem1").innerText;
   const priceOfItem2 = document.getElementById("priceOfItem2").innerText;
   const getSubTotal = parseFloat(priceOfItem1) + parseFloat(priceOfItem2);
   document.getElementById('subtotal').innerText = getSubTotal;
   // Adding tax(pore add korbo)
   const tax = getSubTotal * 10 / 100 ;
   document.getElementById('tax').innerText =  tax;
   document.getElementById('total').innerText = getSubTotal + tax;

    // Remove Checkout Button When Total amount is 0(pore add korbo)
    if (getSubTotal == 0) {
        const checkOutBtn = document.getElementById("checkoutbtn");
        checkOutBtn.style.display = "none";
    }
}
function RemoveItemFromCart(itemId, ItemPriceId){
   document.getElementById(itemId).style.display= "none";
   document.getElementById(ItemPriceId).innerText = 0;
   updateTotal();
}
const checkOutBtn = document.getElementById("checkoutbtn");
checkOutBtn.addEventListener("click", function(){
   document.getElementById("confirmation").classList.remove("d-none");
   document.getElementById("shoppingcart").classList.add("d-none");
})
updateTotal();