export class Person {

	constructor(name = 'Bob', job = 'Dev') {
		this.name = name;
		this.job = job;
	}

	greet() {
		console.log(`Hi, my name is ${this.name}, and I work as a ${this.job}`);
	}
}