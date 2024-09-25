// Locomotive Scroll setup
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

// ScrollTrigger integration
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// Refresh on ScrollTrigger events
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



const main = document.querySelector('.main');
const cursor = document.getElementById('cursor');
const cursor1 = document.querySelector("#cursor");

const split1 = new SplitType('.brand-name h3', { types: 'chars' });
const split2 = new SplitType('#options h3', { types: 'chars' });
const split3 = new SplitType('#first-line', { types: 'chars' });
const split4 = new SplitType('#middle-line', { types: 'chars' });
const split5 = new SplitType('#last-line', { types: 'chars' });
const split6 = new SplitType('#sec3part-2 h3', { types: 'chars' });
const split7 = new SplitType('.Explore .featured', { types: 'chars' });
const split8 = new SplitType('.projects h1', { types: 'chars' });
const split9 = new SplitType('.about-team h1', { types: 'chars' });
const split10 = new SplitType('.about-team h2', { types: 'chars' });
const split11 = new SplitType('.tag-1', { types: 'chars' });
const split12 = new SplitType('.tag-2', { types: 'chars' });
const split13 = new SplitType('.tag-3', { types: 'chars' });
const split14 = new SplitType('.resources p', { types: 'chars' });
const split15 = new SplitType('.social-media h3', { types: 'chars' });
const split16 = new SplitType('.social-handles .social1', { types: 'chars' });
const split17 = new SplitType('.social-handles .social2', { types: 'chars' });
const split18 = new SplitType('.social-handles .social3', { types: 'chars' });
const split19 = new SplitType('.social-handles .social4', { types: 'chars' });
const split20 = new SplitType('.social-handles .social5', { types: 'chars' });
const split21 = new SplitType('.social-handles .social6', { types: 'chars' });
const split22 = new SplitType('.social-handles .social7', { types: 'chars' });
const split23 = new SplitType('.location1', { types: 'chars' });
const split24 = new SplitType('.location2', { types: 'chars' });
const split25 = new SplitType('.first-h1', { types: 'chars' });
const split26 = new SplitType('.second-h1', { types: 'chars' });

// section1
var TL = gsap.timeline()
gsap.to(split1.chars, {
    y: 0,
    stagger: 0.05,
    duration: 0.5,
})


gsap.to(split2.chars, {
    y: 0,
    duration: 0.5,
})

gsap.from('.box-sm svg', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
});

TL.to(split3.chars, {
    y: 0,
    stagger: 0.03,
    duration: 0.5,
})

TL.from('#middle-line video', {
    y: 30,
    duration: 0.1,
    opacity: 0
}, "same1");

TL.to(split4.chars, {
    y: 0,
    duration: 0.1,
}, "same1");


TL.to(split5.chars, {
    y: 0,
    duration: 0.1,
});

// section2

TL.from("#section2 video", {
    y: 30,
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
        gsap.to("#section2 video", {
            y: 0,
            duration: 0,
        });
    },
});

// section3

function section3() {

    gsap.from("#sec3part-1 video", {
        scale: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
            gsap.to("#section2 video", {
                scale: 1,
                duration: 0.5,
            });
        },
        scrollTrigger: {
            trigger: "#section3",
            scroller: ".main",
            start: "top 50%",
            end: "top 20%",
        }
    });

    gsap.from("#sec3part-2 button", {
        scale: 0,
        y: 10, 
        duration: 0.5, 
        ease: "power1.out", 
        scrollTrigger: {
            trigger: "#section3",
            scroller: ".main", 
            start: "top 50%", 
            end: "top 20%",
        }
    });

    gsap.to(split6.chars, {
        y: 0, 
        duration: 0.1,
        scrollTrigger: {
            trigger: "#section3",
            scroller: ".main",
            start: "top 50%",
            end: "top 20%",
        }
    });
}

section3()

// section4

gsap.to(split7.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: "#section4",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});


var sec4TL = gsap.timeline()

gsap.from(".projects video", {
    scale: 0, // Start 30px below its original position
    duration: 0.5, // Duration of the animation
    ease: "power1.out", // Easing for a smooth transition
    scrollTrigger: {
        trigger: "#section4",
        scroller: ".main", // The element that triggers the animation
        start: "top 50%", // Start the animation when #section3 is 75% from the top of the viewport
        end: "top 20%", // End the animation when #section3 is 25% from the top of the viewport
    }
});

