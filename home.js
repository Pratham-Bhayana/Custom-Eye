  gsap.registerPlugin(ScrollTrigger);


  const textElement = document.getElementById("animated-text");


  if (textElement) {
 
    const text = textElement.textContent;
    textElement.innerHTML = "";


    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      textElement.appendChild(span);
    });


    gsap.from("#animated-text span", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
  }


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }


  setInterval(() => {
    plusSlides(1);
  }, 3000); 


  gsap.from(".ban-1",{
    scrollTrigger(){
        trigger : ".ban"},

    x: -100,
    y :-300,
    duration :1,
    
  })

  gsap.from(".details h2", {
    scrollTrigger: {
      trigger: "h2",    
    start: "top bottom"
    },
    opacity: 0,
    delay: 1,
    duration: 1
  });




  gsap.from(".items-card", {
    scrollTrigger: {
      trigger: ".after-horizontal", 
      start: "top 80%", 
      end: "bottom 20%", 
      scrub: false, 
    },
    x: -200,  
    opacity: 0,  
    duration: 1.5, 
    stagger: 0.3,  
    ease: "power2.out"  
  });


  
  const products = [
    {
        imgSrc: "/images/item-img-2.png",
        brand: "Bewakoof",
        name: "Women's Red Believe Cat Graphic",
        price: "$39"
    },
    {
        imgSrc: "/images/item-img-3.png",
        brand: "Adidas",
        name: "Men's Blue T-shirt",
        price: "$28"
    }
  ];

  
  function addProductCard(product) {
    const productContainer = document.querySelector('.items'); 


    const productCard = document.createElement('div');
    productCard.classList.add('items-card');


    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.classList.add('item-image');
    productCard.appendChild(img);


    const infoDet = document.createElement('div');
    infoDet.classList.add('info-det');
    

    const brand = document.createElement('p');
    brand.classList.add('brand');
    brand.textContent = product.brand;
    infoDet.appendChild(brand);
    

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = product.name;
    infoDet.appendChild(name);
    

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = product.price;
    infoDet.appendChild(price);

    const button = document.createElement('button');
    button.classList.add('buy');
    button.textContent = "ADD TO CART";
    infoDet.appendChild(button);


    productCard.appendChild(infoDet);


    productContainer.appendChild(productCard);


    gsap.from(productCard, {
        scrollTrigger: {
            trigger: ".after-horizontal", 
            start: "top 80%", 
            end: "bottom 20%", 
            scrub: false, 
        },
        x: -200,  
        opacity: 0,  
        duration: 1.5,  
        stagger: 0.3,   
        ease: "power2.out"  
    });
  }


  function addProductCards() {
    products.forEach(product => {
        addProductCard(product);
    });
  }


  addProductCards();


  function addNewProduct(imgSrc, brand, name, price) {
    const newProduct = {
        imgSrc: imgSrc,
        brand: brand,
        name: name,
        price: price
    };

    addProductCard(newProduct);
  }



    addNewProduct("/images/item-img-4.png", "Nike", "Women's Black  T-shirt", "$50");


    function addNewProduct(imgSrc, brand, name, price) {
      const newProduct = {
          imgSrc: imgSrc,
          brand: brand,
          name: name,
          price: price
      };
    
      addProductCard(newProduct); 
    }

    addNewProduct("/images/item-img-5.png" , "Bewakoof" , "Men's Red Moon Rider Graphic Printed Oversized T-shirt" , "$12" , "" ,) ; 



    addNewProduct("/images/item-img-6.png" , "My anime" , "Men's Shanks Printed Oversized T-shirt" , "$12" , "" ,) 

    addNewProduct("/images/item-img-7.png" , "The whore" , "Men's Manga Edition Oversized T-shirt" , "$18" , "" ,)
    
    addNewProduct("/images/item-img-8.png" , "My anime" , "Men's Blue anime Printed Oversized T-shirt" , "$12" , "" ,) ;



  let cart = [];


  function addToCart(product) {

      const existingProduct = cart.find(item => item.name === product.name);
      
      if (existingProduct) {

          existingProduct.quantity += 1;
      } else {

          cart.push(product);
      }


      updateCartButton();
      updateCartDisplay();
  }


