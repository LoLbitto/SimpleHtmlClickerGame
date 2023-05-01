const goldDisplay = document.querySelector("#par");
const gainGoldButton = document.querySelector("#bot");
const upgradeButton = document.querySelector("#up");
const levelDisplay = document.querySelector("#level");
const body = document.querySelector("body");
const htmlMain = document.querySelector("main");
const upgradeStore = document.querySelector("#upgradeStore");
const upgradeStoreButton = document.querySelector("#upgradeStoreButton");
let quantityOfClickers = 0;
let gold = 0;
let gain = 1;
let preco = 50;
let level = 0;
let clickerUnlocked = false;

upgradeStoreButton.addEventListener("click", () => {
	if (upgradeStore.style.display === "flex") {
		upgradeStore.style.display = "none";
		upgradeStoreButton.innerText = "Loja de Upgrades";
	} else {
		upgradeStore.style.display = "flex";
		upgradeStoreButton.innerText = "Fechar Loja";
	}	
})

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

		let auto = document.createElement("button");
		auto.textContent = "Auto criquer: 1000 g";
		auto.id = "criquer";
		htmlMain.appendChild(auto);

		let autoClickerCountDisplay = document.createElement("div");
		autoClickerCountDisplay.innerHTML = "Auto Clickers: <br><span id='autoClickerCounter'>0</span>"
		autoClickerCountDisplay.id = "autoClickerCount"
		htmlMain.appendChild(autoClickerCountDisplay)
	}

	let auto = document.getElementById("criquer");
	let autoClickerCountDisplay = document.getElementById("autoClickerCounter");
	if (auto) {
		auto.addEventListener("click", () => {
			if (gold >= 1000){
				gold -= 1000;
				quantityOfClickers++;
				goldDisplay.innerText = `${gold} g`;
				autoClickerCountDisplay.innerText = quantityOfClickers;
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
