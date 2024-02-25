// Get the current date and time
const now = new Date();

// Get the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit === null) {
    // This is the user's first visit
    document.querySelector('#visitMessage').textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the difference in days
    const diffInTime = now.getTime() - new Date(lastVisit).getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    if (diffInDays < 1) {
        // The user visited less than a day ago
        document.querySelector('#visitMessage').textContent = "Back so soon! Awesome!";
    } else {
        // The user visited more than a day ago
        const dayString = diffInDays === 1 ? "day" : "days";
        document.querySelector('#visitMessage').textContent = `You last visited ${diffInDays} ${dayString} ago.`;
    }
}

// Store the current date and time as the last visit date
localStorage.setItem('lastVisit', now.toString());
