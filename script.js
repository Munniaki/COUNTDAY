// ============================================
// CONFIGURATION - ALL TEXT IS CHANGEABLE HERE
// ============================================
const CONFIG = {
    // TEST MODE - Set to true to show test bar
    TEST_MODE: false,

    // Target date for countdown (April 29, 2026)
    TARGET_DATE: new Date('2026-04-29T00:00:00').getTime(),

    // Investigation date - when you confessed (February 27, 2026)
    INVESTIGATION_DATE: '2026-02-27',

    // Fake initial date shown to user
    FAKE_INITIAL_DATE: '2026-03-15',

    // Hidden image URL for ASCII art
    ASCII_IMAGE_URL: 'https://picsum.photos/400/400',

    // LOCK PAGE - SUN MESSAGES (Compliments connected to Sun)
    SUN_MESSAGES: [
        "You are the sun rays, that lights up every corner of my world",
        "Your smile shines brighter than the morning sun",
        "Like the sun, that vibe gives warmth to everyone around you",
        "You are the light that chases away all my darkness",
        "You change the shadow when im with you",
        "You radiate beauty that rivals the sunrise",
        "Your presence brings daylight to my darkest days",
        "You are the sun that makes my world go round"
    ],

    // LOCK PAGE - MOON PHASES (5 phases showing heart growing)
    MOON_PHASES: [
        { 
            name: "New Moon", 
            message: "In the darkness, I patiently wait for your glow",
            class: "new-moon"
        },
        { 
            name: "Waxing Crescent", 
            message: "Then we bacame a close, a small light in my darkness...",
            class: "waxing-crescent"
        },
        { 
            name: "First Quarter", 
            message: "My heart began to grow, falling so hard that you I am filled with thoughts of you...",
            class: "first-quarter"
        },
        { 
            name: "Waxing Gibbous", 
            message: "Almost full,Your light spills more each night and impossible to ignore",
            class: "waxing-gibbous"
        },
        { 
            name: "Full Moon", 
            message: "My heart is now complete, The Moon is beautiful isn't it ",
            class: "full-moon"
        }
    ],

    // LOCK PAGE TEXTS
    LOCK: {
        TITLE: "For April",
        SUBTITLE: "From Clark",
        COUNTDOWN_TITLE: "Counting down to your special day",
        HINT: "Tap",
        UNLOCK_MESSAGE: "🎉 The wait is over! Your special day has arrived! 🎉",
        UNLOCK_BUTTON: "Click to Continue ❤"
    },

    // MESSAGE PAGE - LETTER CONTENT
    LETTER_LINES: [
        "My Dearest April,",
        "",
        "Happy Birthday to the one that lightens up my day",
        "May your wish be granted by our Heavenly Father",
        "I hope you get to celebrate surrounded by the people",
        "you love most.",
        "I hope nga this will bring you happiness ",
        "that will last until forever",
        "",
        "I wish nga you will have good health,",
        "and more opportunities",
        "I wish nga ma achieve nimo imong mga goals",
        "",
        "Always remember,On this special day, I want you",
        "to know that you have me. I will be there because you are",
        "my best friend, and my greatest adventure.",
        "",
        "Happy Birthday, my Munni.",
        "",
        "Yours, truly",
        "Clark ❤"
    ],

    // MESSAGE PAGE TEXTS
    MESSAGE: {
        TITLE: "A Letter For You",
        SHAKE_HINT: "📱 Shake phone or 🖱️ shake mouse to open",
        CONTINUE_BTN: "Continue →"
    },

    // INVESTIGATION PAGE
    INVESTIGATION: {
        TITLE: "The Memory",
        QUOTE: "Remember when I confessed...",
        QUESTION: "When did that moment happen?",
        HINT_TEXT: "Touch moon or sun for hints...",
        WRONG_ANSWER: "It might be wrong....try again",
        UNLOCKING: "The memory unlocks...",
        UNLOCKED: "Memory Unlocked!",
        MOON_SIDE: "The night holds memories",
        SUN_SIDE: "The day reveals truth",
        CONTINUE_BTN: "Discover the Truth →",
        MOON_HINTS: [
            "The night was young...",
            "Stars were shining bright...",
            "It was a special evening...",
            "February holds the memory...",
            "The moon witnessed my confession..."
        ],
        SUN_HINTS: [
            "The day was warm...",
            "Sunlight filled the room...",
            "It happened before a practice...",
            "The 27th was the date...",
            "Expect the unecpected..."
        ]
    },

    // CONFESSION PAGE - HEART MESSAGES
    CONFESSION: {
        TITLE: "My Heart Speaks",
        INTRO_TEXT: "Tap the heart",
        HEART_MESSAGES: [
            "You make my heart skip a beat every time I see you",
            "You are the missing piece that completes my soul",
            "My love for you grows stronger with every sunrise",
            "You are my today and all of my tomorrows",
            "In your eyes, I found my home",
            "You are the best thing that ever happened to me",
            "Every moment with you is my favorite place",
            "You are the reason my heart beats",
            "I like you more than words can express"
        ],
        MAIN_MESSAGE: "April, every moment with you is a treasure",
        SPECIAL_LINE_1: "You are my sun, my moon, and all my stars.",
        SPECIAL_LINE_2: "I like you more than words can express.",
        CONTINUE_BTN: "Continue →"
    },

    // GAME PAGE
    GAME: {
        TITLE: "Catch My Heart",
        INSTRUCTIONS: "Catch 10 Ice Creams 🍦 Avoid Cold ❄️",
        CONTROLS: "Drag to move the bowl",
        START_BTN: "Start Game",
        RETRY_BTN: "Try Again",
        WIN_TITLE: "Sweet Victory! 🍦",
        WIN_MESSAGE: "You caught all the ice cream!",
        CONTINUE_BTN: "Continue ❤"
    },

    // ASCII PAGE
    ASCII: {
        TITLE: "My Final Message",
        FINAL_MESSAGE: "I MISS YOU",
        RESTART_BTN: "Start Again ↺"
    },

    // TAURUS CONSTELLATION
    TAURUS: {
        LABEL: "♉ Taurus - Your Stars",
        STARS: [
            {x: 0.4, y: 0.3, mag: 1}, {x: 0.6, y: 0.4, mag: 2},
            {x: 0.5, y: 0.6, mag: 1.5}, {x: 0.3, y: 0.5, mag: 2.5},
            {x: 0.7, y: 0.5, mag: 2}, {x: 0.45, y: 0.45, mag: 3}
        ],
        LINES: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4], [2, 5]]
    }
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentPage = 0;
let sunClicked = false;
let moonClicked = false;
let currentMoonPhase = 0;
let currentSunMessage = 0;
let typeWriterTimeout;
let confessionMessageIndex = 0;
let shakeDetected = false;
let isUnlocked = false;
let gameState = {
    score: 0,
    time: 30,
    combo: 1,
    isPlaying: false,
    items: [],
    powerUps: [],
    player: { x: 0, y: 0, width: 60, height: 45 },
    animationId: null,
    timeFreeze: false,
    magnet: false,
    shield: false
};
let zoomScale = 1;
let asciiImageLoaded = false;
let asciiImageElement = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Show test bar if TEST_MODE is true
    if (CONFIG.TEST_MODE) {
        const testBar = document.getElementById('testBar');
        if (testBar) testBar.style.display = 'flex';
    }

    initLockPage();
    initCountdown();
    initMessagePage();
    initInvestigationPage();
    initConfessionPage();
    initGame();

    // Preload ASCII art image
    preloadASCIIArtImage();

    // Check unlock status periodically
    setInterval(checkUnlockStatus, 60000); // Check every minute
});

