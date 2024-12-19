let count = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Increment button 
incrementBtn.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

// Decrement button 
decrementBtn.addEventListener('click', () => {
    count--;
    counterElement.textContent = count;
});

// Reset button 
resetBtn.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
});

// Initialize counter 
counterElement.textContent = count;