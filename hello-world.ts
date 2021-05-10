class HelloWorld {
	static hello(text: string = "") {
		if (text === "") {
			return "Hello, World!";
		} else {
			return `Hello, ${text}!`;
		}
	}
}

export default HelloWorld;
