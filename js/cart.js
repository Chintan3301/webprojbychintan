let carts = document.querySelectorAll('.add-cart');


for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click' , () =>{
        cartNumbers()    
    })
}



function onLoadCartNums(){
    let productNumbers = localStorage.getItem('cartNumbers')

    
    if (productNumbers) {
        document.querySelector('.cart-added span').textContent = productNumbers;

    }
}



function cartNumbers(){
    
    let productNumbers = localStorage.getItem('cartNumbers');
      productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers' , productNumbers + 1)
        document.querySelector('.cart-added span').textContent = productNumbers + 1

    } else{
        localStorage.setItem('cartNumbers' , 1)
        document.querySelector('.cart-added span').textContent = 1;
    }
}

onLoadCartNums()


