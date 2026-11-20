import { Popular } from './popular-products.js';

export const Featured = {

    allProducts: [],
    async init() {
        const grid = document.querySelector('.fp-section .fp-grid');
        if (!grid) return;

        try {
            const res = await fetch('./data/featured.json')
            this.allProducts = await res.json()
            this.renderGrid(this.allProducts)
        } catch (e) {
          console.error('Ошибка загрузки:', e)
        }
    },

    renderGrid(products) {
        const grid = document.querySelector('.fp-section .fp-grid');
        if (!grid) return;

       if (products.length === 0) {
            grid.innerHTML = '<p style="padding: 20px;">Товары не найдены</p>'
            return;
        }
         grid.innerHTML = products.map(p => Popular.renderCard(p)).join('');
    }
    };
