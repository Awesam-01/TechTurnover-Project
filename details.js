const data = JSON.parse(localStorage.getItem('selectedPhone'));
const container = document.querySelector('.radio-tile-group');
const estimateAmount = document.getElementById('estimate-amount')
const amountInput = document.createElement('input'); // Create input field
const submitButton = document.createElement('button'); // Create submit button


estimateAmount.style.display = 'none'

if (estimateAmount) {
    estimateAmount.style.display = 'none';
    estimateAmount.style.padding = '18px';
    estimateAmount.style.margin = '12px 0';
    estimateAmount.style.width = '100%';
    estimateAmount.style.border = '2px solid #0ef';
    estimateAmount.style.background = 'transparent';
    estimateAmount.style.color = '#007BFF';
    estimateAmount.style.gap = '5px';
    estimateAmount.style.borderRadius = '6px';
    estimateAmount.style.textAlign = 'center';
    estimateAmount.style.width = 'fit-content';
    estimateAmount.style.marginTop = '20px';
}
if (amountInput) {
amountInput.setAttribute('type', 'number');
amountInput.setAttribute('placeholder', 'Enter estimated amount');
amountInput.style.marginTop = '10px';
amountInput.style.padding = '5px';
amountInput.style.border = '1px solid #007BFF';
amountInput.style.borderRadius = '5px';
amountInput.style.display = 'none'; // Hidden initially
}
// Style the amount input field

if (amountInput) {
// Style the submit button
submitButton.textContent = 'Submit';
submitButton.style.marginTop = '10px';
submitButton.style.padding = '8px 12px';
submitButton.style.backgroundColor = '#28a745';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.cursor = 'pointer';
submitButton.style.display = 'none'; // Hidden initially
}


// Append elements to the estimateAmount div
estimateAmount.appendChild(amountInput);
estimateAmount.appendChild(submitButton);


if (data && data.variant) {
    container.innerHTML = ''; // Clear any existing content
    console.log(data)
    data.variant.forEach((variant, index) => {
        Object.values(variant).forEach((memory, i) => {
            // Create input container
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('input-container');

            // Create input element
            const input = document.createElement('input');
            input.type = 'radio';
            input.classList.add('radio-button');
            input.name = 'radio'; // All radios need the same name to be grouped
            input.id = `variant-${index}-${i}`;
            input.value = memory;

            // Create radio tile div
            const radioTile = document.createElement('div');
            radioTile.classList.add('radio-tile');

            // Create label element
            const label = document.createElement('label');
            label.classList.add('radio-tile-label');
            label.setAttribute('for', variant-`${index}-${i}`);
            label.textContent = memory;

            // Append elements together
            radioTile.appendChild(label);
            inputContainer.appendChild(input);
            inputContainer.appendChild(radioTile);
            container.appendChild(inputContainer);
        });
    });
    document.getElementById("device-title").textContent = `Sell Old ${data.name}`;
    document.getElementById("device-link").textContent = `Sell Old ${data.name}`;
    document.getElementById("device-name").textContent = `Sell Old ${data.name}`;
    document.getElementById('device-img').style.backgroundImage = `url(${data.image_url})`;  //template strings--comes from database
    document.getElementById('device-img').style.backgroundSize = 'contain'; 
    document.getElementById('device-img').style.height = '120px'; 
    document.getElementById('device-img').style.backgroundPosition = 'center';
    document.querySelectorAll('.radio-button').forEach(radio => {
        radio.addEventListener('change', (e) => { 
            estimateAmount.style.display = 'block'
            console.log('Selected variant:', e.target.value);
        });
    })
} else {
    console.error('No data found');
}


// Show submit button when user enters a valid amount and hide when input is empty
amountInput.addEventListener('input', () => {
    const value = amountInput.value.trim();
    if (value !== '' && !isNaN(value) && Number(value) > 0) {
        submitButton.style.display = 'block'; // Show submit button
    } else {
        submitButton.style.display = 'none'; // Hide if input is empty or invalid
    }
});

// Handle submit button click
submitButton.addEventListener('click', () => {
    alert(`Amount Submitted: $${amountInput.value}`);
});
