console.log('Improving CardCarousel badge visibility and reducing card size');

// Target all badge elements in the CardCarousel section
function improveBadgeVisibility() {
  const badges = document.querySelectorAll('.CardCarousel .keen-slider__slide .absolute.top-0.right-0');
  
  if (badges.length === 0) {
    console.log('Badges not found yet, waiting...');
    return false;
  }
  
  console.log(`Found ${badges.length} badges to improve`);
  
  badges.forEach(badge => {
    // Apply high-contrast styling directly to style property
    badge.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    badge.style.backdropFilter = 'blur(4px)';
    badge.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    
    // Ensure text is white and bold for better readability
    const text = badge.querySelector('p');
    if (text) {
      text.style.fontWeight = '600';
      text.style.color = '#ffffff';
    }
  });
  
  return true;
}

// Reduce carousel card sizes
function reduceCardSize() {
  const cards = document.querySelectorAll('.CardCarousel .keen-slider__slide');
  
  if (cards.length === 0) {
    console.log('Cards not found yet, waiting...');
    return false;
  }
  
  console.log(`Found ${cards.length} cards to resize`);
  
  cards.forEach(card => {
    // Reduce overall card size
    card.style.maxWidth = '400px';
    card.style.transform = 'scale(0.85)';
    card.style.transformOrigin = 'center';
    
    // Reduce image height
    const imgContainer = card.querySelector('.overflow-hidden');
    if (imgContainer) {
      imgContainer.style.maxHeight = '200px';
    }
    
    // Reduce padding in content area
    const contentArea = card.querySelector('.pb-6, .p-6');
    if (contentArea) {
      contentArea.style.padding = '16px';
    }
    
    // Reduce heading font size
    const heading = card.querySelector('h3');
    if (heading) {
      heading.style.fontSize = '18px';
      heading.style.lineHeight = '24px';
    }
    
    // Reduce paragraph font size
    const paragraph = card.querySelector('p.font-sans.text-sans-17');
    if (paragraph) {
      paragraph.style.fontSize = '14px';
      paragraph.style.lineHeight = '20px';
    }
  });
  
  return true;
}

// Run both improvements
function applyAllImprovements() {
  const badgesReady = improveBadgeVisibility();
  const cardsReady = reduceCardSize();
  const headingChanged = changeHeading();
  const valuePropGridOptimized = optimizeValuePropGrid();
  const testimonialNamesEnlarged = enlargeTestimonialNames();
  const spacersRemoved = removeSpacersAroundWaitingSection();
  const testimonialSpacerReduced = reduceTestimonialSectionSpacer();
  
  return badgesReady && cardsReady && headingChanged && valuePropGridOptimized && testimonialNamesEnlarged && spacersRemoved && testimonialSpacerReduced;
}

// Change the "vibe coding" heading
function changeHeading() {
  const heading = document.querySelector('#the-safest-place-for-vibe-coding');
  
  if (!heading) {
    console.log('Heading not found yet, waiting...');
    return false;
  }
  
  console.log('Found heading, changing text');
  heading.textContent = 'Build with confidence';
  
  return true;
}

