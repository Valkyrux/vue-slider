const app = new Vue({
    el: "#app",
    data: {
        counterImg: 0,
        autoPlay: true,
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
        autoPlayFalse() {
            this.autoPlay = false;
        },
        autoPlayTrue() {
            this.autoPlay = true;
            console.log("true");
        },
        autoPlayFunction(canAutoPlay) {
            const player = setInterval(() => {this.nextImg()}, 3000);
            if(!canAutoPlay) {
                clearInterval(player);
            }
        }
    }
}) 