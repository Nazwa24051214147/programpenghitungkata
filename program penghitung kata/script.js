document.getElementById("countButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const words = inputText.trim().split(/\s+/);
    const wordCount = inputText ? words.length : 0;

    document.getElementById("result").innerText = `Jumlah kata: ${wordCount}`;
});
