console.log('Menu CTA Prominence Variant: Adding food & drinks upsell CTA');

// @coframe-ignore-query: .cf-social-proof-badge
// @coframe-ignore-query: .cf-menu-upsell-cta

// Social proof messages array (from previous variant)
const socialProofMessages = [
  { icon: '👥', text: '124 people viewing', type: 'popularity' },
  { icon: '⚡', text: 'Selling fast', type: 'urgency' },
  { icon: '⏰', text: 'Only 5 seats left', type: 'scarcity' },
  { icon: '⭐', text: '4.8/5 rating', type: 'rating' }
];

function SocialProofBadge({ message }) {
  return (
    <div className="cf:flex cf:items-center cf:gap-1.5 cf:pr-2.5 cf:py-1.5 cf:bg-transparent cf:rounded cf:text-white cf:text-xs cf:font-semibold cf:my-1">
      <span className="cf:text-sm">{message.icon}</span>
      <span>{message.text}</span>
    </div>
  );
}

// New component: Food & Drinks upsell CTA
function MenuUpsellCTA() {
  return (
    <a href="/sf/menus" className="cf:flex cf:items-center cf:justify-center cf:gap-2 cf:w-full cf:px-3 cf:py-2.5 cf:bg-transparent cf:rounded cf:text-[#f5b324] cf:border-[#f5b324] cf:border cf:text-sm cf:font-semibold cf:no-underline cf:hover:bg-[#e0a01f] cf:hover:text-white cf:transition-all cf:duration-200 cf:mt-2 cf:mb-2 cf:shadow-sm cf:hover:shadow-md" title="Browse our full food and drink menu">
      <span className="cf:text-base">🍿</span>
      <span>Browse Food & Drinks</span>
    </a>
  );
}

function applyBadgesAndMenuCTA() {
  const buyCtaButtons = document.querySelectorAll('.adc-show-card__buy-cta');
  console.log(`Found ${buyCtaButtons.length} ticket CTA buttons`);

  if (buyCtaButtons.length > 0) {
    buyCtaButtons.forEach((button, index) => {
      // Apply social proof badge
      if (!button.parentElement.querySelector('.cf-social-proof-badge')) {
        const message = socialProofMessages[index % socialProofMessages.length];
        
        const wrapper = (
          <div className="cf:flex cf:flex-col cf:gap-0">
            <SocialProofBadge message={message} />
          </div>
        );
        
        button.parentElement.insertBefore(wrapper, button);
        const badge = button.previousElementSibling;
        badge.className += ' cf-social-proof-badge';
        
        console.log(`Added social proof badge to button ${index + 1}: "${message.text}"`);
      }
      
      // Apply menu upsell CTA (add it after every 2nd ticket button for visibility)
      if (!button.parentElement.querySelector('.cf-menu-upsell-cta')) {
        const upsellWrapper = (
          <div className="cf-menu-upsell-cta">
            <MenuUpsellCTA />
          </div>
        );
        
        button.parentElement.insertBefore(upsellWrapper, button);
        console.log(`Added menu upsell CTA to button group ${Math.floor(index / 2) + 1}`);
      }
    });

    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
    console.log('Menu CTA prominence variant successfully applied');
    return true;
  }
  return false;
}

// Try immediately
if (!applyBadgesAndMenuCTA()) {
  // If not found, wait for them to appear using MutationObserver
  const observer = new MutationObserver((mutations) => {
    const buttons = document.querySelectorAll('.adc-show-card__buy-cta');
    if (buttons.length > 0) {
      if (applyBadgesAndMenuCTA()) {
        observer.disconnect();
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false
  });

  console.log('Waiting for ticket CTA buttons to appear...');
  
  // Timeout after 10 seconds
  setTimeout(() => {
    observer.disconnect();
    console.error('Timeout waiting for ticket CTA buttons');
  }, 10000);
}