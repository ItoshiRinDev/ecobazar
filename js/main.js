import { Modal } from './modules/modal.js';
import { Slider } from './modules/slider.js';
import { Cart } from './modules/cart.js';
import { Timer } from './modules/timer.js';
import { I18n } from './modules/i18n.js'
import { Products } from './modules/products.js'


document.addEventListener('DOMContentLoaded', async () => {
    I18n.init();
    Cart.init();
    Modal.init();
    Slider.init();
    Timer.init();
    await Products.init();
});