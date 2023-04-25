const goldDisplay = document.getElementById("par");
const gainGoldButton = document.getElementById("bot");
const upgradeButton = document.getElementById("up");
const levelDisplay = document.getElementById("level");
const body = document.getElementsByTagName("body")[0];
let quantityOfClickers = 0;
let gold = 0;
let gain = 1;
let preco = 50;
let level = 0;
let clickerUnlocked = false;

gainGoldButton.addEventListener("click", () => {
	gold += gain;
	goldDisplay.innerText = `${gold} g`;
})

upgradeButton.addEventListener("click", () => {
	if (gold < preco) {
		window.alert("POBRE!");
		return;
	}

	gain++;
	gold -= preco;
	goldDisplay.innerText = `${gold} g`;
	preco += 50;
	upgradeButton.innerText = `${preco} g`;
	level++;
	levelDisplay.innerText = `level ${level}`;

	if (level == 5 && !clickerUnlocked){
		if (document.getElementById("criquer")) {
			return;
		}

		let auto = document.createElement('button');
		auto.textContent = "Auto criquer: 1000 g";
		auto.id = "criquer";
		body.appendChild(auto);
	}

	let auto = document.getElementById("criquer");
	if (auto) {
		auto.addEventListener("click", () => {
			if (gold >= 1000){
				gold -= 1000;
				quantityOfClickers++;
				goldDisplay.innerText = `${gold} g`;
			}
			else {
				window.alert("POBRE!");
			}
		})

		clickerUnlocked = true;
	}
})

const autoClickerTime = delay => new Promise(result => setTimeout(result, delay));

const autoClickerRunner = async() => {
	while (true) {
		gold += quantityOfClickers;
		goldDisplay.innerText = `${gold} g`;
		await autoClickerTime(2000);
	}
}

autoClickerRunner();