sec4TL.to(split8.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    delay: 0.1,
    scrollTrigger: {
        trigger: "#section4",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

for (let i = 1; i <= 10; i++) {
    gsap.from(`.small-container .small${i}`, {
        y: 100, // Start 100px below its original position
        duration: 0.5, // Duration of the animation
        ease: "power1.out", // Easing for a smooth transition
        opacity: 0,
        scrollTrigger: {
            trigger: `.small${i}`,
            scroller: ".main", // The element that triggers the animation
            start: "top 115%", // Start the animation when the element is below the viewport
            end: "top 60%",
        }
    });
}

// section5

var sec5TL = gsap.timeline()

sec5TL.to(split9.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    delay: 0.1,
    scrollTrigger: {
        trigger: "#section5",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

sec5TL.to(split10.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    delay: 0.1,
    scrollTrigger: {
        trigger: "#section5",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

gsap.from(".vid-drop video", {
    scale: 0, // Start 30px below its original position
    duration: 0.5, // Duration of the animation
    ease: "power1.out", // Easing for a smooth transition
    scrollTrigger: {
        trigger: ".main-para",
        scroller: ".main", // The element that triggers the animation
        start: "top 100%", // Start the animation when #section3 is 75% from the top of the viewport
        end: "top 20%", // End the animation when #section3 is 25% from the top of the viewport
    }
});

// section6

var sec6TL = gsap.timeline()

sec6TL.to(split11.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: "#section6",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

sec6TL.to(split12.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: "#section6",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

sec6TL.to(split13.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: "#section6",
        scroller: ".main",
        start: "top 50%",
        end: "top 20%",
    }
});

sec6TL.to(split14.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: ".resources",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
    }
});


gsap.from(".resources button", {
    scale: 0,
    y: 30,// Start 30px below its original position
    duration: 0.5, // Duration of the animation
    ease: "power1.out", // Easing for a smooth transition
    scrollTrigger: {
        trigger: ".resources",
        scroller: ".main", // The element that triggers the animation
        start: "top 90%", // Start the animation when #section3 is 75% from the top of the viewport
        end: "top 20%", // End the animation when #section3 is 25% from the top of the viewport
    }
});

gsap.to('.scrolling-text', {
    duration: 20,
    ease: 'none',
    repeat: -1,
    scrollTrigger: {
        trigger: '#section7',
        scroller: ".main",
        start: 'top 50%',
        end: 'end 25% ',
    }
});

// section8

gsap.to(split15.chars, {
    y: 0, // Move elements 50px down for reveal effect
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social-media",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%"
    }
});

gsap.to(split16.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social1",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split17.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social2",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split18.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social3",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split19.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social4",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split20.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social5",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split21.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social6",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});
gsap.to(split22.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".social7",
        scroller: ".main",
        start: "top 100%",
        end: "top 20%",
    }
});

// section9
const sect9TL = gsap.timeline()

sect9TL.to(split23.chars, {
    y: 0,
    duration: 0.5,
    stagger: 0.03,
    scrollTrigger: {
        trigger: "#section9",
        scroller: ".main",
        start: "top 70%",
        end: "top 20%",
    }
}, "at-same");

sect9TL.to(split24.chars, {
    y: 0,
    duration: 0.5,
    stagger: 0.03,
    scrollTrigger: {
        trigger: "#section9",
        scroller: ".main",
        start: "top 70%",
        end: "top 20%",
    }
}, "at-same");

sect9TL.from("#section9 .btn", {
    scale: 0,
    y: 60,// Start 30px below its original position
    duration: 0.5, // Duration of the animation
    ease: "power1.out", // Easing for a smooth transition
    scrollTrigger: {
        trigger: "#section9",
        scroller: ".main", // The element that triggers the animation
        start: "top 70%", // Start the animation when #section3 is 75% from the top of the viewport
        end: "top 20%", // End the animation when #section3 is 25% from the top of the viewport
    }
}, "at-same");

gsap.to(split25.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".first-h1",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
    }
});

gsap.to(split26.chars, {
    y: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".second-h1",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
    }
});

gsap.from("#section9 .idea-con button", {
    scale: 0,
    y: 60,// Start 30px below its original position
    duration: 0.5, // Duration of the animation
    ease: "power1.out", // Easing for a smooth transition
    scrollTrigger: {
        trigger: ".second-h1",
        scroller: ".main", // The element that triggers the animation
        start: "top 70%", // Start the animation when #section3 is 75% from the top of the viewport
        end: "top 20%", // End the animation when #section3 is 25% from the top of the viewport
    }
});



// cursor
main.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        ease: "back.out",
        duration: 0.1 // Add duration for smoother movement
    });
});

const section_menu = document.querySelector('section')
section_menu.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        ease: "back.out",
        duration: 0.1 // Add duration for smoother movement
    });
});


// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


//

