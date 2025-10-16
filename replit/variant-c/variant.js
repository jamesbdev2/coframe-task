// Enhance the use cases section design & readability
console.log('Enhancing use cases section...');

// Target the section heading and description
const sectionHeading = document.querySelector('[id="from-rapidly-prototyping-mvps-to-building-internal-tools-or-customer-facing-apps,-the-possibilities-are-endless"]');
const cardGallery = document.querySelector('.CardGallery');

if (sectionHeading && cardGallery) {
  // Enhance heading styling with gradient
  if (sectionHeading.parentElement) {
    sectionHeading.parentElement.style.backgroundImage = 'linear-gradient(to right, #0ea5e9, #3b82f6)';
    sectionHeading.parentElement.style.webkitBackgroundClip = 'text';
    sectionHeading.parentElement.style.webkitTextFillColor = 'transparent';
    sectionHeading.parentElement.style.backgroundClip = 'text';
  }

  // Enhance the card container
  const cardContainer = cardGallery.querySelector('.grid');
  if (cardContainer) {
    cardContainer.style.gap = '24px';
    
    // Enhance each card
    const cards = cardContainer.querySelectorAll('[class*="col-span"]');
    cards.forEach((card, index) => {
      const innerDiv = card.querySelector('div > div');
      
      if (innerDiv) {
        // Apply enhanced card styling
        innerDiv.style.borderRadius = '16px';
        innerDiv.style.overflow = 'hidden';
        innerDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 13px rgba(0, 0, 0, 0.05)';
        innerDiv.style.backgroundColor = '#ffffff';
        innerDiv.style.border = '1px solid #e5e7eb';
        innerDiv.style.transition = 'all 300ms ease-in-out';
        
        // Add hover effect via event listeners
        card.addEventListener('mouseenter', () => {
          innerDiv.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.1), 0 25px 50px rgba(0, 0, 0, 0.1)';
          innerDiv.style.transform = 'scale(1.05) translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
          innerDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 13px rgba(0, 0, 0, 0.05)';
          innerDiv.style.transform = 'scale(1) translateY(0)';
        });

        // Enhance the image area
        const imgWrapper = card.querySelector('.aspect-square');
        if (imgWrapper) {
          imgWrapper.style.backgroundColor = '#f3f4f6';
          imgWrapper.style.overflow = 'hidden';
        }

        // Enhance title
        const titleEl = card.querySelector('p[class*="text-sans-17"]');
        if (titleEl) {
          titleEl.style.fontSize = '18px';
          titleEl.style.fontWeight = '700';
          titleEl.style.color = '#111827';
          titleEl.style.marginBottom = '8px';
          titleEl.style.transition = 'color 300ms ease-in-out';
          
          // Add title color on hover
          card.addEventListener('mouseenter', () => {
            const colors = ['#0ea5e9', '#a855f7', '#ea580c'];
            titleEl.style.color = colors[index % colors.length];
          });
          
          card.addEventListener('mouseleave', () => {
            titleEl.style.color = '#111827';
          });
        }

        // Enhance description text
        const descEl = card.querySelector('p[class*="text-sans-14"]');
        if (descEl) {
          descEl.style.fontSize = '14px';
          descEl.style.color = '#4b5563';
          descEl.style.lineHeight = '1.6';
          descEl.style.marginTop = '8px';
        }
      }
    });
  }

  // Now enhance the ValuePropGrid section
  const empowerHeading = document.querySelector('[id="empower-your-product,-design-&-business-teams-to-bring-their-ideas-to-life"]');
  const valuePropGrid = document.querySelector('.ValuePropGrid');

  if (empowerHeading && valuePropGrid) {
    // Enhance the section heading with gradient
    if (empowerHeading.parentElement) {
      empowerHeading.parentElement.style.backgroundImage = 'linear-gradient(to right, #a855f7, #ec4899)';
      empowerHeading.parentElement.style.webkitBackgroundClip = 'text';
      empowerHeading.parentElement.style.webkitTextFillColor = 'transparent';
      empowerHeading.parentElement.style.backgroundClip = 'text';
    }

    // Find and enhance the grid container
    const gridContainer = valuePropGrid.querySelector('.grid');
    if (gridContainer) {
      gridContainer.style.gap = '32px';
      gridContainer.style.padding = '20px 0';

      // Enhance each grid item (Product Teams, Designers, etc.)
      const gridItems = gridContainer.querySelectorAll('[class*="col-span"]');
      gridItems.forEach((item, itemIndex) => {
        item.style.transition = 'all 300ms ease-in-out';
        
        // Find the image wrapper
        const imageWrapper = item.querySelector('[class*="relative"][class*="overflow-hidden"]');
        if (imageWrapper) {
          imageWrapper.style.borderRadius = '12px';
          imageWrapper.style.overflow = 'hidden';
          imageWrapper.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
          imageWrapper.style.backgroundColor = '#f3f4f6';
          imageWrapper.style.transition = 'all 300ms ease-in-out';

          // Add hover effect to image
          item.addEventListener('mouseenter', () => {
            imageWrapper.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
            imageWrapper.style.transform = 'scale(1.02)';
          });

          item.addEventListener('mouseleave', () => {
            imageWrapper.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
            imageWrapper.style.transform = 'scale(1)';
          });
        }

        // Find and enhance the title text
        const roleTitle = item.querySelector('p[class*="text-sans-17"][class*="font-700"]');
        if (roleTitle) {
          roleTitle.style.fontSize = '18px';
          roleTitle.style.fontWeight = '700';
          roleTitle.style.color = '#111827';
          roleTitle.style.marginBottom = '12px';
          roleTitle.style.transition = 'color 300ms ease-in-out';

          const colors = ['#0ea5e9', '#a855f7', '#ec4899', '#ea580c'];
          item.addEventListener('mouseenter', () => {
            roleTitle.style.color = colors[itemIndex % colors.length];
          });

          item.addEventListener('mouseleave', () => {
            roleTitle.style.color = '#111827';
          });
        }

        // Find and enhance the description text
        const descText = item.querySelector('p[class*="text-sans-14"]');
        if (descText) {
          descText.style.fontSize = '14px';
          descText.style.color = '#4b5563';
          descText.style.lineHeight = '1.6';
          descText.style.marginTop = '8px';
        }
      });
    }
  }

  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  console.log('Both sections enhanced successfully');
} else {
  console.error('Section elements not found');
}