// ============================================
// TEST BAR NAVIGATION
// ============================================
function goToPage(pageNum) {
    // Hide all pages
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.remove('active');
        if (index === pageNum) {
            page.classList.add('active');
        }
    });
    currentPage = pageNum;

    // Page-specific initialization
    if (pageNum === 0) {
        initLockPage();
    } else if (pageNum === 1) {
        resetLetter();
        initFireflies();
        initShakeDetection();
    } else if (pageNum === 2) {
        resetInvestigation();
        initTaurusConstellation();
        initInvestigationParticles();
    } else if (pageNum === 3) {
        resetConfession();
        initPaperHearts();
    } else if (pageNum === 4) {
        resetGame();
    } else if (pageNum === 5) {
        // ASCII page
    }
}

// ============================================
// LOCK PAGE - DATE UNLOCK ONLY
// ============================================
function initLockPage() {
    // Get current hour in Philippines timezone (GMT+8)
    const now = new Date();
    const phTimeString = now.toLocaleString('en-US', { timeZone: 'Asia/Manila' });
    const phDate = new Date(phTimeString);
    const hour = phDate.getHours();

    // Night: 6 PM (18:00) to 6 AM (06:00)
    const isNight = hour >= 18 || hour < 6;

    const dayBg = document.getElementById('dayBg');
    const nightBg = document.getElementById('nightBg');
    const cloudsContainer = document.getElementById('cloudsContainer');
    const starsContainer = document.getElementById('starsContainer');
    const shootingStarsContainer = document.getElementById('shootingStarsContainer');
    const hint = document.getElementById('lockHint');
    const sunWrapper = document.getElementById('sunWrapper');
    const moonWrapper = document.getElementById('moonWrapper');

    // Reset all backgrounds first
    if (dayBg) dayBg.classList.remove('active');
    if (nightBg) nightBg.classList.remove('active');
    if (cloudsContainer) cloudsContainer.classList.remove('active');
    if (starsContainer) starsContainer.classList.remove('active');
    if (shootingStarsContainer) shootingStarsContainer.classList.remove('active');
    if (sunWrapper) sunWrapper.classList.remove('show');
    if (moonWrapper) moonWrapper.classList.remove('show');

    if (isNight) {
        // NIGHT MODE
        if (nightBg) nightBg.classList.add('active');
        if (starsContainer) starsContainer.classList.add('active');
        if (shootingStarsContainer) shootingStarsContainer.classList.add('active');
        if (moonWrapper) moonWrapper.classList.add('show');
        if (hint) hint.textContent = "Tap the Moon to see my heart's journey";

        // Create stars if not already created
        createStars();
    } else {
        // DAY MODE
        if (dayBg) dayBg.classList.add('active');
        if (cloudsContainer) cloudsContainer.classList.add('active');
        if (sunWrapper) sunWrapper.classList.add('show');
        if (hint) hint.textContent = "Tap the Sun to see my compliments";
    }

    // Add sun rays
    const sunRays = document.getElementById('sunRays');
    if (sunRays && sunRays.children.length === 0) {
        for (let i = 0; i < 12; i++) {
            const ray = document.createElement('div');
            ray.className = 'sun-ray';
            ray.style.transform = `rotate(${i * 30}deg)`;
            sunRays.appendChild(ray);
        }
    }

    // Set initial moon phase
    const moon = document.getElementById('moon');
    if (moon) {
        updateMoonPhase();
    }

    // Check if already unlocked
    checkUnlockStatus();

    // Bind click events - just for compliments/phases, NOT for unlocking
    const sun = document.getElementById('sun');
    const moonEl = document.getElementById('moon');

    if (sun) {
        sun.removeEventListener('click', handleSunClick);
        sun.addEventListener('click', handleSunClick);
    }

    if (moonEl) {
        moonEl.removeEventListener('click', handleMoonClick);
        moonEl.addEventListener('click', handleMoonClick);
    }
}

