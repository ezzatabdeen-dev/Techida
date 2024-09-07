document.querySelectorAll('.openPopup').forEach((open) => {
    open.addEventListener('click', (event) => {
        event.stopPropagation();
        const clickedPopup = open.querySelector('ul');

        document.querySelectorAll('.openPopup ul').forEach((popup) => {
            if (popup !== clickedPopup) {
                popup.classList.remove('active');
            }
        });

        clickedPopup.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.openPopup ul').forEach((popup) => {
        popup.classList.remove('active');
    });
});

// DROP MENU ITEM
document.querySelectorAll('.open-accordionMenu').forEach(header => {
    const content = header.nextElementSibling;
    if (content && content.classList.contains('content-accordionMenu')) {
        // Initialize the accordion (closed state)
        content.style.maxHeight = '0px';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease-out';

        header.addEventListener('click', () => {
            const isActive = header.classList.toggle('active');
            const icon = header.querySelector('ion-icon');
            
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.setAttribute('name', 'chevron-up-outline');
            } else {
                content.style.maxHeight = '0px';
                if (icon) icon.setAttribute('name', 'chevron-down-outline');
            }

            // Close other open accordions
            document.querySelectorAll('.open-accordionMenu.active').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    const otherContent = otherHeader.nextElementSibling;
                    if (otherContent && otherContent.classList.contains('content-accordionMenu')) {
                        otherContent.style.maxHeight = '0px';
                    }
                    const otherIcon = otherHeader.querySelector('ion-icon');
                    if (otherIcon) otherIcon.setAttribute('name', 'chevron-down-outline');
                }
            });
        });
    }
});

// change mode theme
// let modeToggle = document.querySelectorAll('.mode-toggle');
// let body = document.body;
// let cssLink = document.querySelector('link[href^="css/"]');

// function loadTheme() {
//     modeToggle.forEach((buttonMode) => {
//         buttonMode.classList.add('infinite-rotate');

//         buttonMode.addEventListener('click', () => {
//             let modeIcon = buttonMode.querySelectorAll('.mode-icon');

//             modeIcon.forEach((i) => {
//                 if (i.classList.contains('bi-brightness-high-fill')) {
//                     i.classList.remove('bi-brightness-high-fill');
//                     i.classList.add('bi-moon-fill');
//                     cssLink.href = 'css/light.css';
//                     buttonMode.classList.remove('infinite-rotate');
//                 } else {
//                     i.classList.remove('bi-moon-fill');
//                     i.classList.add('bi-brightness-high-fill');
//                     cssLink.href = 'css/global.css';
//                     buttonMode.classList.add('infinite-rotate');
//                 }
//             });
//         });
//     });
// }
// window.addEventListener('load', () => { loadTheme(); });

let modeToggle = document.querySelectorAll('.mode-toggle');
let body = document.body;
let cssLink = document.querySelector('link[href^="css/"]');

function loadTheme() {
    // Check if a theme is stored in local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        // Apply the stored theme
        if (storedTheme === 'dark') {
            body.classList.add('dark-mode');
            cssLink.href = 'css/light.css';
            updateThemeToggle('dark');
        } else {
            body.classList.remove('dark-mode');
            cssLink.href = 'css/global.css';
            updateThemeToggle('light');
        }
    }

    modeToggle.forEach((buttonMode) => {
        buttonMode.classList.add('infinite-rotate');

        buttonMode.addEventListener('click', () => {
            let modeIcon = buttonMode.querySelectorAll('.mode-icon');

            modeIcon.forEach((i) => {
                if (i.classList.contains('bi-brightness-high-fill')) {
                    i.classList.remove('bi-brightness-high-fill');
                    i.classList.add('bi-moon-fill');
                    body.classList.add('dark-mode');
                    cssLink.href = 'css/light.css';
                    buttonMode.classList.remove('infinite-rotate');
                    localStorage.setItem('theme', 'dark');
                } else {
                    i.classList.remove('bi-moon-fill');
                    i.classList.add('bi-brightness-high-fill');
                    body.classList.remove('dark-mode');
                    cssLink.href = 'css/global.css';
                    buttonMode.classList.add('infinite-rotate');
                    localStorage.setItem('theme', 'light');
                }
            });
        });
    });
}

