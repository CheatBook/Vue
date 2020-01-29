var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clickHandler: function () {
            this.message = new Date().toLocaleTimeString()
        }
    }

})
