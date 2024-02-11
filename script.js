function redirectToMazaAgayaBhai() {
  window.location.href = 'mazaagyabhai.html';
}

function redirectToShare() {
  window.location.href = 'share.html';
}

function teleportNoBtn() {
  var typesOfNo = ["No", "Are you sure?", "Really Sure?", "Think Again!", "Last Chance!", "Surely Not?", "You might regret this...", "Give it another thought", "Are you absolutely certain?", "Have a heart", "Don't be so cold", "Change of Heart?", "Wouldn't you reconsider?", "Is that your final answer?", "You're breaking my heart!"]
  const randomNumber = Math.floor(Math.random() * 16);
  
}

function generateShareLink() {
  const loverName = document.getElementById('loverName').value;

  const shareLink = window.location.origin + '?lover=' + encodeURIComponent(loverName);

  navigator.clipboard.writeText(shareLink)
      .then(() => {
          alert('Link copied to clipboard!')
          window.location.href = "/?lover=" + encodeURIComponent(loverName);
      })
      .catch((err) => console.error('Unable to copy link to clipboard', err));
}

function populateQuestion() {
  function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
  }

  const nameParam = getQueryParam('lover');

  const outputElement = document.getElementById('output');
  if (nameParam) {
      outputElement.textContent = `${nameParam}, will you be my Valentine?`;
  } else {
      outputElement.textContent = 'Will you be my Valentine?';
  }
}