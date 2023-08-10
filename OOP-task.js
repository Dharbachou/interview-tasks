class Task {
	#name = "TASK";
	#data = "data";

	execute() {
		console.log('tasking...');
		return `${this.getInfo()} executed`;
	}

	getInfo() {
		return this.#name;
	}
}

class DrawTask extends Task {
	#name = "DrawTask";

	execute() {
		console.log('drawing...');
		return `${this.getInfo()} executed`;
	}
}

class ScriptTask extends Task {
	#name = "ScriptTask";

	execute() {
		console.log('scripting...');
		return `${this.getInfo()} executed`;
	}

	getInfo() {
		return this.#name;
	}
}

const tasks = [new ScriptTask(), new DrawTask(), new Task()];

for (let i = 0; i < tasks.length; i++) {
	console.log(tasks[i].execute());
}
