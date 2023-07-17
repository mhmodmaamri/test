// var productCount = 0; // عدد المنتجات في السلة

// function addToCart(amount, elementId) {
//   var cartTextElement = document.getElementById("my_cart1");
//   var currentAmount = parseFloat(cartTextElement.innerHTML.replace("₪", "").replace(",", ""));
//   var newAmount = currentAmount + amount;
//   cartTextElement.innerHTML = newAmount.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
//   var element = document.getElementById(elementId);
//   element.style.display = "block";
  
//   productCount++; // زيادة عدد المنتجات في السلة
//   var countElement = document.getElementById("count1");
//   var countElementt = document.getElementById("count2");
//   countElement.innerHTML = productCount;
//   countElementt.innerHTML = productCount;
// }





// var productCount1 = 0; // عدد المنتجات في السلة 1
// var productCount2 = 0; // عدد المنتجات في السلة 2

// function addToCart(amount, elementId) {
//   var cartTextElement1 = document.getElementById("my_cart1");
//   var currentAmount1 = parseFloat(cartTextElement1.innerHTML.replace("₪", "").replace(",", ""));
//   var newAmount1 = currentAmount1 + amount;
//   cartTextElement1.innerHTML = newAmount1.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
//   var cartTextElement2 = document.getElementById("my_cart2");
//   var currentAmount2 = parseFloat(cartTextElement2.innerHTML.replace("₪", "").replace(",", ""));
//   var newAmount2 = currentAmount2 + amount;
//   cartTextElement2.innerHTML = newAmount2.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
//   productCount1++; // زيادة عدد المنتجات في السلة 1
//   productCount2++; // زيادة عدد المنتجات في السلة 2
  
//   var countElement1 = document.getElementById("count1");
//   var countElement2 = document.getElementById("count2");
  
//   countElement1.innerHTML = productCount1;
//   countElement2.innerHTML = productCount2;
  
//   var element = document.getElementById(elementId);
//   element.style.display = "block";
// }







// var productCount1 = 0; // عدد المنتجات في السلة 1
// var productCount2 = 0; // عدد المنتجات في السلة 2

// function addToCart(amount, elementId, countId) {
//   var cartTextElement = document.getElementById("my_cart2");
//   var currentAmount = parseFloat(cartTextElement.innerHTML.replace("₪", "").replace(",", ""));
//   var newAmount = currentAmount + amount;
//   cartTextElement.innerHTML = newAmount.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
//   var element = document.getElementById(elementId);
//   element.style.display = "block";
  
//   if (countId === "count1") {
//     productCount1++; // زيادة عدد المنتجات في السلة 1
//     var countElement = document.getElementById("count1");
//     countElement.innerHTML = productCount1;
//   } else if (countId === "count2") {
//     productCount2++; // زيادة عدد المنتجات في السلة 2
//     var countElement = document.getElementById("count2");
//     countElement.innerHTML = productCount2;
//   }
// }

// function removeFromCart(amount, elementId, countId) {
//   var cartTextElement = document.getElementById("my_cart2");
//   var currentAmount = parseFloat(cartTextElement.innerHTML.replace("₪", "").replace(",", ""));
//   var newAmount = currentAmount - amount;
//   cartTextElement.innerHTML = newAmount.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
//   var element = document.getElementById(elementId);
//   element.style.display = "none";
  
//   if (countId === "count1") {
//     productCount1--; // تنقيص عدد المنتجات في السلة 1
//     var countElement = document.getElementById("count1");
//     countElement.innerHTML = productCount1;
//   } else if (countId === "count2") {
//     productCount2--; // تنقيص عدد المنتجات في السلة 2
//     var countElement = document.getElementById("count2");
//     countElement.innerHTML = productCount2;
//   }
// }




var productCount1 = 0; // عدد المنتجات في السلة 1
var productCount2 = 0; // عدد المنتجات في السلة 2

function addToCart(amount, elementId, countId) {
  var cartTextElement1 = document.getElementById("my_cart1");
  var currentAmount1 = parseFloat(cartTextElement1.innerHTML.replace("₪", "").replace(",", ""));
  var newAmount1 = currentAmount1 + amount;
  cartTextElement1.innerHTML = newAmount1.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
  var cartTextElement2 = document.getElementById("my_cart2");
  var currentAmount2 = parseFloat(cartTextElement2.innerHTML.replace("₪", "").replace(",", ""));
  var newAmount2 = currentAmount2 + amount;
  cartTextElement2.innerHTML = newAmount2.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
  var element = document.getElementById(elementId);
  element.style.display = "block";
  document.getElementById("prodcut_1").style.display="block";
  document.getElementById("VidewCart").style.display="none";
  
  if (countId === "count1") {
    productCount1++; // زيادة عدد المنتجات في السلة 1
    var countElement1 = document.getElementById("count1");
    countElement1.innerHTML = productCount1;
  } else if (countId === "count2") {
    productCount2++; // زيادة عدد المنتجات في السلة 2
    var countElement2 = document.getElementById("count2");
    countElement2.innerHTML = productCount2;
  }
}

function removeFromCart(amount, elementId, countId) {
  var cartTextElement1 = document.getElementById("my_cart1");
  var currentAmount1 = parseFloat(cartTextElement1.innerHTML.replace("₪", "").replace(",", ""));
  var newAmount1 = currentAmount1 - amount;
  cartTextElement1.innerHTML = newAmount1.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
  var cartTextElement2 = document.getElementById("my_cart2");
  var currentAmount2 = parseFloat(cartTextElement2.innerHTML.replace("₪", "").replace(",", ""));
  var newAmount2 = currentAmount2 - amount;
  cartTextElement2.innerHTML = newAmount2.toLocaleString("en-US", {style: "currency", currency: "ILS"});
  
  var element = document.getElementById(elementId);
  element.style.display = "none";
  
  if (countId === "count1") {
    productCount1--; // تنقيص عدد المنتجات في السلة 1
    var countElement1 = document.getElementById("count1");
    countElement1.innerHTML = productCount1;
  } else if (countId === "count2") {
    productCount2--; // تنقيص عدد المنتجات في السلة 2
    var countElement2 = document.getElementById("count2");
    countElement2.innerHTML = productCount2;
  }
}




function myFunction() {
    var x = document.getElementById("basicDropdownHover1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  // function addToCart() {
  //   setTimeout(function() {
  //     window.location.href = "../shop/cart.html?showHiddenContent=true";
  //   }, 10000);
  // }


  // function addToCart() {
  //   window.location.href = "cart.html?showHiddenContent=true";
  // }


  
