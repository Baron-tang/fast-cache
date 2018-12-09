class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get(key){
		return this.name;
	}
	set(key, value){
		this.name = value;
	}
	
	say(){
		console.log("My name is " + this.name + ",I'm " + this.age + "years old");
	}
}