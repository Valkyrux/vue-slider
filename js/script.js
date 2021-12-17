const app = new Vue({
    el: "#app",
    data: {
        counterImg: null,
        autoPlayOn: null,
        images: [],
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
        autoPlayStart() {
            this.autoPlayOn = setInterval(this.nextImg, 3000);
        },
        autoPlayEnd() {
            clearInterval(this.autoPlayOn);
            this.autoPlayOn = null;
        }
    },
    created () {
        this.counterImg = 0,
        this.images = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg'
        ];
        this.autoPlayStart();
    }
}) 