function checkUnlockStatus() {
    // Get current date in Philippines
    const now = new Date();
    const phTimeString = now.toLocaleString('en-US', { timeZone: 'Asia/Manila' });
    const phDate = new Date(phTimeString);

    // Check if it's April 29, 2026 or later
    const targetDate = new Date('2026-04-29T00:00:00');

    // For testing: you can change this condition
    // Currently set to unlock on April 29, 2026 or later
    const shouldUnlock = phDate >= targetDate;

    // TEST MODE OVERRIDE: If TEST_MODE is true, you can add a test unlock
    // Remove this in production if you want strict date checking

    if (shouldUnlock && !isUnlocked) {
        isUnlocked = true;
        showUnlockButton();
    }
}

function showUnlockButton() {
    const unlockMessage = document.getElementById('unlockMessage');
    const unlockBtn = document.getElementById('unlockBtn');
    const lockHint = document.getElementById('lockHint');

    if (unlockMessage) {
        unlockMessage.textContent = CONFIG.LOCK.UNLOCK_MESSAGE;
        unlockMessage.classList.add('show');
    }

    if (unlockBtn) {
        unlockBtn.textContent = CONFIG.LOCK.UNLOCK_BUTTON;
        unlockBtn.classList.add('show');
    }

    if (lockHint) {
        lockHint.style.display = 'none';
    }
}

function createStars() {
    const container = document.getElementById('starsContainer');
    if (!container) return;

    // Only create stars if not already created
    if (container.children.length > 0) return;

    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        container.appendChild(star);
    }
}

function handleSunClick() {
    const messageEl = document.getElementById('celestialMessage');
    const messages = CONFIG.SUN_MESSAGES;

    currentSunMessage = (currentSunMessage + 1) % messages.length;
    if (messageEl) {
        messageEl.textContent = messages[currentSunMessage];
        messageEl.classList.add('show');
    }

    const sun = document.getElementById('sun');
    if (sun) {
        sun.style.transform = 'scale(1.15)';
        setTimeout(() => {
            sun.style.transform = 'scale(1)';
        }, 300);
    }

    // Auto hide message after 3 seconds
    setTimeout(() => {
        if (messageEl) messageEl.classList.remove('show');
    }, 3000);
}

function handleMoonClick() {
    const messageEl = document.getElementById('celestialMessage');
    const phaseIndicator = document.getElementById('phaseIndicator');

    currentMoonPhase = (currentMoonPhase + 1) % CONFIG.MOON_PHASES.length;
    const phase = CONFIG.MOON_PHASES[currentMoonPhase];

    if (messageEl) {
        messageEl.innerHTML = `<strong>${phase.name}</strong><br>${phase.message}`;
        messageEl.classList.add('show');
    }

    if (phaseIndicator) {
        phaseIndicator.textContent = `Phase ${currentMoonPhase + 1} of ${CONFIG.MOON_PHASES.length}`;
    }

    updateMoonPhase();

    const moon = document.getElementById('moon');
    if (moon) {
        moon.style.transform = 'scale(1.15)';
        setTimeout(() => {
            moon.style.transform = 'scale(1)';
        }, 300);
    }

    // Auto hide message after 3 seconds
    setTimeout(() => {
        if (messageEl) messageEl.classList.remove('show');
    }, 3000);
}

