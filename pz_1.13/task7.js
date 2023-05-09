class Task {
    constructor(name, description, startDate, endDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class ExecutedTask extends Task {
    constructor(name, description, startDate, endDate, progress, completed) {
        super(name, description, startDate, endDate);
        this.progress = progress;
        this.completed = completed;
    }
}
const task = new Task('Випускний', 'Святкування випуску', '2021-06-26', '2021-06-27');
const executedTask = new ExecutedTask('Випускний', 'Святкування випуску', '2021-06-26', '2021-06-27', 87, false);