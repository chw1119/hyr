

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

        // modified version of random-normal
    function normalPool(o){var r=0;do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));if(a<o.pool.length&&a>=0)return o.pool[a];r++}while(r<100)}function randomNormal(o){if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)return normalPool(o);var r,a,n,e,l=o.mean,t=o.dev;do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}

    const NUM_PARTICLES = 600;
    const PARTICLE_SIZE = 0.5; // View heights
    const SPEED = 20000; // Milliseconds

    let particles = [];

    function rand(low, high) {
    return Math.random() * (high - low) + low;
    }

    function createParticle(canvas) {
    const colour = {
        r: 255,
        g: randomNormal({ mean: 125, dev: 20 }),
        b: 50,
        a: rand(0, 1),
    };
    return {
        x: -2,
        y: -2,
        diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
        duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
        amplitude: randomNormal({ mean: 16, dev: 2 }),
        offsetY: randomNormal({ mean: 0, dev: 10 }),
        arc: Math.PI * 2,
        startTime: performance.now() - rand(0, SPEED),
        colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
    }
    }

    function moveParticle(particle, canvas2, time) {
    const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
        ...particle,
        x: progress,
        y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
    };
    }

    function drawParticle(particle, canvas2, ctx2) {
    canvas2 = document.getElementById('canvas3');
    const vh = canvas.height / 100;

    ctx2.fillStyle = particle.colour;
    ctx2.beginPath();
    ctx2.ellipse(
        particle.x * canvas.width,
        particle.y * vh + (canvas.height / 2),
        particle.diameter * vh,
        particle.diameter * vh,
        0,
        0,
        2 * Math.PI
    );
    ctx2.fill();
    }

    function draw1(time, canvas2, ctx2) {
    // Move particles
    particles.forEach((particle, index) => {
        particles[index] = moveParticle(particle, canvas2, time);
    })

    // Clear the canvas
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.fillStyle = "#000000";
    ctx2.fillRect(0, 0, canvas1.width, canvas1.height);

    // Draw the particles
    particles.forEach((particle) => {
        drawParticle(particle, canvas2, ctx2);
    })

    // Schedule next frame
    requestAnimationFrame((time) => draw1(time, canvas2, ctx2));
    }

    function initializeCanvas() {
    let canvas = document.getElementById('canvas3');
    canvas2.width = canvas2.offsetWidth * window.devicePixelRatio;
    canvas2.height = canvas2.offsetHeight * window.devicePixelRatio;
    let ctx2 = canvas.getContext("2d");

    window.addEventListener('resize', () => {
        canvas2.width = canvas2.offsetWidth * window.devicePixelRatio;
        canvas2.height = canvas2.offsetHeight * window.devicePixelRatio;
        ctx2 = canvas2.getContext("2d");
    })

    return [canvas2, ctx2];
    }

    function startAnimation() {
    const [canvas, ctx2] = initializeCanvas();

    // Create a bunch of particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(createParticle(canvas));
    }
    
    requestAnimationFrame((time) => draw1(time, canvas, ctx2));
    };

    // Start animation when document is loaded
    (function () {
    if (document.readystate !== 'loading') {
        startAnimation();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
        startAnimation();
        })
    }
    }());

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
        
        const ctx = canvas2.getContext('2d');
        
            const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            ctx.fillStyle = randomColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        
    });

    
}

window.addEventListener('resize', setCanvasSize);
setCanvasSize();