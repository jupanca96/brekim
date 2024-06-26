export const apiCarrito = () => {

    //Abrir carrito desde cta
    const buttonCart = document.querySelector(".img_cart");  
    
    buttonCart.addEventListener('click', async function(e){
        await updateCartDrawer();
        openCart(e);
    });

    //Agregar producto al carrito

    const btnAddCart = document.querySelectorAll('.button-add-cart');

    btnAddCart.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const variantId = btn.getAttribute('data-variant2-id');
            
            await addElementCart(variantId)

            await updateCartDrawer();

            //Open cart
            openCart(e);
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


async function updateCartDrawer(){
    console.log('Agregando o eliminando')
    await fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
        console.log(cart);
        obtenerCantidadDeProductos(cart);
    })
    .catch(error => {
        console.error('Error al obtener el carrito:', error);
    });
}

function obtenerCantidadDeProductos(cart) {

    //Actualizar cantidad total carrito
    const cartCount = document.querySelector('.cart-count');
    const quantityInCart = cart.item_count;
    cartCount.textContent = `You cart (${quantityInCart})`;

    //Eliminar texto empty
    const mainSideCart = document.querySelector('.main-sideCart');
    while(mainSideCart.firstChild){
        mainSideCart.removeChild(mainSideCart.firstChild)
    }

    //Agregar texto empty si no hay productos

    if(quantityInCart === 0){
        const textEmptyCart = document.createElement('p');
        textEmptyCart.classList.add('text-empty_cart');
        textEmptyCart.textContent = 'Your cart is empty';

        mainSideCart.appendChild(textEmptyCart);

        actualizarPrecioTotalCarrito(cart);
        
        return;
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
        }else{
            console.log("No es variante1");
        }

        divInfo.appendChild(insertPrice);
        divInfo.appendChild(insertTitle);
        if(item.variant_title){
            divInfo.appendChild(insertVariant);
        }else{
            console.log("No es variante2");
        }
        

        //Div QTY
        const divQtyandDelete = document.createElement('div');
        divQtyandDelete.classList.add('content_qty-remove');

        const insertQty = document.createElement('p');
        insertQty.classList.add('quantity-item-cart');
        insertQty.textContent = `Selected quantity: ${item.quantity}`;


        const insertDelete = document.createElement('button');
        insertDelete.addEventListener('click', function(){
            eliminarProducto(item.key);
            //updateCartDrawer();
        });
        const imgDelete = document.createElement('img');    
        imgDelete.src = "https://cdn.shopify.com/s/files/1/0866/2479/6980/files/trash.png?v=1717534976";

        insertDelete.appendChild(imgDelete);

        divQtyandDelete.appendChild(insertQty);
        divQtyandDelete.appendChild(insertDelete);
        divInfo.appendChild(divQtyandDelete);

        contentCardCart.appendChild(divInfo);
        mainSideCart.appendChild(contentCardCart);
        
    })

    //Actualizar precio total carrito
    actualizarPrecioTotalCarrito(cart);
}

function actualizarPrecioTotalCarrito(cart){
    console.log('actualizando precio total');
    const cartPrice = document.querySelector('.text_subtotal');
    const priceInCart = cart.total_price;
    cartPrice.textContent = `$${priceInCart}`;
}

async function eliminarProducto(idModificar){
    console.log(idModificar);
    
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
        console.log('Exito')
        return response.json();
        })
      .catch((error) => {
        console.error(error);
      });

    await updateCartDrawer()
}

function openCart(e){
    const allBody = document.querySelector("body"); 
    const contentCart = document.querySelector(".main-container-cart_hide");
    const sideCartView = document.querySelector(".cart-drawer_hide");       

    sideCartView.classList.add('cart-drawer'); 
    contentCart.classList.add('main-container-cart');
    allBody.style.overflow = 'hidden';
    e.stopPropagation();
}