const addToCartButtons = document.querySelectorAll('.buy');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.items-card');
        const imgSrc = productCard.querySelector('.item-image').src;
        const brand = productCard.querySelector('.brand').textContent;
        const name = productCard.querySelector('.name').textContent;
        const price = productCard.querySelector('.price').textContent;


        const sizeSelect = productCard.querySelector('#size-select');
        if (sizeSelect) {
            const selectedSize = sizeSelect.value;
            const product = {
                imgSrc,
                brand,
                name,
                price,
                size: selectedSize,
                quantity: 1
            };
            addToCart(product);
        } else {

          const sizeModal = document.getElementById('size-modal');
          const sizeInput = document.getElementById('size-input');
          const confirmSizeButton = document.getElementById('confirm-size');
          const closeModalButton = document.getElementById('close-modal');
          
          const addToCartButtons = document.querySelectorAll('.buy');

          addToCartButtons.forEach((button) => {
              button.addEventListener('click', () => {
                  const productCard = button.closest('.items-card');
                  const imgSrc = productCard.querySelector('.item-image').src;
                  const brand = productCard.querySelector('.brand').textContent;
                  const name = productCard.querySelector('.name').textContent;
                  const price = productCard.querySelector('.price').textContent;
          
                
                  const sizeModal = document.getElementById('size-modal');
                  sizeModal.style.display = 'block';
          

                  document.getElementById('confirm-size').onclick = () => {
                      const sizeInput = document.getElementById('size-input').value;
                      if (sizeInput) {
                          const product = {
                              imgSrc,
                              brand,
                              name,
                              price,
                              size: sizeInput,
                              quantity: 1
                          };
                          addToCart(product);
                          sizeModal.style.display = 'none'; 
                      }
                  };
              });
          });
          
          
          confirmSizeButton.addEventListener('click', () => {
              const sizePrompt = sizeInput.value.trim();
              if (sizePrompt) {
                  const product = {
                      imgSrc,
                      brand,
                      name,
                      price,
                      size: sizePrompt,
                      quantity: 1
                  };
                  addToCart(product);
                  sizeModal.style.display = 'none';
                  sizeInput.value = ''; 
              }
          });
          
          closeModalButton.addEventListener('click', () => {
              sizeModal.style.display = 'none';
          });
          

          window.addEventListener('click', (event) => {
              if (event.target === sizeModal) {
                  sizeModal.style.display = 'none';
              }
          });
          
        }
    });
});


