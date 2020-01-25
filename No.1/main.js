var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        name: 'キマイラ',
        // list: [
        //     { id: 1, name: 'スライム', hp: 100},
        //     { id: 2, name: 'ゴブリン', hp: 300},
        //     { id: 3, name: 'ドラゴン', hp: 500}
        // ],
        list: [],
        show: true,
        scroll: 0,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        val: true,
        val2: [],
        val3: [],
        radius: 50,
        preview: ''
    },
    methods: {
        handler: function(comment) {
            console.log(comment)
        },
        handleClick: function(event) {
            alert(event.target)
        },
        handleInput: function(event) {
            this.message = event.target.value
        },
        handleChange: function(event) {
            var file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        },
        increment: function() {
            var vm = this
            setTimeout(function() { vm.count += 500 }, 3000);
            vm.count ++
            // var count = this.$refs.count
            // if (count) {
            //     count.innerText = parseInt(count.innerText, 10) + 1
            // }
        },
        doAdd: function() {
            var max = this.list.reduce(function(a, b){
                return a.id > b.id ? a.id :b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
            // this.$set(this.list, max + 1, { id: max + 1, name: 'キングスライム', hp:1000 })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        },
        doAttack: function(index) {
            this.list[index].hp -= 10
        }
    },
    mounted: function() {
        this.scroll = 100,
        console.log(this.$refs.hello)
    },
    created: function() {
    //     this.list.forEach(function(item) {
    //         this.$set(item, 'active', false)
    //     }, this)
        axios.get('list.json').then(function(response) {
            this.list = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        }) 
    }
})
console.log(app.message)
