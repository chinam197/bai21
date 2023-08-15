
var textElement = document.getElementById("text");
var textContent = textElement.textContent;
var words = textContent.split(" ");
var currentWordIndex = 0;
var isRed = false;
function colorWords() {
  if (currentWordIndex < words.length) {
    var coloredText = "";

    for (var i = 0; i < words.length; i++) {
      if (i < currentWordIndex) {
        coloredText += '<span class="black-text">' + words[i] + '</span> ';
      } else if (i === currentWordIndex) {
        coloredText += '<span class="red-text">' + words[i] + '</span> ';
      } else {
        coloredText += '<span class="black-text">' + words[i] + '</span> ';
      }
    }

    textElement.innerHTML = coloredText;

    if (isRed) {
      currentWordIndex++;
      isRed = false;
    } else {
      isRed = true;
    }

    setTimeout(colorWords, 500); // Chờ 0.5 giây trước khi chuyển từ tiếp theo

    if (currentWordIndex === words.length) {
      currentWordIndex = 0; // Chuyển lại về từ đầu
    }
  }
}

colorWords();