function updateMoonPhase() {
    const moon = document.getElementById('moon');
    const shadow = document.getElementById('moonShadow');
    if (!moon || !shadow) return;

    const phase = CONFIG.MOON_PHASES[currentMoonPhase];

    // Remove all phase classes
    CONFIG.MOON_PHASES.forEach(p => moon.classList.remove(p.class));
    // Add current phase class
    moon.classList.add(phase.class);

    // Update shadow position based on phase
    const positions = ['0%', '30%', '50%', '70%', '100%'];
    shadow.style.transform = `translateX(${positions[currentMoonPhase]})`;
}

function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.TARGET_DATE - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ============================================
// MESSAGE PAGE - WITH MOUSE SHAKE FOR DESKTOP
// ============================================
function initMessagePage() {
    shakeDetected = false;
    document.getElementById('messageTitle').textContent = CONFIG.MESSAGE.TITLE;
    document.getElementById('shakeHint').textContent = CONFIG.MESSAGE.SHAKE_HINT;
    document.getElementById('messageContinueBtn').textContent = CONFIG.MESSAGE.CONTINUE_BTN;
}

function initFireflies() {
    const container = document.getElementById('firefliesContainer');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        firefly.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        firefly.style.animationDelay = Math.random() * 8 + 's';
        firefly.style.animationDuration = (5 + Math.random() * 5) + 's';
        container.appendChild(firefly);
    }
}

function initShakeDetection() {
    const shakeHint = document.getElementById('shakeHint');

    setTimeout(() => {
        if (shakeHint) shakeHint.classList.add('show');
    }, 1500);

    // MOBILE: Device motion shake detection
    if (window.DeviceMotionEvent) {
        let lastX = 0, lastY = 0, lastZ = 0;
        let moveCounter = 0;

        window.addEventListener('devicemotion', (e) => {
            if (shakeDetected || currentPage !== 1) return;

            const acc = e.accelerationIncludingGravity;
            if (!acc) return;

            const deltaX = Math.abs(acc.x - lastX);
            const deltaY = Math.abs(acc.y - lastY);
            const deltaZ = Math.abs(acc.z - lastZ);

            if (deltaX + deltaY + deltaZ > 25) {
                moveCounter++;
                if (moveCounter > 3) {
                    shakeDetected = true;
                    triggerShakeOpen();
                }
            }

            lastX = acc.x;
            lastY = acc.y;
            lastZ = acc.z;
        });
    }

    // DESKTOP: Mouse shake detection
    let mousePositions = [];
    let lastMouseTime = Date.now();

    document.addEventListener('mousemove', (e) => {
        if (shakeDetected || currentPage !== 1) return;

        const now = Date.now();
        const timeDiff = now - lastMouseTime;

        // Store mouse position with timestamp
        mousePositions.push({
            x: e.clientX,
            y: e.clientY,
            time: now
        });

        // Keep only last 10 positions (last ~200ms)
        if (mousePositions.length > 10) {
            mousePositions.shift();
        }

        // Check for shake pattern
        if (mousePositions.length >= 5) {
            let totalDistance = 0;
            let directionChanges = 0;
            let lastDirection = null;

            for (let i = 1; i < mousePositions.length; i++) {
                const dx = mousePositions[i].x - mousePositions[i-1].x;
                const dy = mousePositions[i].y - mousePositions[i-1].y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                totalDistance += distance;

                // Check direction change on X axis (left-right shaking)
                if (Math.abs(dx) > 5) {
                    const currentDirection = dx > 0 ? 'right' : 'left';
                    if (lastDirection && lastDirection !== currentDirection) {
                        directionChanges++;
                    }
                    lastDirection = currentDirection;
                }
            }

            // Shake detected: rapid direction changes and significant movement
            if (directionChanges >= 3 && totalDistance > 100) {
                shakeDetected = true;
                triggerShakeOpen();
                mousePositions = [];
            }
        }

        lastMouseTime = now;
    });

    // Click/tap fallback
    const waxSeal = document.getElementById('waxSeal');
    if (waxSeal) {
        waxSeal.addEventListener('click', () => {
            if (!shakeDetected) {
                shakeDetected = true;
                triggerShakeOpen();
            }
        });
    }
}

function triggerShakeOpen() {
    const bookWrapper = document.getElementById('bookWrapper');
    const shakeHint = document.getElementById('shakeHint');

    if (bookWrapper) {
        bookWrapper.classList.add('shake-active');
        setTimeout(() => {
            bookWrapper.classList.remove('shake-active');
            openLetter();
        }, 800);
    }

    if (shakeHint) shakeHint.classList.remove('show');
}

