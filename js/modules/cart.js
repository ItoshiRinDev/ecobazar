export const Cart = {
    item: {},

    init() {

        Cart.item = JSON.parse(localStorage.getItem('cart')) || {};
        Cart.render();
        document.addEventListener('click', event => {

            const plusBtn = event.target.closest('.js-plus')
            const minusBtn = event.target.closest('.js-minus')

            if (plusBtn) {
                Cart.plusCount(plusBtn.dataset.sku, 1)
            } else if (minusBtn) {
                Cart.minusCount(minusBtn.dataset.sku, -1)
            }
        })

        const addButtons = document.querySelectorAll('.add')
        addButtons.forEach(btn => {
            btn.addEventListener('click', function (event) {
                const sku = btn.dataset.sku;
                const name = btn.dataset.name;
                const image = btn.dataset.image;
                const price = Number(btn.dataset.price);
                const productItem = { sku, name, image, price, qty: 1 };

                if (Cart.item[sku]) {
                    Cart.item[sku].qty += 1;
                } else {
                    Cart.item[sku] = productItem;
                }
                localStorage.setItem('cart', JSON.stringify(Cart.item));
                Cart.render()
            })
        })
    },

    plusCount(sku) {
        if (!Cart.item[sku]) return;
        Cart.item[sku].qty += 1;
        localStorage.setItem('cart', JSON.stringify(Cart.item));
        Cart.render();
    },

    minusCount(sku) {
        if (!Cart.item[sku]) return;
        Cart.item[sku].qty -= 1;
        if (Cart.item[sku].qty <= 0) {
            delete Cart.item[sku];
        }
        localStorage.setItem('cart', JSON.stringify(Cart.item));
        Cart.render();
    },

    getItemTotal() {
        let total = 0;
        for (const key in Cart.item) {
            const product = Cart.item[key];
            total += product.qty;
        }
        return total;
    },


    getTotal() {
        let totalPrice = 0;
        for (const key in Cart.item) {
            const product = Cart.item[key];
            totalPrice += product.price * product.qty;
        }
        return totalPrice;
    },


    render() {
        const cartTotal = document.querySelectorAll('.js-cart-total');
        const cartCount = document.querySelector('.js-cart-count');
        const cartList = document.querySelector('.js-cart-list');




        const isEmpty = Object.keys(Cart.item).length;
        const totalQty = Cart.getItemTotal()
        const totalPrice = Cart.getTotal()


        if (cartCount) {
            cartCount.textContent = totalQty;
        }

        cartTotal.forEach(total => {
            total.textContent = `$${totalPrice.toFixed(2)}`;
        });



        if (cartList) {
            if (isEmpty === 0) {
                cartList.innerHTML = '<p class="cart-empty-text">basket is empty.</p>';
                return;
            }

            cartList.innerHTML = Object.values(Cart.item).map(product => `
                <div class="cart-item" data-sku="${product.name}">
                    <img src="${product.image}" alt="${product.name}" class="cart-item__img">
                    <div class="cart-item__info">
                        <span class="cart-item__title">${product.name}</span>
                        
                    </div>
                    <span class="cart-item__total">$${(product.price * product.qty).toFixed(2)}</span>
                    <div class="cart-item__quantity">
                <button type="button" class="cart-btn js-minus" data-sku="${product.sku}">-</button>
                <span class="cart-count-val">${product.qty}</span>
                <button type="button" class="cart-btn js-plus" data-sku="${product.sku}">+</button>
            </div>
                </div>
            `).join('');

        }

    }


}
