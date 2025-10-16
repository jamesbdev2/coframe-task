// Remove the "Enable product teams..." paragraph from the hero section
console.log('Removing hero section paragraph...');

const heroParagraph = document.querySelector('.section-standard-text p.RichText--normal');
if (heroParagraph && heroParagraph.textContent.includes('Enable product teams')) {
  heroParagraph.style.display = 'none';
  console.log('Hero paragraph hidden successfully');
}

// Adjust headline font size
console.log('Adjusting headline font size...');
const headline = document.querySelector('.RichText--display-2.custom-display-styles-2');
if (headline) {
  headline.style.fontSize = '48px';
  headline.style.lineHeight = '52px';
  console.log('Headline font size reduced successfully');
}

// Remove "Loved by 40 million..." section
console.log('Removing loved by section...');
const sections = document.querySelectorAll('.section-standard-text');
for (let section of sections) {
  const paragraph = section.querySelector('p.RichText--normal');
  if (paragraph && paragraph.textContent.includes('Loved by 40 million')) {
    section.style.display = 'none';
    console.log('Loved by section hidden successfully');
    break;
  }
}

// Remove RotatingPressLogos section
console.log('Removing RotatingPressLogos section...');
const rotatingLogosSection = document.querySelector('.RotatingPressLogos');
if (rotatingLogosSection) {
  rotatingLogosSection.style.display = 'none';
  console.log('RotatingPressLogos section hidden successfully');
}

window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });