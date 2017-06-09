new Vue({
	el: '#events',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increase(step, event) {
			this.counter += step
		},
		updateCoordinates(event) {
			this.x = event.clientX
			this.y = event.clientY
		},
		dummy(event) {
			event.stopPropagation()
		},
		alertMe() {
			alert('Alert!')
		}
	}
})