document.getElementById('add-to-cart-from-view').addEventListener('click', () => {
  const sizeSelect = document.getElementById('size-select');
  const selectedSize = sizeSelect.value; 

  const productToAdd = {
      imgSrc: document.getElementById('view-product-image').src,
      brand: document.getElementById('view-product-brand').textContent,
      name: document.getElementById('view-product-name').textContent,
      price: document.getElementById('view-product-price').textContent,
      size: selectedSize, 
      quantity: 1
  };
  addToCart(productToAdd); 
});





  const cartSection = document.getElementById('cart-section');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');

  cartToggleBtn.addEventListener('click', () => {

      if (cartSection.style.display === "none") {
          cartSection.style.display = "block"; 
      } else {
          cartSection.style.display = "none";   
      }
  });


  function updateCartButton() {
      const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
      cartToggleBtn.innerHTML = `<img class="img-cart" src="/images/cart.png"> (${totalItems})`;
  }

  function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" class="cart-item-image" style="width: 50px; height: 50px;"/>
            <div class="cart-item-details">
                <p>${item.brand} - ${item.name}</p>
                <p>Size: ${item.size} | Price: ${item.price} | Quantity: ${item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        
        gsap.fromTo(cartItem, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.5 });

        const priceNumber = parseFloat(item.price.replace('$', ''));
        totalPrice += priceNumber * item.quantity;
    });

    totalItemsElement.textContent = cart.reduce((total, product) => total + product.quantity, 0);
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.disabled = cart.length === 0;
}






  function addNewProduct(imgSrc, brand, name, price) {
      const newProduct = {
          imgSrc: imgSrc,
          brand: brand,
          name: name,
          price: price,
          quantity: 1
      };

      addProductCard(newProduct); 
  }



  gsap.registerPlugin(ScrollTrigger);

  const productView = document.getElementById('product-view');
  const closeView = document.getElementById('close-view');

  function openProductView(product) {

    document.getElementById('view-product-image').src = product.imgSrc;
    document.getElementById('view-product-name').textContent = product.name;
    document.getElementById('view-product-brand').textContent = product.brand;
    document.getElementById('view-product-price').textContent = product.price;


    productView.style.display = 'flex';


    gsap.fromTo(document.querySelector('.product-view-content'), 
                { opacity: 0, y: 100, scale: 0.9 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" });


    const productImage = document.getElementById('view-product-image');
    gsap.fromTo(productImage, 
                { opacity: 0, skewY: 10, scale: 1.1 }, 
                { opacity: 1, skewY: 0, scale: 1, duration: 0.5, ease: "power2.out" });


    gsap.from(".product-view-content h2, .product-view-content p", {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.1,
        ease: "bounce.out"
    });
  }

  closeView.addEventListener('click', () => {
    gsap.to(document.querySelector('.product-view-content'), 
            { opacity: 0, y: -50, scale: 0.9, duration: 0.3, ease: "power2.out", onComplete: () => {
                productView.style.display = 'none';  
            }});
    

    gsap.to(document.getElementById('view-product-image'), 
            { opacity: 0, skewY: -10, scale: 0.9, duration: 0.3, ease: "power2.out" });
  });


  window.addEventListener('click', (event) => {
    if (event.target === productView) {
        gsap.to(document.querySelector('.product-view-content'), 
                { opacity: 0, y: -50, scale: 0.9, duration: 0.3, ease: "power2.out", onComplete: () => {
                    productView.style.display = 'none'; 
                }});


        gsap.to(document.getElementById('view-product-image'), 
                { opacity: 0, skewY: -10, scale: 0.9, duration: 0.3, ease: "power2.out" });
    }
  });



  const productCards = document.querySelectorAll('.items-card');

  productCards.forEach(card => {
      card.addEventListener('click', () => {
          const imgSrc = card.querySelector('.item-image').src;
          const brand = card.querySelector('.brand').textContent;
          const name = card.querySelector('.name').textContent;
          const price = card.querySelector('.price').textContent;

          const product = { imgSrc, brand, name, price };
          openProductView(product);  
      });
  });


  closeView.addEventListener('click', () => {
      gsap.to(document.querySelector('.product-view-content'), 
              { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
                  productView.style.display = 'none';  
              }});
  });


  window.addEventListener('click', (event) => {
      if (event.target === productView) {
          gsap.to(document.querySelector('.product-view-content'), 
                  { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
                      productView.style.display = 'none';  
                  }});
      }
  });





  document.getElementById('add-to-cart-from-view').addEventListener('click', () => {
    const productToAdd = {
        imgSrc: document.getElementById('view-product-image').src,
        brand: document.getElementById('view-product-brand').textContent,
        name: document.getElementById('view-product-name').textContent,
        price: document.getElementById('view-product-price').textContent,
        quantity: 1
    };
    addToCart(productToAdd);
  });

  document.getElementById('buy-now-from-view').addEventListener('click', () => {

    alert('Redirecting to checkout...');
  });

  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
      
        window.alert("redicrect");
    } else {
        alert('Your cart is empty!');
    }
  });


  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; 

    if (query) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.brand.toLowerCase().includes(query)
        );

        console.log('Filtered Products:', filteredProducts);

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.brand} - ${product.name}`;
                li.addEventListener('click', () => {
                    openProductView(product); 
                    searchInput.value = ''; 
                    searchResults.innerHTML = ''; 
                });
                searchResults.appendChild(li);
            });
            searchResults.style.display = 'block'; 
        } else {
            searchResults.style.display = 'none'; 
        }
    } else {
        searchResults.style.display = 'none'; 
    }
});


