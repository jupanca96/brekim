export const sideCart = () => {
    //Abrir carrito desde cta
    // const buttonCart = document.querySelector(".img_cart");  
    
    //   buttonCart.addEventListener('click', function(event){
    //     const allBody = document.querySelector("body"); 
    //     const contentCart = document.querySelector(".main-container-cart_hide");
    //     const sideCartView = document.querySelector(".cart-drawer_hide");       

    //     sideCartView.classList.add('cart-drawer'); 
    //     contentCart.classList.add('main-container-cart');
    //     allBody.style.overflow = 'hidden';
    //     event.stopPropagation();
    //   });

    //Cerrar carrito con flecha
    const arrowClose = document.querySelector(".icon_exit-cart");
    arrowClose.addEventListener('click', function(event){
      const sideCartView = document.querySelector(".cart-drawer");
      const contentCart = document.querySelector(".main-container-cart");
      const allBody = document.querySelector("body");
      if(sideCartView){
        sideCartView.classList.remove('cart-drawer');
        contentCart.classList.remove('main-container-cart');
        allBody.style.overflow = 'scroll';
      }  
      event.stopPropagation();
      });    

    //Cerrar carrito dando clic afuera de el
      document.addEventListener('click', function(event){ 
        const sideCartView = document.querySelector(".cart-drawer");
        const contentCart = document.querySelector(".main-container-cart");
        const allBody = document.querySelector("body");
        if(sideCartView && !sideCartView.contains(event.target)){
          sideCartView.classList.remove('cart-drawer');
          contentCart.classList.remove('main-container-cart');
          allBody.style.overflow = 'scroll';   
        } 
        event.stopPropagation();                   
      });
}