function openLetter() {
    const waxSeal = document.getElementById('waxSeal');
    const book = document.getElementById('book');
    const letter = document.getElementById('letter');

    if (!waxSeal || waxSeal.classList.contains('broken')) return;

    waxSeal.classList.add('broken');

    setTimeout(() => {
        if (book) book.classList.add('open');
        setTimeout(() => {
            if (letter) {
                letter.classList.add('show');
                typeWriter();
            }
        }, 300);
    }, 500);
}

function typeWriter() {
    const content = document.getElementById('letterContent');
    const cursor = document.getElementById('cursor');
    const continueBtn = document.getElementById('messageContinueBtn');

    if (!content) return;

    const lines = CONFIG.LETTER_LINES;
    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        if (lineIndex >= lines.length) {
            if (cursor) cursor.style.display = 'none';
            if (continueBtn) continueBtn.classList.add('show');
            return;
        }

        const currentLine = lines[lineIndex];

        if (charIndex < currentLine.length) {
            content.textContent += currentLine[charIndex];
            charIndex++;
            typeWriterTimeout = setTimeout(type, 25);
        } else {
            content.textContent += '\n';
            lineIndex++;
            charIndex = 0;
            typeWriterTimeout = setTimeout(type, 80);
        }
    }

    type();
}

function resetLetter() {
    const waxSeal = document.getElementById('waxSeal');
    const book = document.getElementById('book');
    const letter = document.getElementById('letter');
    const content = document.getElementById('letterContent');
    const cursor = document.getElementById('cursor');
    const continueBtn = document.getElementById('messageContinueBtn');

    if (waxSeal) waxSeal.classList.remove('broken');
    if (book) book.classList.remove('open');
    if (letter) letter.classList.remove('show');
    if (content) content.textContent = '';
    if (cursor) cursor.style.display = 'inline-block';
    if (continueBtn) continueBtn.classList.remove('show');

    if (typeWriterTimeout) clearTimeout(typeWriterTimeout);
    shakeDetected = false;
}

// ============================================
// INVESTIGATION PAGE
// ============================================
function initInvestigationPage() {
    document.getElementById('investigationTitle').textContent = CONFIG.INVESTIGATION.TITLE;
    document.getElementById('investigationQuote').textContent = CONFIG.INVESTIGATION.QUOTE;
    document.getElementById('investigationQuestion').textContent = CONFIG.INVESTIGATION.QUESTION;
    document.getElementById('hintText').textContent = CONFIG.INVESTIGATION.HINT_TEXT;
    document.getElementById('investigateBtn').textContent = CONFIG.INVESTIGATION.CONTINUE_BTN;
    document.getElementById('moonSideText').textContent = CONFIG.INVESTIGATION.MOON_SIDE;
    document.getElementById('sunSideText').textContent = CONFIG.INVESTIGATION.SUN_SIDE;

    const moon = document.getElementById('investigationMoon');
    const sun = document.getElementById('investigationSun');
    const hintText = document.getElementById('hintText');

    let moonHintIndex = 0;
    let sunHintIndex = 0;

    if (moon) {
        moon.addEventListener('click', () => {
            hintText.textContent = CONFIG.INVESTIGATION.MOON_HINTS[moonHintIndex];
            moonHintIndex = (moonHintIndex + 1) % CONFIG.INVESTIGATION.MOON_HINTS.length;
            moon.style.transform = 'scale(1.15)';
            setTimeout(() => moon.style.transform = '', 300);
        });
    }

    if (sun) {
        sun.addEventListener('click', () => {
            hintText.textContent = CONFIG.INVESTIGATION.SUN_HINTS[sunHintIndex];
            sunHintIndex = (sunHintIndex + 1) % CONFIG.INVESTIGATION.SUN_HINTS.length;
            sun.style.transform = 'scale(1.15)';
            setTimeout(() => sun.style.transform = '', 300);
        });
    }

    setFakeDateInDropdowns();
}

function setFakeDateInDropdowns() {
    const yearSelect = document.getElementById('yearSelect');
    const monthSelect = document.getElementById('monthSelect');
    const daySelect = document.getElementById('daySelect');

    if (yearSelect) yearSelect.value = '2026';
    if (monthSelect) monthSelect.value = '03';
    if (daySelect) daySelect.value = '15';
}

function resetInvestigation() {
    const hintText = document.getElementById('hintText');
    const unlockAnimation = document.getElementById('unlockAnimation');

    if (hintText) hintText.textContent = CONFIG.INVESTIGATION.HINT_TEXT;
    if (unlockAnimation) unlockAnimation.classList.remove('show');
    setFakeDateInDropdowns();
}

