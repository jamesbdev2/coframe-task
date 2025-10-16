console.log('Enhanced Showtimes & Pricing Variant: Adding urgency badges and pricing');

// @coframe-ignore-query: .cf-social-proof-badge
// @coframe-ignore-query: .cf-menu-upsell-cta
// @coframe-ignore-query: .cf-showtime-badge
// @coframe-ignore-query: .cf-price-badge

// Social proof messages array
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

function MenuUpsellCTA() {
  return (
    <a href="/sf/menus" className="cf:flex cf:items-center cf:justify-center cf:gap-2 cf:w-full cf:px-3 cf:py-2.5 cf:bg-[#f5b324] cf:rounded cf:text-white cf:text-sm cf:font-semibold cf:no-underline cf:hover:bg-[#e0a01f] cf:transition-all cf:duration-200 cf:mt-2 cf:mb-2 cf:shadow-sm cf:hover:shadow-md" title="Browse our full food and drink menu">
      <span className="cf:text-base">🍿</span>
      <span>Browse Food & Drinks</span>
    </a>
  );
}

// Array of different showtime options to randomize across cards
const showtimeOptions = [
  'Next showing in 45 minutes',
  'Next showing in 1.5 hours',
  'Next showing in 2 hours',
  'Next showing in 3 hours',
  'Next showing in 4 hours',
  'Next showing in 1 hour',
  'Next showing in 2.5 hours',
  'Next showing in 30 minutes'
];

// Function to get a random showtime
function getRandomShowtime() {
  return showtimeOptions[Math.floor(Math.random() * showtimeOptions.length)];
}

// New component: Showtime urgency badge (green for immediate action)
function ShowtimeUrgencyBadge({ showtime }) {
  return (
    <div className="cf:flex cf:items-center cf:justify-center cf:gap-1.5 cf:w-full cf:px-3 cf:py-2 cf:bg-gradient-to-r cf:from-[#10b981] cf:to-[#059669] cf:rounded cf:text-white cf:text-xs cf:font-semibold cf:mb-2 cf:shadow-md cf:hover:from-[#059669] cf:hover:to-[#047857] cf:transition-all cf:duration-200">
      <span className="cf:text-base">⏱️</span>
      <span>{showtime}</span>
    </div>
  );
}

// New component: Starting price badge
function PriceBadge() {
  return (
    <div className="cf:flex cf:items-center cf:justify-between cf:w-full cf:px-3 cf:py-2 cf:bg-[#f8f4f0] cf:rounded cf:mb-2 cf:border cf:border-[#d4a574]">
      <span className="cf:text-xs cf:text-gray-600 cf:font-medium">Starting at</span>
      <span className="cf:text-lg cf:font-bold cf:text-[#e0a01f]">$15.99</span>
    </div>
  );
}

function applyBadgesMenuAndShowtimes() {
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
      
      // Apply showtime urgency badge
      if (!button.parentElement.querySelector('.cf-showtime-badge')) {
        const showtimeWrapper = (
          <div className="cf-showtime-badge">
            <ShowtimeUrgencyBadge showtime={getRandomShowtime()} />
          </div>
        );
        
        button.parentElement.insertBefore(showtimeWrapper, button);
        console.log(`Added showtime urgency badge to button ${index + 1}`);
      }
      
      // Apply price badge
      if (!button.parentElement.querySelector('.cf-price-badge')) {
        const priceWrapper = (
          <div className="cf-price-badge">
            <PriceBadge />
          </div>
        );
        
        button.parentElement.insertBefore(priceWrapper, button);
        console.log(`Added price badge to button ${index + 1}`);
      }
      
      // Apply menu upsell CTA
      if (!button.parentElement.querySelector('.cf-menu-upsell-cta')) {
        const upsellWrapper = (
          <div className="cf-menu-upsell-cta">
            <MenuUpsellCTA />
          </div>
        );
        
        button.parentElement.insertBefore(upsellWrapper, button);
        console.log(`Added menu upsell CTA to button ${index + 1}`);
      }
    });

    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
    console.log('Enhanced showtimes & pricing variant successfully applied');
    return true;
  }
  return false;
}

// Try immediately
if (!applyBadgesMenuAndShowtimes()) {
  // If not found, wait for them to appear using MutationObserver
  const observer = new MutationObserver((mutations) => {
    const buttons = document.querySelectorAll('.adc-show-card__buy-cta');
    if (buttons.length > 0) {
      if (applyBadgesMenuAndShowtimes()) {
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