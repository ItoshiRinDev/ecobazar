export const Timer = {
    init() {
        const timers = document.querySelectorAll('.hd-timer, .bd-timer')
        const pad = (num) => String(num).padStart(2, '0');

        timers.forEach((timerContainer) => {
            const deadlineString = timerContainer.getAttribute('data-deadline');
            if (!deadlineString) return;

            const countDownDate = new Date(deadlineString).getTime();

            let interval;

            const updateTimer = () => {
                const now = Date.now();
                const distance = countDownDate - now;

                if (distance <= 0) {
                    clearInterval(interval);
                    timerContainer.querySelector('.js-days').textContent = '00';
                    timerContainer.querySelector('.js-hours').textContent = '00';
                    timerContainer.querySelector('.js-mins').textContent = '00';
                    timerContainer.querySelector('.js-secs').textContent = '00';
                    return;
                }

                const days = Math.floor(distance / 86400000);
                const hours = Math.floor(distance % 86400000 / 3600000);
                const mins = Math.floor(distance % 3600000 / 60000);
                const secs = Math.floor(distance % 60000 / 1000);

                timerContainer.querySelector('.js-days').textContent = pad(days);
                timerContainer.querySelector('.js-hours').textContent = pad(hours);
                timerContainer.querySelector('.js-mins').textContent = pad(mins);
                timerContainer.querySelector('.js-secs').textContent = pad(secs);
            };

            updateTimer();
            interval = setInterval(updateTimer, 1000);
        });

    }
};