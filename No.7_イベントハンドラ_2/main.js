var app = new Vue({
    el: '#app',
    data: {
        message: '',
        message2: '',
    },
    methods: {
        clickHandler: function () {
            this.message = new Date().toLocaleTimeString()
        },
        clear: function () {
            this.message2 = ''
        },
        clickHandlerAlert: function () {
            alert('shift + click')
        }
    }

})
