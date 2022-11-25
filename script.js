const fortuneButton = document.getElementById('fortune-button');

const makeFortune = () => {
    const fortuneContainer = document.getElementById('fortune');
    const fortune = document.createElement('div');
    fortune.setAttribute('class', 'fortune-text');
    const fortuneCookieText = fortunes && fortunes[Math.floor(Math.random() * fortunes.length)];
    fortune.innerHTML = fortuneCookieText;
    fortuneContainer.removeChild(fortuneContainer.lastChild);
    fortuneContainer.removeChild(fortuneContainer.lastChild);
    fortuneContainer.appendChild(fortune);
}

fortuneButton.addEventListener('click', makeFortune);
