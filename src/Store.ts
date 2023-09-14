import { makeAutoObservable } from 'mobx';

class Store {
	constructor() {
		makeAutoObservable(this);
	}

	count = 0;

	setCount(num: number) {
		this.count = num;
	}
}

const store = new Store();
export default store;
