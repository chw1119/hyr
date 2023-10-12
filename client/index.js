

const canvas = document.getElementById("canvas1");
const buffer = document.createElement("canvas");

const ctx = canvas.getContext("2d");
const bufferCtx = buffer.getContext("2d");



let isClicked = false;

//const animationEventManager = new AnimationEventHandler(ctx);

window.onload = () => {
    class DrawGraph {
        static sin(date, vertexCount, ratio, height, startHeight) {
            const temp = [];
            const width = window.innerWidth / vertexCount;

            for (let a = 0; a < vertexCount; a++) {
                temp[a] = { x: width * (a + 1), y: Math.sin(date + width * (a + 1) / ratio) * height / 2 + startHeight };
            }


            bufferCtx.beginPath();
            bufferCtx.moveTo(0, Math.sin(date) * height / 2 + startHeight);

            for (let a = 0; a < vertexCount; a++) {

                bufferCtx.lineTo(temp[a].x, temp[a].y);
            }

            bufferCtx.lineTo(window.innerWidth, window.innerHeight);
            bufferCtx.lineTo(0, window.innerHeight);
            bufferCtx.lineTo(0, Math.sin(date));
            bufferCtx.closePath();
            bufferCtx.fill();
        }


        static rnad(date, vertexCount, ratio, height, startHeight) {
            const temp = [];
            const width = window.innerWidth / vertexCount;

            for (let a = 0; a < vertexCount; a++) {
                temp[a] = { x: width * (a + 1), y: Math.sin(date + width * (a + 1) / ratio) * height / 2 + startHeight };
            }


            bufferCtx.beginPath();
            bufferCtx.moveTo(0, Math.sin(date) * height / 2 + startHeight);

            for (let a = 0; a < vertexCount; a++) {

                bufferCtx.lineTo(temp[a].x, temp[a].y);
            }

            bufferCtx.lineTo(window.innerWidth, window.innerHeight);
            bufferCtx.lineTo(0, window.innerHeight);
            bufferCtx.lineTo(0, Math.sin(date));
            bufferCtx.closePath();
            bufferCtx.fill();
        }

        static setCanvasSize(width, height) {

            canvas.width = width || window.innerWidth;
            canvas.height = height || window.innerHeight;

            buffer.width = canvas.width / 1.5;
            buffer.height = canvas.height / 1.5;
        }

        static clearBuffer() {
            bufferCtx.clearRect(0, 0, buffer.width, buffer.height);
        }

        static swapBuffer() {
            ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);
        }

        //static angleTo
    }

    setInterval(() => {

        DrawGraph.setCanvasSize(window.innerWidth, window.innerHeight);
        DrawGraph.clearBuffer();


        bufferCtx.fillStyle = "rgb(19, 0, 71)";
        bufferCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        bufferCtx.fillStyle = "rgb(39, 0, 89)";
        DrawGraph.sin(Date.now() / 50000 + 10, 10, 500, window.innerHeight / 6, window.innerHeight / 6.3);


        bufferCtx.fillStyle = "rgb(52, 26, 145)";
        DrawGraph.sin(Date.now() / 4000 + 25, 10, 500, window.innerHeight / 6, window.innerHeight / 4.2);


        bufferCtx.fillStyle = "rgb(45, 55, 171)";
        DrawGraph.sin(Date.now() / 3000 + 40, 10, 500, window.innerHeight / 6, window.innerHeight / 2.7);


        bufferCtx.fillStyle = "rgb(73, 99, 219)";
        DrawGraph.sin(Date.now() / 2000 + 55, 10, 500, window.innerHeight / 6, window.innerHeight / 1.8);


        bufferCtx.fillStyle = "rgb(89, 119, 254)";
        DrawGraph.sin(Date.now() / 1000 + 70, 10, 500, window.innerHeight / 6, window.innerHeight / 1.2);

        DrawGraph.swapBuffer();

    }, 1000 / 40);



}
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
});

function setCanvasSize() {
    const canvasList = document.querySelectorAll('canvas');
    canvasList.forEach((canvas, index) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        
        if (index === 0) {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            ctx.fillStyle = randomColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    });
}

window.addEventListener('resize', setCanvasSize);
setCanvasSize();