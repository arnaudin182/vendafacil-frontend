function refreshTime() {
    const timeDisplay = document.getElementById("session_info");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(" ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
