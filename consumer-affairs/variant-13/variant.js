// Home Alaram Test 13 

// Session URL: https://mark-1.coframe.com/?session_id=261a36d5-a65d-4c49-8adf-02d21eed667a


// Interstitial screen variant: Show urgency + reassurance after property selection
console.log('Initializing interstitial variant');

// Track state
let selectedPropertyType = null;
let isInterstitialShown = false;

// Helper to create the interstitial overlay
function createInterstitialOverlay(propertyType) {
  const isApartment = propertyType === 'apartment';
  const stat = isApartment
    ? 'Apartments are 85% more likely to be broken into than houses without visible security systems.'
    : 'Homes without a security system are 3x more likely to be targeted by burglars.';

  // Create wrapper
  const overlay = document.createElement('div');
  overlay.className = 'cf-interstitial-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  `;

  // Create content container
  const content = document.createElement('div');
  content.style.cssText = `
    max-width: 448px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  // Shield icon
  const iconDiv = document.createElement('div');
  iconDiv.style.cssText = `
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  `;
  const shieldIcon = document.createElement('i');
  shieldIcon.setAttribute('data-lucide', 'shield');
  shieldIcon.style.cssText = `
    width: 48px;
    height: 48px;
    color: #b8c6d6;
  `;
  iconDiv.appendChild(shieldIcon);

  // Headline
  const headline = document.createElement('h1');
  headline.style.cssText = `
    font-size: 30px;
    font-weight: bold;
    color: #060d17;
    line-height: 1.4;
    margin: 0;
  `;
  headline.textContent = "Great! Let's find the best protection for your home.";

  // Stat box
  const statBox = document.createElement('div');
  statBox.style.cssText = `
    background: #f0f0f0;
    border-radius: 8px;
    padding: 24px;
    border-left: 4px solid #b8c6d6;
    text-align: left;
  `;
  const statText = document.createElement('p');
  statText.style.cssText = `
    font-size: 14px;
    color: #5d5d5d;
    line-height: 1.6;
    margin: 0;
  `;
  statText.innerHTML = `<strong>Did you know?</strong> ${stat}`;
  statBox.appendChild(statText);

  // Reassurance line
  const reassurance = document.createElement('div');
  reassurance.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
  `;
  const checkIcon = document.createElement('i');
  checkIcon.setAttribute('data-lucide', 'check-circle');
  checkIcon.style.cssText = `
    width: 20px;
    height: 20px;
    color: #1758a6;
    flex-shrink: 0;
  `;
  const reassuranceText = document.createElement('p');
  reassuranceText.style.cssText = `
    font-size: 16px;
    color: #060d17;
    margin: 0;
  `;
  reassuranceText.textContent = "We'll make sure you're fully protected.";
  reassurance.appendChild(checkIcon);
  reassurance.appendChild(reassuranceText);

  // Continue button
  const button = document.createElement('button');
  button.style.cssText = `
    background: #2976d1;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    font-size: 16px;
    transition: background 0.2s;
  `;
  button.textContent = 'Continue';
  const arrowIcon = document.createElement('i');
  arrowIcon.setAttribute('data-lucide', 'arrow-right');
  arrowIcon.style.cssText = `
    width: 16px;
    height: 16px;
  `;

  button.onmouseover = function() { this.style.background = '#a0aec4'; };
  button.onmouseout = function() { this.style.background = '#b8c6d6'; };

  button.addEventListener('click', function(e) {
    e.preventDefault();
    // Remove overlay
    overlay.remove();
    isInterstitialShown = false;
    // Proceed to next step
    const nextBtn = document.querySelector('.js-q-flow-next');
    if (nextBtn && !nextBtn.classList.contains('js-is-hidden')) {
      nextBtn.click();
    }
  });

  button.appendChild(arrowIcon);

  // Assemble
  content.appendChild(iconDiv);
  content.appendChild(headline);
  content.appendChild(statBox);
  content.appendChild(reassurance);
  content.appendChild(button);
  overlay.appendChild(content);

  return overlay;
}

// Main logic
const form = document.querySelector('.js-q-flow-form');
const radioButtons = document.querySelectorAll('input[name="home_type"]');

if (form && radioButtons.length > 0) {
  // Listen for radio selection
  radioButtons.forEach((radio) => {
    radio.addEventListener('change', function() {
      if (this.checked && !isInterstitialShown) {
        selectedPropertyType = this.value;
        isInterstitialShown = true;
        
        // Create and show interstitial
        const overlay = createInterstitialOverlay(selectedPropertyType);
        document.body.appendChild(overlay);
      }
    });
  });

  // Use small timeout to ensure everything is set up before signaling
  setTimeout(function() {
    console.log('Interstitial variant applied successfully');
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  }, 100);
} else {
  console.error('Required form elements not found');
}


