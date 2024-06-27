export const apiCarrito = () => {

    //Abrir carrito desde cta
    const buttonCart = document.querySelector(".img_cart");  
    
    buttonCart.addEventListener('click', async function(e){
        const cart = await obtenerDatosCarrito();
        await updateCartDrawer(cart);
        await openCart(e);
    });

    //Agregar producto al carrito

    const btnAddCart = document.querySelectorAll('.button-add-cart');

    btnAddCart.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const variantId = btn.getAttribute('data-variant2-id');
            
            await addElementCart(variantId)
            const cart = await obtenerDatosCarrito();
            await updateCartDrawer(cart);

            //Open cart
            await openCart(e);
        })
    });

    //Eliminar producto del carrito
}

async function addElementCart(idAgregar){
    let formData = {
        'id': idAgregar,
        'quantity': 1
       };

    await fetch("/cart/add.js", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formData),
      })
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


// async function (){
//     console.log('Agregando o eliminando')
//     await fetch('/cart.js')
//     .then(response => response.json())
//     .then(cart => {
//         console.log(cart);
//         obtenerCantidadDeProductos(cart);
//     })
//     .catch(error => {
//         console.error('Error al obtener el carrito:', error);
//     });
// }

async function updateCartDrawer(cart) {

    //Actualizar cantidad total carrito
    const quantityInCart = cart.item_count;
    const priceInCart = cart.total_price;

    //Eliminar texto empty
    const mainSideCart = document.querySelector('.main-sideCart');
    while(mainSideCart.firstChild){
        mainSideCart.removeChild(mainSideCart.firstChild)
    }

    //Actualziar items
    const items = cart.items;

    items.forEach(item => {
        const contentCardCart = document.createElement('div');
        contentCardCart.classList.add('content-card_cart');

        //Insertar imagen
        const img = document.createElement('img');
        img.src = `${item.featured_image.url}`;
        img.alt = `${item.featured_image.alt}`;
        
        const divImg = document.createElement('div');
        divImg.classList.add('img_product-in-card-cart');

        divImg.appendChild(img);
        contentCardCart.appendChild(divImg);

        //Insertar precio, titulo, titulo variante, cantidad

        const divInfo = document.createElement('div');
        divInfo.classList.add('info_product-in-card-cart');

        const insertPrice = document.createElement('p');
        insertPrice.classList.add('price-item-cart');
        insertPrice.textContent = `$${item.line_price}`;

        const insertTitle = document.createElement('h3');
        insertTitle.textContent = `${item.product_title}`

        const insertVariant = document.createElement('p');
        if(item.variant_title){            
            insertVariant.textContent = `${item.variant_title}`
        }

        divInfo.appendChild(insertPrice);
        divInfo.appendChild(insertTitle);
        if(item.variant_title){
            divInfo.appendChild(insertVariant);
        }
        

        //Div QTY
        const divQtyandDelete = document.createElement('div');
        divQtyandDelete.classList.add('content_qty-remove');

        const insertQty = document.createElement('div');
        insertQty.classList.add('quantity-item-cart');

        const inputQty = document.createElement('input');
        inputQty.type = "number";
        inputQty.value = `${item.quantity}`;
        inputQty.min = "0";
        inputQty.readOnly = true;

        const btnMenos = document.createElement('button');
        btnMenos.classList.add('menos');
        btnMenos.textContent = "-"
        btnMenos.addEventListener('click', async () =>{
            if(inputQty.value > 1){
                inputQty.value = parseInt(inputQty.value) - 1;
                await actualizarCantidad(item.key, inputQty.value);
                return;
            }else{
                return;
            }
        })

        const btnMas = document.createElement('button');
        btnMas.classList.add('mas');
        btnMas.textContent = "+";
        btnMas.addEventListener('click', async () =>{
            inputQty.value = parseInt(inputQty.value) + 1;
            await actualizarCantidad(item.key, inputQty.value);
        })

        insertQty.appendChild(btnMenos);
        insertQty.appendChild(inputQty);
        insertQty.appendChild(btnMas);


        const insertDelete = document.createElement('button');
        insertDelete.addEventListener('click', async function(){
            await eliminarProducto(item.key);
        });
        const imgDelete = document.createElement('img');    
        imgDelete.src = "https://cdn.shopify.com/s/files/1/0866/2479/6980/files/trash.png?v=1717534976";

        insertDelete.appendChild(imgDelete);

        divQtyandDelete.appendChild(insertQty);
        divQtyandDelete.appendChild(insertDelete);
        divInfo.appendChild(divQtyandDelete);

        contentCardCart.appendChild(divInfo);
        mainSideCart.appendChild(contentCardCart);

        //Creamos el footer

        crearFooter(priceInCart)      
    })

        //Agregar texto empty si no hay productos

        if(quantityInCart === 0){
            const textEmptyCart = document.createElement('p');
            textEmptyCart.classList.add('text-empty_cart');
            textEmptyCart.textContent = 'Your cart is empty';
    
            mainSideCart.appendChild(textEmptyCart);
    
            //actualizarPrecioTotalCarrito(cart);
            
            return;
        }
}