function updateThemeToggle(theme) {
    modeToggle.forEach((buttonMode) => {
        let modeIcon = buttonMode.querySelectorAll('.mode-icon');
        modeIcon.forEach((i) => {
            if (theme === 'dark') {
                i.classList.remove('bi-brightness-high-fill');
                i.classList.add('bi-moon-fill');
                buttonMode.classList.remove('infinite-rotate');
            } else {
                i.classList.remove('bi-moon-fill');
                i.classList.add('bi-brightness-high-fill');
                buttonMode.classList.add('infinite-rotate');
            }
        });
    });
}

window.addEventListener('load', () => { loadTheme(); });

// NAV2
document.getElementById('openNav2').addEventListener('click', (event) => {
    event.stopPropagation();
    let nav2 = document.querySelector('.dropMenu');
    nav2.classList.toggle('active');
    body.classList.toggle('body-no-scroll');
});

document.addEventListener('click', (event) => {
    let nav2 = document.querySelector('.dropMenu');
    if (nav2.classList.contains('active') && !nav2.contains(event.target)) {
        nav2.classList.remove('active');
        body.classList.remove('body-no-scroll');
    }
});

// particles
document.addEventListener('DOMContentLoaded', async function () {
    await tsParticles.load("particle-container", {
        fullScreen: { enable: false },
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#16a34a", "#0E5293", "#8AB2D2"]
            },
            links: {
                enable: true,
                distance: 150,
                opacity: 0.3
            },
            responsive: [
                {
                    maxWidth: 800,
                    options: {
                        particles: {
                            number: {
                                value: 70
                            }
                        }
                    }
                }
            ],
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce"
                }
            },
            size: {
                value: { min: 3, max: 5 },
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            }
        },
        detectRetina: true,
        fpsLimit: 60
    });
});

// hero section perspective
const perspectiveContainer = document.getElementById('perspectiveContainer');
const heroImage = document.getElementById('heroImage');

perspectiveContainer.addEventListener('mousemove', (e) => {
    const { width, height } = perspectiveContainer.getBoundingClientRect();
    const mouseX = e.clientX - perspectiveContainer.offsetLeft;
    const mouseY = e.clientY - perspectiveContainer.offsetTop;

    const rotateX = (mouseY / height - 0.5) * 70;
    const rotateY = (mouseX / width - 0.5) * -70;

    heroImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

perspectiveContainer.addEventListener('mouseleave', () => {
    heroImage.style.transform = 'rotateX(0) rotateY(0)';
});

// Scroll Counter Animation
const animatedCounters = new Set();

function animateCounter(element) {
    if (animatedCounters.has(element)) return;

    animatedCounters.add(element);

    const targetCount = parseInt(element.getAttribute('data-count'));
    let currentCount = 0;
    const interval = setInterval(() => {
        currentCount++;
        element.textContent = currentCount;
        if (currentCount >= targetCount) {
            clearInterval(interval);
        }
    }, 50);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkCounters() {
    const counterItems = document.querySelectorAll('.counter-items');
    counterItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.querySelectorAll('span[data-count]').forEach(animateCounter);
        }
    });
}

window.addEventListener('scroll', checkCounters);
document.addEventListener('DOMContentLoaded', checkCounters);

// SECTION EIGHT
const projects = {
    all: [
        { image: "images/1.jpg", title: "tansiApp", category: "mobile application", tags: ["#react", "#HTML", "#next_js", "#node"] },
        { image: "images/2 (1).jpg", title: "tansiApp", category: "mobile application", tags: ["#Js", "#HTML", "#next_js", "#node"] },
        { image: "images/3.jpg", title: "imolas", category: "mobile application", tags: ["#redux", "#HTML", "#next_js", "#gsap"] },
        { image: "images/4.png", title: "abertonApp", category: "mobile application", tags: ["#react", "#HTML", "#next_js", "#node"] },
        { image: "images/5.jpeg", title: "Fitnessapp", category: "web application", tags: ["#react", "#PHP", "#next_js", "#node"] },
        { image: "images/6.jpg", title: "Spark", category: "web application", tags: ["#react", "#HTML", "#ruby", "#node"] }
    ],
    mobile: [
        { image: "images/1.jpg", title: "tansiApp", category: "mobile application", tags: ["#react", "#HTML", "#next_js", "#node"] },
        { image: "images/2 (1).jpg", title: "tansiApp", category: "mobile application", tags: ["#Js", "#HTML", "#next_js", "#node"] },
    ],
    data: [
        { image: "images/4.png", title: "abertonApp", category: "mobile application", tags: ["#react", "#HTML", "#next_js", "#node"] },
        { image: "images/6.jpg", title: "Spark", category: "web application", tags: ["#react", "#HTML", "#ruby", "#node"] }
    ],
    web: [
        { image: "images/3.jpg", title: "imolas", category: "mobile application", tags: ["#redux", "#HTML", "#next_js", "#gsap"] },
        { image: "images/4.png", title: "abertonApp", category: "mobile application", tags: ["#react", "#HTML", "#next_js", "#node"] },
        { image: "images/5.jpeg", title: "Fitnessapp", category: "web application", tags: ["#react", "#PHP", "#next_js", "#node"] }
    ]
};

