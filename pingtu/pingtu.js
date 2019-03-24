new Vue({
    el: "#app",
    data: {
        list: ["./img/0.jpg", "./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg"],
        listString: "",
        step: 0,
        totalTime: 0,
        interval:null
    },
    methods: {
        timeGo:function(){
            this.interval = setInterval(function () {
                this.totalTime++
            },1);
        },
        down: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i - 3 >= 0) {
                        var temp = this.list[i - 3];
                        this.$set(this.list, i - 3, this.list[i]);
                        this.$set(this.list, i, temp);
                        ++this.step;
                        break;
                    }
                }
            }
        },
        up: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i + 3 < 9) {
                        var temp = this.list[i + 3];
                        this.$set(this.list, i + 3, this.list[i]);
                        this.$set(this.list, i, temp);
                        ++this.step;
                        break;
                    }
                }
            }
        },
        right: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i % 3 != 0) {
                        var temp = this.list[i - 1];
                        this.$set(this.list, i - 1, this.list[i]);
                        this.$set(this.list, i, temp);
                        ++this.step;
                        break;
                    }
                }
            }
        },
        left: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i % 3 != 2) {
                        var temp = this.list[i + 1];
                        this.$set(this.list, i + 1, this.list[i]);
                        this.$set(this.list, i, temp);
                        ++this.step;
                        break;
                    }
                }
            }
        },
        checkList:function(){
            if (JSON.stringify(this.list) == this.listString) {
                confirm("恭喜你完成了").then(
                    //clearInterval(this.interval)
                    window.location.reload()
                )
            }
        },
        down1: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i - 3 >= 0) {
                        var temp = this.list[i - 3];
                        this.$set(this.list, i - 3, this.list[i]);
                        this.$set(this.list, i, temp);
                        break;
                    }
                }
            }
        },
        up1: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i + 3 < 9) {
                        var temp = this.list[i + 3];
                        this.$set(this.list, i + 3, this.list[i]);
                        this.$set(this.list, i, temp);
                        break;
                    }
                }
            }
        },
        right1: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i % 3 != 0) {
                        var temp = this.list[i - 1];
                        this.$set(this.list, i - 1, this.list[i]);
                        this.$set(this.list, i, temp);
                        break;
                    }
                }
            }
        },
        left1: function () {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] == "./img/8.jpg") {
                    if (i % 3 != 2) {
                        var temp = this.list[i + 1];
                        this.$set(this.list, i + 1, this.list[i]);
                        this.$set(this.list, i, temp);
                        break;
                    }
                }
            }
        },
    },
    mounted() {
        this.listString = JSON.stringify(this.list);
        for (var i = 0; i < 1000; i++) {
            var num = parseInt(Math.random() * 4 + 1);
            switch (num) {
                case 1:
                    this.up();
                    break;
                case 2:
                    this.down();
                    break;
                case 3:
                    this.left();
                    break;
                default:
                    this.right()
            }
        }
        this.step=0
    }
});