function checkDate() {
    const yearSelect = document.getElementById('yearSelect');
    const monthSelect = document.getElementById('monthSelect');
    const daySelect = document.getElementById('daySelect');
    const hintText = document.getElementById('hintText');
    const unlockAnimation = document.getElementById('unlockAnimation');

    if (!yearSelect || !monthSelect || !daySelect) return;

    const year = yearSelect.value;
    const month = monthSelect.value;
    const day = daySelect.value;

    if (!year || !month || !day) {
        hintText.textContent = "Please select year, month, and day";
        return;
    }

    const selectedDate = `${year}-${month}-${day}`;

    if (selectedDate === CONFIG.INVESTIGATION_DATE) {
        hintText.textContent = CONFIG.INVESTIGATION.UNLOCKING;
        unlockAnimation.classList.add('show');
        setTimeout(() => goToPage(3), 2000);
    } else {
        hintText.textContent = CONFIG.INVESTIGATION.WRONG_ANSWER;
        const dateSelector = document.getElementById('dateSelector');
        if (dateSelector) {
            dateSelector.style.animation = 'shake 0.5s';
            setTimeout(() => dateSelector.style.animation = '', 500);
        }
    }
}

function initTaurusConstellation() {
    const canvas = document.getElementById('taurusCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    function animate() {
        if (currentPage !== 2) {
            requestAnimationFrame(animate);
            return;
        }

        time += 0.01;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width * 0.7;
        const centerY = canvas.height * 0.3;
        const scale = Math.min(canvas.width, canvas.height) * 0.2;

        ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.lineWidth = 1.5;

        CONFIG.TAURUS.LINES.forEach(line => {
            const star1 = CONFIG.TAURUS.STARS[line[0]];
            const star2 = CONFIG.TAURUS.STARS[line[1]];

            ctx.beginPath();
            ctx.moveTo(centerX + (star1.x - 0.4) * scale, centerY + (star1.y - 0.3) * scale);
            ctx.lineTo(centerX + (star2.x - 0.4) * scale, centerY + (star2.y - 0.3) * scale);
            ctx.stroke();
        });

        CONFIG.TAURUS.STARS.forEach((star, index) => {
            const x = centerX + (star.x - 0.4) * scale;
            const y = centerY + (star.y - 0.3) * scale;
            const size = (6 - star.mag) * 1.2;

            const twinkle = 0.7 + Math.sin(time + index) * 0.3;

            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        ctx.font = 'italic 16px Georgia';
        ctx.fillStyle = 'rgba(255, 215, 0, 0.6)';
        ctx.textAlign = 'center';
        ctx.fillText(CONFIG.TAURUS.LABEL, centerX, centerY + scale * 0.4);

        requestAnimationFrame(animate);
    }

    animate();
}

function initInvestigationParticles() {
    const container = document.getElementById('investigationParticles');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (8 + Math.random() * 6) + 's';
        container.appendChild(particle);
    }
}

// ============================================
// CONFESSION PAGE
// ============================================
function initConfessionPage() {
    document.getElementById('confessionTitle').textContent = CONFIG.CONFESSION.TITLE;
    document.getElementById('rotatingMessage').textContent = CONFIG.CONFESSION.INTRO_TEXT;
    document.getElementById('confessionMain').textContent = CONFIG.CONFESSION.MAIN_MESSAGE;
    document.getElementById('specialLine1').textContent = CONFIG.CONFESSION.SPECIAL_LINE_1;
    document.getElementById('specialLine2').textContent = CONFIG.CONFESSION.SPECIAL_LINE_2;
    document.getElementById('confessionContinueBtn').textContent = CONFIG.CONFESSION.CONTINUE_BTN;

    const heartBeat = document.getElementById('heartBeat');
    const rotatingMessage = document.getElementById('rotatingMessage');
    let clickCount = 0;

    if (heartBeat && rotatingMessage) {
        heartBeat.addEventListener('click', () => {
            rotatingMessage.style.opacity = '0';
            clickCount++;

            setTimeout(() => {
                const messages = CONFIG.CONFESSION.HEART_MESSAGES;
                rotatingMessage.textContent = messages[confessionMessageIndex];
                rotatingMessage.style.opacity = '1';
                confessionMessageIndex = (confessionMessageIndex + 1) % messages.length;

                if (clickCount >= 3) {
                    const continueBtn = document.getElementById('confessionContinueBtn');
                    if (continueBtn) continueBtn.classList.add('show');
                }
            }, 300);
        });
    }
}

function initPaperHearts() {
    const container = document.getElementById('paperHeartsContainer');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'paper-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.animationDuration = (10 + Math.random() * 5) + 's';
        heart.style.opacity = 0.3 + Math.random() * 0.4;
        container.appendChild(heart);
    }
}