// Optimize ValuePropGrid section - make it horizontal and compact
function optimizeValuePropGrid() {
  const section = document.querySelector('.ValuePropGrid');
  
  if (!section) {
    console.log('ValuePropGrid not found yet, waiting...');
    return false;
  }
  
  console.log('Found ValuePropGrid, optimizing...');
  
  // Remove all description paragraphs
  const descriptions = section.querySelectorAll('.RichText--body-2, p.font-sans.text-sans-17');
  descriptions.forEach(desc => {
    desc.style.display = 'none';
  });
  
  // Find the grid container
  const gridContainer = section.querySelector('.grid.grid-cols-2');
  if (gridContainer) {
    // Make it a single row on larger screens
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    gridContainer.style.gap = '16px';
    
    // On mobile, keep 2 columns
    if (window.innerWidth < 600) {
      gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
  }
  
  // Reduce the large horizontal gaps (54px -> 15px)
  const largeGapContainers = section.querySelectorAll('[class*="gap-x-"]');
  largeGapContainers.forEach(container => {
    container.style.columnGap = '15px';
  });
  
  // Reduce card sizes
  const cards = section.querySelectorAll('.col-span-2, .col-span-1');
  cards.forEach(card => {
    // Remove excessive margin
    card.style.marginBottom = '0';
    
    // Reduce image size
    const imgContainer = card.querySelector('.aspect-\\[1\\.3\\]');
    if (imgContainer) {
      imgContainer.style.height = '120px';
      imgContainer.style.aspectRatio = 'auto';
    }
    
    // Reduce heading size
    const heading = card.querySelector('h3');
    if (heading) {
      heading.style.fontSize = '16px';
      heading.style.lineHeight = '20px';
      heading.style.marginTop = '8px';
      heading.style.marginBottom = '8px';
    }
    
    // Reduce padding
    const textContainer = card.querySelector('.py-2');
    if (textContainer) {
      textContainer.style.padding = '8px 0';
    }
  });
  
  // Reduce section padding
  section.style.paddingTop = '24px';
  section.style.paddingBottom = '24px';
  
  return true;
}

// Enlarge client names in testimonial carousel
function enlargeTestimonialNames() {
  const carousel = document.querySelector('.SocialMediaCarousel');
  
  if (!carousel) {
    console.log('SocialMediaCarousel not found yet, waiting...');
    return false;
  }
  
  console.log('Found SocialMediaCarousel, enlarging client names...');
  
  // Target client name elements - they're the first p tag in the flex-col container
  const slides = carousel.querySelectorAll('.keen-slider__slide');
  
  slides.forEach(slide => {
    const clientInfoContainer = slide.querySelector('.flex.flex-col');
    if (clientInfoContainer) {
      // Enlarge client name
      const clientName = clientInfoContainer.querySelector('p.font-sans.text-sans-14');
      if (clientName) {
        clientName.style.fontSize = '18px';
        clientName.style.lineHeight = '24px';
        clientName.style.fontWeight = '600';
      }
      
      // Enlarge position and company name (text-sans-10 elements)
      const positionElements = clientInfoContainer.querySelectorAll('p.font-sans.text-sans-10');
      positionElements.forEach(posEl => {
        posEl.style.fontSize = '14px';
        posEl.style.lineHeight = '20px';
      });
    }
  });
  
  return true;
}

// Remove Spacer sections around "What are you waiting for?" section
function removeSpacersAroundWaitingSection() {
  console.log('Attempting to remove Spacer sections around "What are you waiting for?"');
  
  // Find all sections with the Spacer class that have h-[96px]
  const allSpacers = document.querySelectorAll('section.Spacer.h-\\[96px\\]');
  
  if (allSpacers.length === 0) {
    console.log('Spacer sections not found yet, waiting...');
    return false;
  }
  
  console.log(`Found ${allSpacers.length} Spacer sections`);
  
  // Find the "What are you waiting for?" section
  const waitingSection = Array.from(document.querySelectorAll('section.section-standard-text')).find(section => {
    const h2 = section.querySelector('h2');
    return h2 && h2.textContent.includes('What are you waiting for?');
  });
  
  if (!waitingSection) {
    console.log('What are you waiting for section not found');
    return false;
  }
  
  console.log('Found "What are you waiting for?" section');
  
  // Hide the previous sibling if it's a Spacer
  const prevSibling = waitingSection.previousElementSibling;
  if (prevSibling && prevSibling.classList.contains('Spacer') && prevSibling.classList.contains('h-[96px]')) {
    prevSibling.style.display = 'none';
    console.log('Hidden Spacer before "What are you waiting for?"');
  }
  
  // Hide the next sibling if it's a Spacer
  const nextSibling = waitingSection.nextElementSibling;
  if (nextSibling && nextSibling.classList.contains('Spacer') && nextSibling.classList.contains('h-[96px]')) {
    nextSibling.style.display = 'none';
    console.log('Hidden Spacer after "What are you waiting for?"');
  }
  
  return true;
}

// Reduce Spacer height after SocialMediaCarousel section
function reduceTestimonialSectionSpacer() {
  console.log('Attempting to reduce Spacer after SocialMediaCarousel');
  
  const carousel = document.querySelector('.SocialMediaCarousel');
  
  if (!carousel) {
    console.log('SocialMediaCarousel not found yet, waiting...');
    return false;
  }
  
  // Find the next sibling Spacer
  const nextSibling = carousel.nextElementSibling;
  if (nextSibling && nextSibling.classList.contains('Spacer')) {
    nextSibling.style.height = '80px';
    console.log('Reduced Spacer height to 80px after SocialMediaCarousel');
  }
  
  return true;
}

// Run immediately for static content
if (applyAllImprovements()) {
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  // Use MutationObserver for dynamic content
  const observer = new MutationObserver(() => {
    if (applyAllImprovements()) {
      observer.disconnect();
      window.CFQ = window.CFQ || [];
      window.CFQ.push({ emit: 'variantRendered' });
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Timeout after 10 seconds
  setTimeout(() => {
    observer.disconnect();
    console.error('Timeout: Elements not found');
  }, 10000);
}



//Production Code
/*! Code generated by Coframe AI Editor */
(()=>{var u=Symbol.for("JSX.Fragment");function f(){let e=document.querySelectorAll(".CardCarousel .keen-slider__slide .absolute.top-0.right-0");return e.length===0?!1:(`${e.length}`,e.forEach(t=>{t.style.backgroundColor="rgba(0, 0, 0, 0.8)",t.style.backdropFilter="blur(4px)",t.style.border="1px solid rgba(255, 255, 255, 0.2)";let n=t.querySelector("p");n&&(n.style.fontWeight="600",n.style.color="#ffffff")}),!0)}function d(){let e=document.querySelectorAll(".CardCarousel .keen-slider__slide");return e.length===0?!1:(`${e.length}`,e.forEach(t=>{t.style.maxWidth="400px",t.style.transform="scale(0.85)",t.style.transformOrigin="center";let n=t.querySelector(".overflow-hidden");n&&(n.style.maxHeight="200px");let i=t.querySelector(".pb-6, .p-6");i&&(i.style.padding="16px");let s=t.querySelector("h3");s&&(s.style.fontSize="18px",s.style.lineHeight="24px");let o=t.querySelector("p.font-sans.text-sans-17");o&&(o.style.fontSize="14px",o.style.lineHeight="20px")}),!0)}function c(){let e=f(),t=d(),n=g(),i=y(),s=p(),o=m(),r=S();return e&&t&&n&&i&&s&&o&&r}function g(){let e=document.querySelector("#the-safest-place-for-vibe-coding");return e?(e.textContent="Build with confidence",!0):!1}function y(){let e=document.querySelector(".ValuePropGrid");if(!e)return!1;e.querySelectorAll(".RichText--body-2, p.font-sans.text-sans-17").forEach(o=>{o.style.display="none"});let n=e.querySelector(".grid.grid-cols-2");return n&&(n.style.display="grid",n.style.gridTemplateColumns="repeat(4, 1fr)",n.style.gap="16px",window.innerWidth<600&&(n.style.gridTemplateColumns="repeat(2, 1fr)")),e.querySelectorAll('[class*="gap-x-"]').forEach(o=>{o.style.columnGap="15px"}),e.querySelectorAll(".col-span-2, .col-span-1").forEach(o=>{o.style.marginBottom="0";let r=o.querySelector(".aspect-\\[1\\.3\\]");r&&(r.style.height="120px",r.style.aspectRatio="auto");let l=o.querySelector("h3");l&&(l.style.fontSize="16px",l.style.lineHeight="20px",l.style.marginTop="8px",l.style.marginBottom="8px");let a=o.querySelector(".py-2");a&&(a.style.padding="8px 0")}),e.style.paddingTop="24px",e.style.paddingBottom="24px",!0}function p(){let e=document.querySelector(".SocialMediaCarousel");return e?(e.querySelectorAll(".keen-slider__slide").forEach(n=>{let i=n.querySelector(".flex.flex-col");if(i){let s=i.querySelector("p.font-sans.text-sans-14");s&&(s.style.fontSize="18px",s.style.lineHeight="24px",s.style.fontWeight="600"),i.querySelectorAll("p.font-sans.text-sans-10").forEach(r=>{r.style.fontSize="14px",r.style.lineHeight="20px"})}}),!0):!1}function m(){let e=document.querySelectorAll("section.Spacer.h-\\[96px\\]");if(e.length===0)return!1;`${e.length}`;let t=Array.from(document.querySelectorAll("section.section-standard-text")).find(s=>{let o=s.querySelector("h2");return o&&o.textContent.includes("What are you waiting for?")});if(!t)return!1;let n=t.previousElementSibling;n&&n.classList.contains("Spacer")&&n.classList.contains("h-[96px]")&&(n.style.display="none");let i=t.nextElementSibling;return i&&i.classList.contains("Spacer")&&i.classList.contains("h-[96px]")&&(i.style.display="none"),!0}function S(){let e=document.querySelector(".SocialMediaCarousel");if(!e)return!1;let t=e.nextElementSibling;return t&&t.classList.contains("Spacer")&&(t.style.height="80px"),!0}if(c())window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"});else{let e=new MutationObserver(()=>{c()&&(e.disconnect(),window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"}))});e.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{e.disconnect(),console.error("Timeout: Elements not found")},1e4)}})();
