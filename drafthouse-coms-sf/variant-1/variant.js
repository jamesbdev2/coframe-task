//for this task i have do this 

// Add Social Proof to Ticket CTA
// Issue: No indication of popularity, scarcity, or urgency
// Test: Add "X people viewing", "Only 3 seats left", or star ratings near ticket button
// Why: FOMO & social proof increase conversion rates by 5-15%


console.log('Social Proof Variant: Adding FOMO messaging to ticket CTAs');

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

function applyBadges() {
  const buyCtaButtons = document.querySelectorAll('.adc-show-card__buy-cta');
  console.log(`Found ${buyCtaButtons.length} ticket CTA buttons`);

  if (buyCtaButtons.length > 0) {
    buyCtaButtons.forEach((button, index) => {
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
    });

    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
    console.log('Social proof variant successfully applied');
    return true;
  }
  return false;
}

// Try immediately
if (!applyBadges()) {
  // If not found, wait for them to appear using MutationObserver
  const observer = new MutationObserver((mutations) => {
    const buttons = document.querySelectorAll('.adc-show-card__buy-cta');
    if (buttons.length > 0) {
      if (applyBadges()) {
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