// Клас для електростанцій
class PowerPlant {
    constructor(power) {
        this.power = power;
    }

    generatePower() {
        return this.power;
    }
}

// Клас для сонячних панелей
class SolarPanel {
    constructor(power) {
        this.power = power;
    }

    generatePower(isDaytime) {
        return isDaytime ? this.power : 0;
    }
}

// Клас для житлових будинків
class ResidentialBuilding {
    constructor(numApartments) {
        this.numApartments = numApartments;
    }

    getTotalPowerUsage(isDaytime) {
        return (isDaytime ? 4 : 1) * this.numApartments;
    }
}

// Клас для ліній електропередачі
class PowerLine {
    constructor(powerCapacity, pricePerMW) {
        this.powerCapacity = powerCapacity;
        this.pricePerMW = pricePerMW;
        this.powerTransferred = 0;
    }

    transferPower(power) {
        if (this.powerTransferred + power > this.powerCapacity) {
            // Якщо потужність, яку треба передати, більше, ніж вміщує лінія, то передаємо максимально можливу
            const transferredPower = this.powerCapacity - this.powerTransferred;
            this.powerTransferred = this.powerCapacity;
            return transferredPower;
        } else {
            // Інакше передаємо усю потужність
            this.powerTransferred += power;
            return power;
        }
    }

    getPowerSurplus() {
        return this.powerTransferred - this.powerCapacity;
    }

    getPowerDeficit() {
        return this.powerCapacity - this.powerTransferred;
    }

    getTransferPrice() {
        return this.pricePerMW;
    }
}

// Клас, що представляє електромережу в цілому
class ElectricalNetwork {
    constructor(powerPlants, solarPanels, residentialBuildings, powerLines) {
        this.powerPlants = powerPlants;
        this.solarPanels = solarPanels;
        this.residentialBuildings = residentialBuildings;
        this.powerLines = powerLines;
    }
}
// Метод, який розраховує, скільки потужності необхідно згенерувати вдень і вночі
calculatePowerRequirements(); {
    let daytimePowerUsage = 0;
    let nighttimePowerUsage = 0;

    for (const building of this.residentialBuildings) {
        daytimePowerUsage += building.getTotalPowerUsage(true);
        nighttimePowerUsage += building.getTotalPowerUsage(false);
    }
}
let total