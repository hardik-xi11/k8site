document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Custom Cursor Logic
       ========================================= */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Check if device supports hover (basically not a touch screen)
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

    if (!isTouchDevice && cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Direct update for dot (fast)
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Slightly delayed outline (using animate for smooth interpolation, or just CSS transition)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effects to interactive elements
        const interactives = document.querySelectorAll('button, a');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }


    /* =========================================
       Hero Text Animation (Staggered Intro)
       ========================================= */
    const heroWords = document.querySelectorAll('.anim-word');
    heroWords.forEach((word, index) => {
        // Initial setup for animation
        word.style.opacity = '0';
        word.style.display = 'inline-block';
        word.style.transform = 'translateY(100%) rotateX(-20deg)';

        // Trigger animation with delay
        setTimeout(() => {
            word.classList.add('word-reveal');
        }, index * 150); // 150ms stagger
    });


    /* =========================================
       Panel Interaction Logic
       ========================================= */
    const overlay = document.getElementById('detail-overlay');
    const backdrop = document.getElementById('detail-backdrop');
    const closeBtn = document.getElementById('close-btn');
    const componentBtns = document.querySelectorAll('.k8s-component');

    // DOM elements inside panel to inject data into
    const dIcon = document.getElementById('detail-icon');
    const dSubtitle = document.getElementById('detail-subtitle');
    const dTitle = document.getElementById('detail-title');
    const dDescText = document.getElementById('detail-desc-text');
    const dList = document.getElementById('detail-list');

    // Open Panel Function
    const openPanel = (componentId) => {
        // Fetch data from data.js
        const data = k8sData[componentId];
        if (!data) {
            console.error(`No data found for component: ${componentId}`);
            return;
        }

        // Populate Panel
        dIcon.textContent = data.icon;
        dSubtitle.textContent = data.subtitle;
        dTitle.textContent = data.title;
        dDescText.textContent = data.description;

        // Clear old list items
        dList.innerHTML = '';
        // Add new list items
        data.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            dList.appendChild(li);
        });

        // Trigger Animations
        // Need a tiny delay if we want DOM updates to register before CSS class adds
        requestAnimationFrame(() => {
            overlay.classList.add('active');

            // Re-bind cursor hover for elements newly added to DOM or revealed
            document.body.classList.remove('cursor-hover'); // reset just in case
        });
    };

    // Close Panel Function
    const closePanel = () => {
        overlay.classList.remove('active');
        document.body.classList.remove('cursor-hover');
    };

    // Event Listeners for Opening
    componentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-target');
            openPanel(targetId);
        });
    });

    // Event Listeners for Closing
    closeBtn.addEventListener('click', closePanel);
    backdrop.addEventListener('click', closePanel);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closePanel();
        }
    });

});
