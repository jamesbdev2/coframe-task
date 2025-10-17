console.log('Applying V10 - Punchier Headlines Variant');

// Find and update the main headline (h2)
const headline = document.querySelector('.t_heading.t_heading_primary');

// Find and update the subheadline (h3)
const subheadline = document.querySelector('.page-heading_subTitle___1u4b');

if (headline && subheadline) {
  // V10 Copy
  headline.textContent = 'Keep Calm and Ride On. We\'ve Got Your Back (and Your Bike).';
  subheadline.textContent = 'Experience worry-free adventures with TATA AIG\'s reliable bike insurance, starting at an attractive premium.';

  console.log('V10 variant applied successfully');
  
  // Emit variantRendered event only after successful changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Could not find headline or subheadline elements');
  if (!headline) console.error('Headline element not found');
  if (!subheadline) console.error('Subheadline element not found');
}