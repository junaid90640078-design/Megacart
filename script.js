const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Product Added To Cart");

  });

});