const texts = ["P R O D U C T.   D E S I G N.   I D E N T I F Y.   ", "P R O D U C T.   D E S I G N.   I D E N T I F Y.   ", "P R O D U C T.   D E S I G N.   I D E N T I F Y.   "]; // Define text for each circular text
const containers = ["circular-text-1", "circular-text-2", "circular-text-3"]; // IDs for each circular text container

containers.forEach((containerId, index) => {
    const container = document.getElementById(containerId);
    const text = texts[index]; // Get the corresponding text for each container
    const radius = 50; // Radius of the circular text path
    const characters = text.split("").join(" "); // Split the text into characters and add spaces between them
    const angleIncrement = 360 / characters.length; // Calculate angle between each character

    characters.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        const angle = angleIncrement * i; // Calculate the angle for each character
        span.style.transform = `rotate(${angle}deg) translateX(${radius}px)`;
        container.appendChild(span);
    });
});


// Small text

const texts_sm = ["c o n t a c t  .  c o n t a c t  .  c o n t a c t  .  c o n t a c t  .  "]; // Define text for each circular text
const containers_sm = ["cir-txt-1"]; // IDs for each circular text container
let radius = 55; // Initial radius of the circular text path

containers_sm.forEach((containerId, index) => {
    const container = document.getElementById(containerId);
    const text = texts_sm[index]; // Get the corresponding text for each container
    const characters = text.split("").join(" "); // Split the text into characters and add spaces between them
    const angleIncrement = 360 / characters.length; // Calculate angle between each character

    characters.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        const angle = angleIncrement * i; // Calculate the angle for each character
        span.style.transform = `rotate(${angle}deg) translateX(${radius}px)`;
        container.appendChild(span);
    });

    // Add hover effect to increase radius
    const box = container.closest('.box-sm');
    box.addEventListener('mouseover', () => {
        gsap.to({ radius: 55 }, { // Initial state
            radius: 65, // End state
            duration: 0.5, // Duration of the animation
            onUpdate: function () {
                adjustRadius(container, characters, this.targets()[0].radius); // Adjust radius during animation
            }
        });
    });

    box.addEventListener('mouseout', () => {
        gsap.to({ radius: 65 }, { // Initial state
            radius: 55, // End state
            duration: 0.5, // Duration of the animation
            onUpdate: function () {
                adjustRadius(container, characters, this.targets()[0].radius); // Adjust radius during animation
            }
        });
    });
});

// Function to adjust radius of circular text
function adjustRadius(container, characters, newRadius) {
    const angleIncrement = 360 / characters.length; // Calculate angle between each character
    Array.from(container.children).forEach((span, i) => {
        const angle = angleIncrement * i;
        span.style.transform = `rotate(${angle}deg) translateX(${newRadius}px)`;
    });
}


// cursor black
const sectionblack = document.querySelectorAll("#section4,#section6,#section8,#section9")

sectionblack.forEach(section => {
    section.addEventListener('mouseenter', (event) => {
        gsap.to(cursor1, {
            scale: 1,
            backgroundColor: "#ffffff",
            duration: 0.1
        });
    });

    section.addEventListener('mouseleave', (event) => {
        gsap.to(cursor1, {
            scale: 1,
            backgroundColor: "#000000",
            duration: 0.1
        });
    });
});

// section
const hamburger = document.querySelector(".box-sm svg");
let section_right = document.querySelector('#section')
let body = document.querySelector("body");
let B_name = document.querySelector(".brand-name h3");
let close = document.querySelector("#section i");
let secTL = gsap.timeline();
let mixblend = document.querySelector("#section3")
let mixblend2 = document.querySelector("#section5")

secTL.to("#section", {
    right: '0%',
    duration: 0.2,
});

secTL.pause();

hamburger.addEventListener('click', (e) => {
    section_right.style.display = "block"
    secTL.play();
});

close.addEventListener('click', (e) => {
    section_right.style.display = "none"
    secTL.reverse();
});


const flip = document.querySelectorAll('.y-flip,.y-flip2')

flip.forEach((section) => {
    section.addEventListener('mouseenter', (e) => {
        cursor1.style.backgroundColor = "white"
        cursor1.style.mixBlendMode = 'difference';
        gsap.to(cursor1, {
            scale: 4,
        });
    })
})

flip.forEach((section) => {
    section.addEventListener('mouseleave', (e) => {
        cursor1.style.mixBlendMode = 'normal';
        gsap.to(cursor1, {
            scale: 1,
        });
    })
})


const svg = document.querySelector('#section i')

svg.addEventListener('mouseenter', (e) => {
    cursor1.style.backgroundColor = "white"
    cursor1.style.mixBlendMode = 'difference';
    gsap.to(cursor1, {
        scale: 4,
    });
})

