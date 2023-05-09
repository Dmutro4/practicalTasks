function calculateElectricity(elements) {
    let totalDayElectricity = 0;
    let totalNightElectricity = 0;
    let totalCost = 0;

    // обчислюємо сумарну потужність та виробництво електрики сонячними панелями вдень та вночі
    for (let element of elements) {
        if (element instanceof PowerStation) {
            totalDayElectricity += element.power;
            totalNightElectricity += element.power;
        } else if (element instanceof SolarPanel) {
            totalDayElectricity += element.daytimePower;
        } else if (element instanceof ResidentialBuilding) {
            totalDayElectricity += element.daytimePower;
            totalNightElectricity += element.nighttimePower;
        }
    }

    // обчислюємо сумарну потребу в електриці та витрати на її закупку/продаж
    for (let element of elements) {
        if (element instanceof ResidentialBuilding) {
            totalCost += element.power * 0.1; // вартість електрики для житлових будинків - $0.1 за кВт-год
        } else if (element instanceof PowerLine) {
            if (element.from instanceof PowerStation) {
                totalCost -= element.power * element.price; // продаж електрики станціями через лінії електропередачі
            } else if (element.to instanceof PowerStation) {
                totalCost += element.power * element.price; // закупівля електрики станціями через лінії електропередачі
            }
        }
    }

    return [totalDayElectricity, totalNightElectricity, totalCost];
}