/// Production Code 
/*! Code generated by Coframe AI Editor */
(()=>{var E=Symbol.for("JSX.Fragment");var h=null,p=!1;function k(s){let x=s==="apartment"?"Apartments are 85% more likely to be broken into than houses without visible security systems.":"Homes without a security system are 3x more likely to be targeted by burglars.",n=document.createElement("div");n.className="cf-interstitial-overlay",n.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  `;let e=document.createElement("div");e.style.cssText=`
    max-width: 448px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;let o=document.createElement("div");o.style.cssText=`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  `;let r=document.createElement("i");r.setAttribute("data-lucide","shield"),r.style.cssText=`
    width: 48px;
    height: 48px;
    color: #b8c6d6;
  `,o.appendChild(r);let a=document.createElement("h1");a.style.cssText=`
    font-size: 30px;
    font-weight: bold;
    color: #060d17;
    line-height: 1.4;
    margin: 0;
  `,a.textContent="Great! Let's find the best protection for your home.";let c=document.createElement("div");c.style.cssText=`
    background: #f0f0f0;
    border-radius: 8px;
    padding: 24px;
    border-left: 4px solid #b8c6d6;
    text-align: left;
  `;let l=document.createElement("p");l.style.cssText=`
    font-size: 14px;
    color: #5d5d5d;
    line-height: 1.6;
    margin: 0;
  `,l.innerHTML=`<strong>Did you know?</strong> ${x}`,c.appendChild(l);let i=document.createElement("div");i.style.cssText=`
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
  `;let d=document.createElement("i");d.setAttribute("data-lucide","check-circle"),d.style.cssText=`
    width: 20px;
    height: 20px;
    color: #1758a6;
    flex-shrink: 0;
  `;let u=document.createElement("p");u.style.cssText=`
    font-size: 16px;
    color: #060d17;
    margin: 0;
  `,u.textContent="We'll make sure you're fully protected.",i.appendChild(d),i.appendChild(u);let t=document.createElement("button");t.style.cssText=`
    background: #2976d1;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    font-size: 16px;
    transition: background 0.2s;
  `,t.textContent="Continue";let f=document.createElement("i");return f.setAttribute("data-lucide","arrow-right"),f.style.cssText=`
    width: 16px;
    height: 16px;
  `,t.onmouseover=function(){this.style.background="#a0aec4"},t.onmouseout=function(){this.style.background="#b8c6d6"},t.addEventListener("click",function(b){b.preventDefault(),n.remove(),p=!1;let y=document.querySelector(".js-q-flow-next");y&&!y.classList.contains("js-is-hidden")&&y.click()}),t.appendChild(f),e.appendChild(o),e.appendChild(a),e.appendChild(c),e.appendChild(i),e.appendChild(t),n.appendChild(e),n}var T=document.querySelector(".js-q-flow-form"),g=document.querySelectorAll('input[name="home_type"]');T&&g.length>0?(g.forEach(s=>{s.addEventListener("change",function(){if(this.checked&&!p){h=this.value,p=!0;let m=k(h);document.body.appendChild(m)}})}),setTimeout(function(){window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"})},100)):console.error("Required form elements not found");})();

(()=>{var l=Symbol.for("JSX.Fragment");var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var g=([e,t,a])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{r.setAttribute(o,String(t[o]))}),a?.length&&a.forEach(o=>{let f=g(o);r.appendChild(f)}),r},h=(e,t={})=>{let r={...d,...t};return g(["svg",r,e])};var k=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),P=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",A=e=>e.flatMap(P).map(a=>a.trim()).filter(Boolean).filter((a,r,o)=>o.indexOf(a)===r).join(" "),B=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),m=(e,{nameAttr:t,icons:a,attrs:r})=>{let o=e.getAttribute(t);if(o==null)return;let f=B(o),u=a[f];if(!u)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let n=k(e),c={...d,"data-lucide":o,...r,...n},C=A(["lucide",`lucide-${o}`,n,r]);C&&Object.assign(c,{class:C});let w=h(u,c);return e.parentNode?.replaceChild(w,e)};var x=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];var p=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];var i=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];var S=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=r.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(f=>m(f,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){let f=r.querySelectorAll("[icon-name]");f.length>0&&Array.from(f).forEach(u=>m(u,{nameAttr:"icon-name",icons:e,attrs:a}))}};S({icons:{Shield:i,CheckCircle:p,ArrowRight:x}});})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/icons/arrow-right.js:
lucide/dist/esm/icons/circle-check-big.js:
lucide/dist/esm/icons/shield.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
