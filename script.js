const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, ZAI honestly first time ada rasa suka yang mendalam dengan someone maybe TASHA ingat zai tipu.\n\nZAI srs nk kekalkan relay ni sampai bila ii .But if salah sorang dari kita ada buat hal, jum Deep talk and saling berbaik. And saling bercerita tanpa berahsia just terbuka UKIIII “I LOVE YOU."But if salah sorang dari kita mmg dah tak sejalan pleaseee say jangan pergi macamtu jerr Ukii, BUT HONESTLYYYY ZAIIIII FALL IN LOVE DENGAN TASHA, I hope you're doing okay, even kita berjauhan but in my HEART TASHAA TETAP DI HATII LUPE YOU heheheheh.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    }

    typeWriter();
  }, 600);
}
