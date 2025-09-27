     // ----- Liste des produits -----
    const products = [
      { id: 1, name: "T-shirt Blanc", price: 19.90 },
      { id: 2, name: "Blouse", price: 14.99},
      { id: 3, name: "Pantalon", price: 39.99 },
      { id: 4, name: "veste", price: 59.99},
      { id: 5, name: "Sweat Hoodie", price: 29.99 },
       { id: 6, name: "Emsenble", price: 19.90 },
      { id: 7, name: "jupe boheme", price: 14.99},
      { id: 8, name: "Chemise", price: 39.99 },
      { id: 9, name: "Crop top", price: 59.99},
      { id: 10, name: "maxi skirt", price: 29.99 },
       { id: 11, name: "Polo", price: 19.90 },
      { id: 12, name: "Culotte", price: 14.99},
      { id: 13, name: "Ensemble tailleur", price: 59.99 },
      { id: 14, name: "Chapeau", price: 39.99},
      { id: 15, name: "Sweat Hoodie", price: 29.99 },
        { id: 16, name: "jogging", price: 29.99 },
    ];

    const catalogue = document.getElementById('catalogue');

    // ----- Affichage du catalogue -----
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <span class="price">${product.price.toFixed(2)} €</span>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Ajouter au panier</button>
      `;

      catalogue.appendChild(productCard);
    });

    // ----- Gestion du panier -----
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(productId) {
      const product = products.find(p => p.id === productId);

      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} a été ajouté au panier !`);
    }

    function updateCartCount() {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      document.getElementById('cart-count').textContent = totalItems;
    }

    // Met à jour le compteur au chargement
    updateCartCount();
