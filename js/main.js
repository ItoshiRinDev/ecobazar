import { Modal } from './modules/modal.js';
import { Slider } from './modules/slider.js';
import { Cart } from './modules/cart.js'


document.addEventListener('DOMContentLoaded', () => {
    Cart.init();
    Modal.init();
    Slider.init();
});