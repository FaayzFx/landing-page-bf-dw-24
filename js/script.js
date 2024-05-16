

        // Get the slider container and boxes
        const sliderCont = document.querySelector('.slider-cont');
        const sliderBoxes = sliderCont.querySelectorAll('.slider-box');

        // Set the active box
        let activeBox = 0;
        sliderBoxes[activeBox].classList.add('active');

        // Apply the transform effect to all slider boxes
        sliderBoxes.forEach((sliderBox, i) => {
        sliderBox.style.transform = `translateX(${(i - activeBox + sliderBoxes.length) % sliderBoxes.length * 125}%)`;
        });

        // Add event listeners to the arrow buttons
        sliderBoxes.forEach((sliderBox, index) => {
        const prevArrow = sliderBox.querySelector('.prev');
        const nextArrow = sliderBox.querySelector('.next');

        prevArrow.addEventListener('click', () => {
            setActiveBox(index - 1);
        });

        nextArrow.addEventListener('click', () => {
            setActiveBox(index + 1);
        });
        });

        // Function to set the active box
        function setActiveBox(index) {
        // Remove active class from all boxes
        sliderBoxes.forEach((sliderBox) => {
            sliderBox.classList.remove('active');
        });

        // Set the new active box, with loop effect
        activeBox = (index + sliderBoxes.length) % sliderBoxes.length;
        sliderBoxes[activeBox].classList.add('active');

        // Animate the transition
        sliderBoxes.forEach((sliderBox, i) => {
            sliderBox.style.transform = `translateX(${(i - activeBox) * 125}%)`;
        });
        }

    

    

        (function() {
        // Get all elements with the class "parallax"
        const elems = document.querySelectorAll(".parallax");

        // Add event listener
        document.addEventListener("mousemove", parallax);

        // Define the perspective value and rotation speed
        const perspective = 750;
        const rotationSpeed = 0.05;

        // Magic happens here
        function parallax(e) {
            elems.forEach((elem) => {
            const _w = elem.offsetWidth / 2;
            const _h = elem.offsetHeight / 2;
            const _mouseX = e.clientX;
            const _mouseY = e.clientY;
            const elemRect = elem.getBoundingClientRect(); // Get the element's bounding rectangle
            const isHovering = (_mouseX >= elemRect.left && _mouseX <= elemRect.right && _mouseY >= elemRect.top && _mouseY <= elemRect.bottom); // Check if the cursor is hovering over the element

            if (isHovering) {
                const rotateX = `rotateX(${(-(_mouseY - elemRect.top) / elemRect.height + 0.5) * rotationSpeed * 180}deg)`; // Rotate X axis based on cursor position relative to the element (inverted)
                const rotateY = `rotateY(${((_mouseX - elemRect.left) / elemRect.width - 0.5) * rotationSpeed * 180}deg)`; // Rotate Y axis based on cursor position relative to the element
                const transform = `perspective(${perspective}px) ${rotateX} ${rotateY}`;
                elem.style.transform = transform;
            } else {
                elem.style.transform = ""; // Reset transform when not hovering
            }
            });
        }
        })();

    

    
        document.addEventListener("DOMContentLoaded", () => {
            const maincontent = document.querySelector("#maincontent");
            maincontent.style.maxWidth = "100%";
        
            const pageHeader = document.querySelector(".page-header")
            pageHeader.remove();

            const footerTop = document.querySelector(".footer-top")
            footerTop.remove();

            const pageFooter = document.querySelector(".page-footer")
           pageFooter.remove();
        });
    

    
        // Constants
        const FAQ_ARROW_SELECTOR = '.faq-arrow';
        const FAQ_ITEM_SELECTOR = '.faq-item';
        const FAQ_ANSWER_SELECTOR = '.faq-answer';
        const OPENED_CLASS = 'opened';

        // Get all FAQ arrows
        const faqArrows = document.querySelectorAll(FAQ_ARROW_SELECTOR);

        // Add event listener to each FAQ arrow
        faqArrows.forEach(faqArrow => {
        faqArrow.addEventListener('click', () => {
            // Get the closest FAQ item
            const faqItem = faqArrow.closest(FAQ_ITEM_SELECTOR);

            // Close all other FAQ items
            closeAllOtherFaqItems(faqItem);

            // Toggle the clicked FAQ item
            toggleFaqItem(faqItem);
        });
        });

        // Close all other FAQ items except the given one
        function closeAllOtherFaqItems(exceptFaqItem) {
        document.querySelectorAll(FAQ_ITEM_SELECTOR).forEach(faqItem => {
            if (faqItem!== exceptFaqItem) {
            faqItem.classList.remove(OPENED_CLASS);
            const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
            faqAnswer.style.height = '0px';
            faqAnswer.style.opacity = 0;
            }
        });
        }

        // Toggle the FAQ item
        function toggleFaqItem(faqItem) {
        faqItem.classList.toggle(OPENED_CLASS);
        const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
        faqAnswer.style.height = faqItem.classList.contains(OPENED_CLASS)? faqAnswer.scrollHeight + 'px' : '0px';
        faqAnswer.style.opacity = faqItem.classList.contains(OPENED_CLASS)? 1 : 0;
        }
    