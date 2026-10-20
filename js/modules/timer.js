export const Timer = {
    init() {
        const countDownDate = new Date('november 30 2026 00:00:00').getTime();
        const pad = (num) => String(num).padStart(2, '0');
        let interval;

        const updateTimer = () => {
            const now = Date.now();
            const distance = countDownDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                document.querySelector('#days').textContent = '00';
                document.querySelector('#hours').textContent = '00';
                document.querySelector('#mins').textContent = '00';
                document.querySelector('#secs').textContent = '00';
                return;
            }

            const days = Math.floor(distance / 86400000);
            const hours = Math.floor(distance % 86400000 / 3600000);
            const mins = Math.floor(distance % 3600000 / 60000);
            const secs = Math.floor(distance % 60000 / 1000);

            document.querySelector('#days').textContent = pad(days);
            document.querySelector('#hours').textContent = pad(hours);
            document.querySelector('#mins').textContent = pad(mins);
            document.querySelector('#secs').textContent = pad(secs);
        };

        updateTimer();
        interval = setInterval(updateTimer, 1000);
    }
};