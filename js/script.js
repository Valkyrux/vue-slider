const app = new Vue({
    el: "#app",
    data: {
        counterImg: 0,
        mouseOn: false,
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg'
        ],
    },
    methods: {
        nextImg() {
            if(this.counterImg < this.images.length - 1) {
                this.counterImg++;
            } else {
                this.counterImg = 0;
            }
        },
        prevImg() {
            if(this.counterImg > 0) {
                this.counterImg--;
            } else {
                this.counterImg = this.images.length - 1;
            }
        },
        setThisImg(index) {
            this.counterImg = index;
        },
        hider(condition) {
            if(condition == true) {
                return -1;
            } else {
                return 0;
            }
        }
    },

    watch: {
        mouseOn: function () {
            if(this.mouseOn == false) {
                player = setInterval(() => {this.nextImg()}, 3000);
            } else {
                clearInterval(player);
            }
        }
    }
}) 
