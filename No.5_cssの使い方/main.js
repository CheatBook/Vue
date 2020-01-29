var app = new Vue({
    el: '#app',
    data: {
        isLarge: false,
        hasError: true,
        classObject: {
            large: true,
            'text-danger': true
        },
        largeClass: {
            large: true,
            'bg-gray': true
        },
        dangerClass: {
            'text-danger': true
        },
    },

})
