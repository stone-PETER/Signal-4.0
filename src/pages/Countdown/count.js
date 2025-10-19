export default function initializeCountdown(targetDateString) {
    const targetDate = new Date(targetDateString).getTime();
  
    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Update DOM elements
      document.querySelector('.days').textContent = days;
      document.querySelector('.hours').textContent = hours;
      document.querySelector('.minutes').textContent = minutes;
      document.querySelector('.seconds').textContent = seconds;
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(this);
        document.querySelector('.count').innerHTML = "The date has arrived!";
      }
    }, 1000);
  }
  