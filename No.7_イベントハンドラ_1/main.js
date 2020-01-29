var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        message: ''
    },
    methods: {
        clickHandler2: function (event) {
            this.counter++
            console.log(event)
            console.log(event.target.tagName)
            console.log(event.target.innerHTML)
            console.log(event.target.type)
        },
        clickHandler3: function ($event, message) {
            this.message = message
            console.log(event)
            console.log(event.target.tagName)
            console.log(event.target.innerHTML)
            console.log(event.target.type)
        }
    }

})
