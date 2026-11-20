export const Popular = {
    allProducts: [],

    async init() {
        const grid = document.querySelector('.pp-section .pp-grid');
        if (!grid) return;

        try {
            const res = await fetch('./data/products.json')
            this.allProducts = await res.json()
            this.renderGrid(this.allProducts)
        } catch (e) {
          console.error('Ошибка загрузки:', e)
        }
    },

    renderGrid(products) {
        const grid = document.querySelector('.pp-section .pp-grid');
        if (!grid) return;

       if (products.length === 0) {
            grid.innerHTML = '<p style="padding: 20px;">Товары не найдены</p>'
            return;
        }
         grid.innerHTML = products.map(p => this.renderCard(p)).join('');
    },

    renderCard(p) {
        return `
        <article class="pp-card">
            <div class="pp-img-box">
                ${p.sale ? '<span class="pp-sale-badge" data-i18n="sale_50">Sale 50%</span>' : ''}
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="pp-info">
                <h3 class="pp-title" data-i18n="prod_${p.sku}">${p.name}</h3>
                <div class="pp-price-row">
                    <span class="pp-price">$${p.price.toFixed(2)}</span>
                    ${p.oldPrice ? `<span class="pp-old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="pp-bottom">
                    <div class="pp-rating" style="--rating: ${p.rating};"></div>
                    <button type="button" class="pp-cart-btn add" 
                        data-sku="${p.sku}" 
                        data-name="${p.name}" 
                        data-image="${p.image}" 
                        data-price="${p.price}">
                        <img src="./img/Popular Products/Add-btn.png" alt="Add to cart">
                    </button>
                </div>
            </div>
        </article>`;
    }
    }


