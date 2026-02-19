class LottoNumberDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'number') {
            this.render();
        }
    }

    getColor(number) {
        if (number <= 10) return '#fbc400';
        if (number <= 20) return '#69c8f2';
        if (number <= 30) return '#ff7272';
        if (number <= 40) return '#aaa';
        return '#b0d840';
    }

    render() {
        const number = this.getAttribute('number') || 0;
        const color = this.getColor(number);

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background-color: ${color};
                    color: white;
                    font-size: 1.8rem;
                    font-weight: bold;
                    box-shadow: 0 4px 15px var(--card-shadow-color, rgba(0, 0, 0, 0.2));
                }
            </style>
            <div>${number}</div>
        `;
    }
}

customElements.define('lotto-number-display', LottoNumberDisplay);

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    const container = document.getElementById('lotto-numbers');
    container.innerHTML = '';
    for (const number of numbers) {
        const lottoNumberElement = document.createElement('lotto-number-display');
        lottoNumberElement.setAttribute('number', number);
        container.appendChild(lottoNumberElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }

    const initialNumbers = generateLottoNumbers();
    displayNumbers(initialNumbers);

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateLottoNumbers();
        displayNumbers(newNumbers);
    });

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        }
    });
});
