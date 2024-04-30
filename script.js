function generateArt() {
    const text = document.getElementById('textInput').value;
    const font = document.getElementById('fontSelector').value;

    figlet(text, { font: font }, function(error, data) {
        if (error) {
            console.error('Something went wrong', error);
            return;
        }
        document.getElementById('output').textContent = data;
    });
}