function resetConfession() {
    const rotatingMessage = document.getElementById('rotatingMessage');
    const continueBtn = document.getElementById('confessionContinueBtn');

    confessionMessageIndex = 0;

    if (rotatingMessage) {
        rotatingMessage.textContent = CONFIG.CONFESSION.INTRO_TEXT;
        rotatingMessage.style.opacity = '1';
    }
    if (continueBtn) continueBtn.classList.remove('show');
}

// ============================================
// GAME PAGE - MOBILE OPTIMIZED
// ============================================
function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const container = document.getElementById('gameCanvasContainer');

    if (!canvas || !container) return;

    function resize() {
        const rect = container.getBoundingClientRect();
        // Mobile-first sizing
        const maxWidth = Math.min(400, window.innerWidth - 30);
        canvas.width = maxWidth;
        canvas.height = Math.min(250, window.innerHeight * 0.35);
        gameState.player.y = canvas.height - 50;
        gameState.player.x = canvas.width / 2 - gameState.player.width / 2;
    }

    resize();
    window.addEventListener('resize', resize);

    // Touch events for mobile
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        gameState.player.x = touch.clientX - rect.left - gameState.player.width / 2;

        // Keep player in bounds
        gameState.player.x = Math.max(0, Math.min(canvas.width - gameState.player.width, gameState.player.x));
    }, {passive: false});

    // Mouse events for desktop
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        gameState.player.x = e.clientX - rect.left - gameState.player.width / 2;
        gameState.player.x = Math.max(0, Math.min(canvas.width - gameState.player.width, gameState.player.x));
    });

    // Touch start for immediate response
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        gameState.player.x = touch.clientX - rect.left - gameState.player.width / 2;
        gameState.player.x = Math.max(0, Math.min(canvas.width - gameState.player.width, gameState.player.x));
    }, {passive: false});

    document.getElementById('gameTitle').textContent = CONFIG.GAME.TITLE;
    document.getElementById('gameInstructions').innerHTML = `${CONFIG.GAME.INSTRUCTIONS}<br>${CONFIG.GAME.CONTROLS}`;
    document.getElementById('startGameBtn').textContent = CONFIG.GAME.START_BTN;
    document.getElementById('retryBtn').textContent = CONFIG.GAME.RETRY_BTN;
    document.getElementById('winBtn').textContent = CONFIG.GAME.CONTINUE_BTN;
}

function startGame() {
    if (gameState.isPlaying) return;

    gameState.isPlaying = true;
    gameState.score = 0;
    gameState.time = 30;
    gameState.combo = 1;
    gameState.items = [];

    document.getElementById('startGameBtn').style.display = 'none';
    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('winBtn').style.display = 'none';

    updateGameUI();
    gameLoop();
    startTimer();
}

function startTimer() {
    const timerInterval = setInterval(() => {
        if (!gameState.isPlaying) {
            clearInterval(timerInterval);
            return;
        }

        gameState.time--;
        updateGameUI();

        if (Math.random() > 0.3) spawnIceCream();
        if (Math.random() > 0.7) spawnObstacle();

        if (gameState.time <= 0) {
            endGame();
            clearInterval(timerInterval);
        }
    }, 1000);
}

function spawnIceCream() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;

    const flavors = ['🍦', '🍨', '🍧'];
    gameState.items.push({
        x: Math.random() * (canvas.width - 30),
        y: -30,
        emoji: flavors[Math.floor(Math.random() * flavors.length)],
        size: 28,
        speed: Math.random() * 2 + 2,
        type: 'good',
        caught: false
    });
}

function spawnObstacle() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;

    gameState.items.push({
        x: Math.random() * (canvas.width - 30),
        y: -30,
        emoji: '❄️',
        size: 28,
        speed: Math.random() * 3 + 3,
        type: 'bad',
        caught: false
    });
}

function gameLoop() {
    if (!gameState.isPlaying) return;

    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Clear canvas with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#74b9ff');
    gradient.addColorStop(1, '#a29bfe');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw player (bowl) - smaller for mobile
    ctx.font = '35px Arial';
    ctx.fillText('🍨', gameState.player.x, gameState.player.y + 30);

    // Update and draw items
    gameState.items = gameState.items.filter(item => {
        item.y += item.speed;
        ctx.font = `${item.size}px Arial`;
        ctx.fillText(item.emoji, item.x, item.y);

        // Collision detection - adjusted for mobile
        if (!item.caught &&
            item.x < gameState.player.x + gameState.player.width &&
            item.x + item.size > gameState.player.x &&
            item.y < gameState.player.y + gameState.player.height &&
            item.y + item.size > gameState.player.y) {

            item.caught = true;

            if (item.type === 'good') {
                gameState.score++;
                updateGameUI();
                if (gameState.score >= 10) {
                    endGame(true);
                }
                return false;
            } else {
                gameState.score = Math.max(0, gameState.score - 1);
                updateGameUI();
                return false;
            }
        }

        return item.y < canvas.height + 50;
    });

    gameState.animationId = requestAnimationFrame(gameLoop);
}

