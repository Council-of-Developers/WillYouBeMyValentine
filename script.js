function redirectToMazaAgayaBhai() {
  window.location.href = 'mazaagyabhai.html';
}

function redirectToShare() {
  window.location.href = 'share.html';
}

function teleportNoBtn() {
  var typesOfNo = ["No", "Are you sure?", "Really Sure?", "Think Again!", "Last Chance!", "Surely Not?", "You might regret this...", "Give it another thought", "Are you absolutely certain?", "Have a heart", "Don't be so cold", "Change of Heart?", "Wouldn't you reconsider?", "Is that your final answer?", "You're breaking my heart!"]
  const randomNumber = Math.floor(Math.random() * 15);
  
  const noBtn = document.getElementById("noBtn");
  const mainDiv = document.querySelector(".main-div");

  // Change the text of the button
  noBtn.classList.add("ChangeBtn");

  noBtn.textContent = typesOfNo[randomNumber];

  // Move the button to a random position within the main-div
  const maxX = mainDiv.clientWidth - noBtn.clientWidth;
  const maxY = mainDiv.clientHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

function generateShareLink() {
  const loverName = document.getElementById('loverName').value;

  var base64EncodedText = btoa(loverName);

  const shareLink = window.location.origin + '?lover=' + encodeURIComponent(base64EncodedText);

  navigator.clipboard.writeText(shareLink)
      .then(() => {
          alert('Link copied to clipboard! Now share with your crush...')
          window.location.href = "/?lover=" + encodeURIComponent(base64EncodedText);
      })
      .catch((err) => console.error('Unable to copy link to clipboard', err));
}

function populateQuestion() {
  function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
  }

  const nameParam = getQueryParam('lover');

  var decodedText = atob(nameParam);

  const outputElement = document.getElementById('output');
  if (nameParam) {
      outputElement.textContent = `${decodedText}, will you be my Valentine?`;
  } else {
      outputElement.textContent = 'Will you be my Valentine?';
  }
}