function crearFooter(priceInCart){

        //Eliminar footer
        const checkoutContent = document.querySelector('.checkout');
        if(checkoutContent){
            while(checkoutContent.firstChild){
                checkoutContent.removeChild(checkoutContent.firstChild)
            }
        }

        const divSubtotal = document.createElement('div');

        const textSubtotal = document.createElement('p');
        textSubtotal.textContent = "Subtotal";

        const priceSubtotal = document.createElement('p');
        priceSubtotal.classList.add('text_subtotal');
        priceSubtotal.textContent = priceInCart;

        divSubtotal.appendChild(textSubtotal);
        divSubtotal.appendChild(priceSubtotal);

        const btnCheckout = document.createElement('button');
        btnCheckout.type = 'submit';
        btnCheckout.name = 'checkout';
        btnCheckout.textContent = "Checkout";

        checkoutContent.appendChild(divSubtotal);
        checkoutContent.appendChild(btnCheckout);  
}

function actualizarPrecioTotalCarrito(cart){
    const cartPrice = document.querySelector('.text_subtotal');
    const priceInCart = cart.total_price;
    cartPrice.textContent = `$${priceInCart}`;
}

async function actualizarCantidad(idActualizar, qty){
    let data = {
        "id": idActualizar,
        "quantity": qty
       };

       await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        return response.json();
        })
      .catch((error) => {
        console.error(error);
      });
      const cart = await obtenerDatosCarrito();
      await actualizarCantidadTotal(cart);
      actualizarPrecioTotalCarrito(cart);
}

async function eliminarProducto(idModificar){    
    let data = {
        "id": idModificar,
        "quantity": 0
       };
    
    await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        return response.json();
        })
      .catch((error) => {
        console.error(error);
      });

    const cart = await obtenerDatosCarrito();
    await updateCartDrawer(cart);
    await actualizarCantidadTotal(cart);
    actualizarPrecioTotalCarrito(cart);
    if(cart.item_count === 0){
        await quitarCTACheckout(cart);
    };
}

async function openCart(e){
    const allBody = document.querySelector("body"); 
    const contentCart = document.querySelector(".main-container-cart_hide");
    const sideCartView = document.querySelector(".cart-drawer_hide");

    //Verificar cuales productos estan ya en el carrito y actualizar cantidad total
    await fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
        eliminarElementoExisteneteEnCarrito(cart);
        actualizarCantidadTotal(cart);
    })
    .catch(error => {
        console.error('Error al obtener el carrito:', error);
    });
    
    //Agregar funcionalidad el boton de agregar producto desde upsell
    
    const btnAddUpsell = document.querySelectorAll(".add-cart-from-upsell");

    btnAddUpsell.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const variantId = btn.getAttribute('data-id');

            await addElementCart(variantId);
            const cart = await obtenerDatosCarrito();
            await updateCartDrawer(cart);

            await actualizarCantidadTotal(cart);

            const parent = btn.parentElement.parentElement
            if(parent){
                parent.remove();
            } 
        })
    });


    sideCartView.classList.add('cart-drawer'); 
    contentCart.classList.add('main-container-cart');
    allBody.style.overflow = 'hidden';
    e.stopPropagation();
}

function eliminarElementoExisteneteEnCarrito(cart){
    const items = cart.items;

    let ids = [];

    items.forEach(item => {
        ids.push(item.variant_id);
    });

    const elementos = document.querySelectorAll(".content-upsell-carrito");

    elementos.forEach(elemento => {
        const idElemento = Number(elemento.getAttribute('data-id'));

        const existeElemento = ids.some( id => id === idElemento);
        if(existeElemento){
            elemento.remove();
        }       
    })
}

async function obtenerDatosCarrito(){
    return await fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
        return cart;
    })
    .catch(error => {
        console.error('Error al obtener el carrito:', error);
    });
}

async function actualizarCantidadTotal(cart){

    const total = cart.item_count;
    const cartCount = document.querySelector(".cart-count");

    cartCount.textContent = `Your cart (${total})`;
}
async function quitarCTACheckout(cart) {
    console.log("enseguida se muestra el carrito");
    console.log(cart);
    const contentCheckout = document.querySelector('.checkout');
    while(contentCheckout.firstChild){
        contentCheckout.removeChild(contentCheckout.firstChild)
    }
}

//Hago una sola llamada y desde ahi hago las llamadas a las funciones que se ejecutan