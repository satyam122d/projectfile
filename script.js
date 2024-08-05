document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I am Satyam <br> Welcome to my website ";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text[index] === "<" && text.substring(index, index + 4) === "<br>") {
                typingText.innerHTML += "<br>";
                index += 4;
            } else {
                typingText.innerHTML += text[index];
                index++;
            }
            setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
    }

    type();
});