document.addEventListener('DOMContentLoaded', () => {
    // --- Get references to all form inputs ---
    const amountInput = document.getElementById('amount-input');
    const nameInput = document.getElementById('name-input');
    const upiInput = document.getElementById('upi-input');
    const appInput = document.getElementById('app-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');

    // --- Get references to all preview elements ---
    const previewAmount = document.getElementById('preview-amount');
    const previewName = document.getElementById('preview-name');
    const previewApp = document.getElementById('preview-app');
    const previewUpi = document.getElementById('preview-upi');
    const previewDatetime = document.getElementById('preview-datetime');

    // --- Function to update the preview based on form values ---
    function updatePreview() {
        // Update simple text fields
        previewName.textContent = nameInput.value;
        previewApp.textContent = appInput.value;
        previewUpi.textContent = upiInput.value;
        previewAmount.textContent = amountInput.value;

        // Update and format Date and Time
        const dateValue = dateInput.value; // e.g., "2026-10-03"
        const timeValue = timeInput.value; // e.g., "15:05"

        if (dateValue && timeValue) {
            // Create a date object from the inputs
            const dateTime = new Date(`${dateValue}T${timeValue}`);
            
            // Format the date (e.g., "3 October 2026")
            const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = dateTime.toLocaleDateString('en-GB', dateOptions);

            // Format the time (e.g., "3:05 pm")
            const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
            const formattedTime = dateTime.toLocaleTimeString('en-US', timeOptions);

            // Combine and display
            previewDatetime.textContent = `${formattedDate}, ${formattedTime}`;
        }
    }

    // --- Add Event Listeners ---
    // Listen for 'input' events on all fields to update real-time
    [amountInput, nameInput, upiInput, appInput, dateInput, timeInput].forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // --- Initial Call ---
    // Run the function once on page load to initialize the preview with default values
    updatePreview();

    // --- Download Button Placeholder ---
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', () => {
        alert("This is a demo. Image download functionality would be implemented here.");
    });
});