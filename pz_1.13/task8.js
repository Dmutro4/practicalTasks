class Task {
    constructor(name, description, startDate, endDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.subtasks = [];
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }
}

class ExecutedTask extends Task {
    constructor(name, description, startDate, endDate, progress, completed) {
        super(name, description, startDate, endDate);
        this.progress = progress;
        this.completed = completed;
    }
}

const graduation = new ExecutedTask(
    "Випускний",
    "Святкування випуску",
    "2021-06-26",
    "2021-06-27",
    87,
    false
);
graduation.addSubtask(new Task("Підготовка подіуму", "Встановлення та оформлення подіуму", "2021-06-25", "2021-06-26"));
graduation.addSubtask(new Task("Квіти", "Придбання та оформлення квітів", "2021-06-25", "2021-06-26"));

console.log(graduation);