svg.addEventListener('mouseleave', (e) => {
    cursor1.style.backgroundColor = ""
    cursor1.style.mixBlendMode = 'normal';
    gsap.to(cursor1, {
        scale: 1,
    });
})

const blend = document.querySelector(".box-sm svg")

blend.addEventListener('mouseenter', (e) => {
    hamburger.style.color = "white"
    cursor1.style.mixBlendMode = 'difference';
    gsap.to(cursor1, {
        scale: 4,
    });
})

blend.addEventListener('mouseleave', (e) => {
    hamburger.style.color = ""
    cursor1.style.mixBlendMode = 'normal';
    gsap.to(cursor1, {
        scale: 1,
    });
})




// sec2vid
const sec2vid = document.querySelector("#section2 video");
const imgElement = document.querySelector("#imgElement");

sec2vid.addEventListener('mouseenter', (event) => {
    // Set the SVG inside the cursor
    cursor1.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='3' height='3' color='#000000' fill='none'>
    <path d='M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z' stroke='currentColor' stroke-width='1.5' stroke-linejoin='round'/>
</svg>`;


    gsap.to(cursor1, {
        scale: 8,
        backgroundColor: "#fff",
        duration: 0.2,
        transformOrigin: "center"
    });


    gsap.to(imgElement, {
        opacity: 0,
        duration: 0.2
    });
});

sec2vid.addEventListener('mouseleave', (event) => {
    cursor1.innerHTML = "";
    gsap.to(cursor1, {
        scale: 1,
        backgroundColor: "#111",
        duration: 0.3
    });

    // Fade imgElement back in
    gsap.to(imgElement, {
        opacity: 1,
        duration: 0.5
    });
});


// section4 img,vid

for (let i = 1; i <= 10; i++) {
    const content = document.querySelectorAll(`.small-container .small${i}`);
    content.forEach(section => {
        section.addEventListener('mouseenter', (event) => {
            cursor1.innerHTML = "Explore"
            cursor1.style.fontSize = "0.1rem"
            cursor1.style.color = "black"
            gsap.to(cursor, {
                scale: 8,
                backgroundColor: "#ffffff"
            })

            gsap.to(content, {
                opacity: 0,
                duration: 0.5
            });
        });
    })

    content.forEach(section => {
        section.addEventListener('mouseleave', (event) => {
            cursor1.innerHTML = ""
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "#fff"
            })

            gsap.to(content, {
                opacity: 1,
                duration: 0.5
            });
        });
    })
}

// section6 Drag
const Drag = document.querySelector('.drag-main')

Drag.addEventListener('mouseenter', (event) => {
    cursor1.innerHTML = "Drag"
    cursor1.style.fontSize = "0.1rem"
    cursor1.style.color = "black"
    gsap.to(cursor, {
        scale: 8,
        backgroundColor: "#ffffff"
    })

    gsap.to(content, {
        opacity: 0,
        duration: 0.5
    });
});

Drag.addEventListener('mouseleave', (event) => {
    cursor1.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })

    gsap.to(content, {
        opacity: 1,
        duration: 0.5
    });
});


// section7 Drag
const Drag2 = document.querySelector('.sec7cur')

Drag2.addEventListener('mouseenter', (event) => {
    cursor1.innerHTML = "Drag"
    cursor1.style.fontSize = "0.1rem"
    cursor1.style.color = "white"
    gsap.to(cursor, {
        scale: 8,
        backgroundColor: "#000"
    })

    gsap.to(content, {
        opacity: 0,
        duration: 0.5
    });
});

Drag2.addEventListener('mouseleave', (event) => {
    cursor1.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#000"
    })

    gsap.to(content, {
        opacity: 1,
        duration: 0.5
    });
});



// section7 marquee animation

gsap.registerPlugin(ScrollTrigger);

const scrollingText = gsap.utils.toArray('.rail h4, .rail video');

const tl = horizontalLoop(scrollingText, {
    repeat: -1,
});

let speedTween;

ScrollTrigger.create({
    trigger: ".scrolling-text",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
        speedTween && speedTween.kill();
        speedTween = gsap.timeline()
            .to(tl, {
                timeScale: 3 * self.direction,
                duration: 0.25
            })
            .to(tl, {
                timeScale: 1 * self.direction,
                duration: 1.5
            }, "+=0.5")
    },
})


Observer.create({
    onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) {
            factor *= -1;
        }
        gsap.timeline({
            defaults: {
                ease: "none",
            }
        })
            .to(tl, { timeScale: factor * 2.5, duration: 0.2 })
            .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
    }
});


function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, {
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