function updateGameUI() {
    document.getElementById('scoreDisplay').textContent = `${gameState.score}/10 🍦`;
    document.getElementById('timeDisplay').textContent = gameState.time;
    document.getElementById('comboDisplay').textContent = `x${gameState.combo}`;
}

function endGame(won = false) {
    gameState.isPlaying = false;
    cancelAnimationFrame(gameState.animationId);

    document.getElementById('retryBtn').style.display = 'inline-block';

    if (won || gameState.score >= 10) {
        document.getElementById('winBtn').style.display = 'inline-block';
        document.getElementById('retryBtn').style.display = 'none';
    }
}

function resetGame() {
    document.getElementById('startGameBtn').style.display = 'inline-block';
    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('winBtn').style.display = 'none';
}

// ============================================
// ASCII PAGE - FIXED TO USE "I MISS YOU" LETTERS
// ============================================
function preloadASCIIArtImage() {
    asciiImageElement = new Image();
    asciiImageElement.crossOrigin = "anonymous";

    asciiImageElement.onload = function() {
        asciiImageLoaded = true;
    };

    asciiImageElement.onerror = function() {
        asciiImageLoaded = false;
    };

    const imageUrl = CONFIG.ASCII_IMAGE_URL + '?t=' + Date.now();
    asciiImageElement.src = imageUrl;
}

function generateASCIIArt() {
    const container = document.getElementById('asciiContainer');
    const asciiArt = document.getElementById('asciiArt');
    const zoomControls = document.getElementById('zoomControls');

    if (container) container.style.display = 'block';
    if (zoomControls) zoomControls.style.display = 'flex';

    if (asciiImageLoaded && asciiImageElement) {
        try {
            generateIMISSYOUArtFromImage();
            return;
        } catch (e) {
            console.log('Error generating I MISS YOU ASCII:', e);
        }
    }

    generateFallbackASCII();
}

function generateIMISSYOUArtFromImage() {
    const asciiArt = document.getElementById('asciiArt');
    if (!asciiArt) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set ASCII resolution - smaller for better performance but still recognizable
    const asciiWidth = 60;
    const asciiHeight = Math.floor((asciiImageElement.height / asciiImageElement.width) * asciiWidth * 0.5);

    canvas.width = asciiWidth;
    canvas.height = asciiHeight;

    // Draw image to canvas at small size
    ctx.drawImage(asciiImageElement, 0, 0, asciiWidth, asciiHeight);

    let imageData;
    try {
        imageData = ctx.getImageData(0, 0, asciiWidth, asciiHeight);
    } catch (e) {
        generateFallbackASCII();
        return;
    }

    const data = imageData.data;

    // The message to use as pixels
    const message = "I MISS YOU ";
    let messageIndex = 0;

    let html = '';

    for (let y = 0; y < asciiHeight; y++) {
        for (let x = 0; x < asciiWidth; x++) {
            const offset = (y * asciiWidth + x) * 4;
            const r = data[offset];
            const g = data[offset + 1];
            const b = data[offset + 2];
            const alpha = data[offset + 3];

            // Get next character from message
            const char = message[messageIndex % message.length];
            messageIndex++;

            // Skip transparent pixels
            if (alpha < 128) {
                html += '<span style="color: transparent">' + char + '</span>';
            } else {
                // Use the original pixel color for this character
                html += `<span style="color: rgb(${r},${g},${b})">${char}</span>`;
            }
        }
        html += '<br>';
    }

    asciiArt.innerHTML = html;
}

function generateFallbackASCII() {
    const asciiArt = document.getElementById('asciiArt');
    if (!asciiArt) return;

    const colors = ['#ff6b9d', '#f9ca24', '#6c5ce7', '#00b894', '#e17055', '#74b9ff'];
    const message = "I MISS YOU ";

    let html = '';
    const rows = 20;
    const cols = 6;
    let charIndex = 0;

    for (let y = 0; y < rows; y++) {
        const color = colors[y % colors.length];
        let line = '';
        for (let x = 0; x < cols; x++) {
            line += message;
        }
        html += `<span style="color: ${color}">${line}</span><br>`;
    }

    asciiArt.innerHTML = html;
}

function adjustZoom(delta) {
    zoomScale = Math.max(0.2, Math.min(3, zoomScale + delta));
    const asciiArt = document.getElementById('asciiArt');
    const zoomLevel = document.getElementById('zoomLevel');

    if (asciiArt) {
        asciiArt.style.fontSize = `${8 * zoomScale}px`;
        asciiArt.style.lineHeight = `${8 * zoomScale}px`;
    }
    if (zoomLevel) {
        zoomLevel.textContent = `${Math.round(zoomScale * 100)}%`;
    }
}

// ============================================
// UTILITY STYLES
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);