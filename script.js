document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    // Menambahkan event listener untuk mouseover dan touchstart pada tombol "No"
    noButton.addEventListener("mouseover", moveButtonRandomly);
    noButton.addEventListener("touchstart", moveButtonRandomly);

    function moveButtonRandomly() {
        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();

        // Posisi acak tombol "No"
        const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
        const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

        // Memperbarui posisi tombol "No" dengan unit px yang benar
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }
});

function showThankYouMessage() {
    const message = document.getElementById("thankYouMessage");
    message.classList.remove("hidden");  // Menampilkan pesan terima kasih
}