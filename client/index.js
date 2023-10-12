

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

    const canvas1 = document.getElementById("canvas2");
    const ctx1 = canvas1.getContext("2d");

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;

    const circles = [];

    function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    function createCircle() {
    const radius = Math.random() * 50 + 10;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const color = getRandomColor();
    const speedX = (Math.random() - 0.5) * 8;
    const speedY = (Math.random() - 0.5) * 8;

    circles.push({ x, y, radius, color, speedX, speedY });
    }

    function draw() {
        ctx1.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx1.fillStyle = "#000000";
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];

            ctx1.beginPath();
            if (circle.radius > 0) {
            ctx1.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx1.fillStyle = circle.color;
            ctx1.fill();
            }

            circle.x += circle.speedX;
            circle.y += circle.speedY;
            circle.radius -= 0.2;
        }
    }

    function animate() {
        
        createCircle();
        draw();
        
    }

    setInterval(animate, 1000 / 40); // 40 frames per second



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
        
            const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            ctx.fillStyle = randomColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        
    });

    
}

window.addEventListener('resize', setCanvasSize);
setCanvasSize();