function createProjectCard(project) {
    return `
        <div class="card relative rounded-lg scale-xy-plus-manage" data-scroll="scale-xy-plus">
            <img src="${project.image}" alt="${project.title}">
            <div class="about-card flex flex-column justify-end p-full-1-5 transition-03">
                <h3 class="text-5 text-Slate-1 font-weight-800 transform-upper m-b-02">${project.title}</h3>
                <h6 class="text-3 text-Slate-1">${project.category}</h6>
                <div class="about-ahsh flex flex-nowrap gap-lg p-y-05">
                    ${project.tags.map(tag => `<span class="text-2 text-Green-6 font-weight-700 pointer">${tag}</span>`).join('')}
                </div>
                <div class="link">
                    <a href="#" class="text-4 text-Green-7 font-weight-600">view project</a>
                </div>
            </div>
        </div>
    `;
}

function displayProjects(category) {
    const root = document.getElementById('root');
    root.innerHTML = '';
    projects[category].forEach(project => {
        root.innerHTML += createProjectCard(project);
    });
}

function setActiveCategory(category) {
    const navItems = document.querySelectorAll('.nav-section-8 li');
    navItems.forEach(item => {
        if (item.textContent.toLowerCase() === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function initializePortfolio() {
    const navItems = document.querySelectorAll('.nav-section-8 li');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const category = this.textContent.toLowerCase();
            displayProjects(category);
            setActiveCategory(category);
        });
    });

    // Display all projects and set 'All' as active by default
    displayProjects('all');
    setActiveCategory('all');
}

// Initialize the portfolio when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);

// SECTION NINE SLIDER
$(document).ready(function () {
    $('.owl-carousel.client').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

// SECTION ELEVEN SLIDER
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 4,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1455: {
                items: 4
            }
        }
    });
});

// ACCORDION
document.querySelectorAll('.parent').forEach(parent => {
    const header = parent.querySelector('.header-accordion');
    const content = parent.querySelector('.content-accordion');
    const contentInner = content.querySelector('div');

    header.addEventListener('click', () => {
        parent.classList.toggle('active');

        if (parent.classList.contains('active')) {
            content.style.maxHeight = contentInner.offsetHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }

        document.querySelectorAll('.parent').forEach(otherParent => {
            if (otherParent !== parent && otherParent.classList.contains('active')) {
                otherParent.classList.remove('active');
                otherParent.querySelector('.content-accordion').style.maxHeight = '0px';
            }
        });
    });
});

// TO UP
const progressContainer = document.getElementById('progress');
const path = document.querySelector('#progress-circle path');
const scrollTopBtn = document.querySelector('#scroll-top-btn');
let header = document.getElementById('header');

function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    const pathLength = path.getTotalLength();
    const dashOffset = pathLength - (pathLength * scrollPercentage / 100);
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = dashOffset;

    if (scrollPercentage > 2) {
        progressContainer.classList.add('show');
    } else {
        progressContainer.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', updateProgress);
updateProgress();

// SCROLL EFFECT
function handleScroll() {
    const elements = document.querySelectorAll('[data-scroll]');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        const animationClass = el.getAttribute('data-scroll');

        if (isVisible) {
            el.classList.add(animationClass);
        } else {
            el.classList.remove(animationClass);
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

// PROGRESS S-5
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentageText = progressBar.closest('li').querySelector('span').textContent;
                const percentage = percentageText.replace('%', '');
                
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = percentage + '%';
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.1 });

    progressBars.forEach(bar => observer.observe(bar));
});

// LOADING
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {

    document.body.style.overflow = 'auto';
    document.querySelector('.loading').style.display = 'none';

});