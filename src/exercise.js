new Vue({
	el: '#exercise',
	data: {
		name: 'Rob',
		age: '99',
		image: 'https://avatars1.githubusercontent.com/u/6128107?v=3&s=200'
	},
	methods: {
		multipliedAge() {
			return this.age * 3
		},
		randomNumber() {
			return Math.random(0,2)
		}
	}
})