export const Modal = {
    modals: {},

    init() {
        this.modals.cart = document.querySelector('#cartModal');
        this.modals.signIn = document.querySelector('#signInModal');
        this.modals.signUp = document.querySelector('#signUpModal');
        this.bindEvents();
    },

    bindEvents() {
        const signInBtn = document.querySelector('#signInBtn');
        const signUpBtn = document.querySelector('#signUpBtn');
        const cartBtn = document.querySelector('.icon-btn')
        const closeButtons = document.querySelectorAll('.close-btn');
        
        if (signInBtn) signInBtn.addEventListener('click', () => this.open('signIn'));
        if (signUpBtn) signUpBtn.addEventListener('click', () => this.open('signUp'));
        document.querySelector('.js-cart-open')?.addEventListener('click', () => this.open('cart'));

        
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const modalType = btn.dataset.modal;
                this.close(modalType);
            });
        });
    },

    open(modalType) {
        const modal = this.modals[modalType];
        if (modal) {
            modal.classList.add('active');
        }
    },

    close(modalType) {
        const modal = this.modals[modalType];
        if (modal) {
            modal.classList.remove('active');
        }
    },

    isOpen(modalType) {
        const modal = this.modals[modalType];
        return modal ? modal.classList.contains('active') : false;
    }
};