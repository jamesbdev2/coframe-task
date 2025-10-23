// Session URL:
// https://mark-1.coframe.com/?session_id=1f8c34ae-771e-4b70-9f99-3d31807d1604


// Variant: Add bright hero section to replace dark imagery
console.log('Applying hero section variant...');

// Target the questionnaire form container
const qfContainer = document.querySelector('.qf-24');
const jsQFlowContainer = document.querySelector('.js-q-flow-container');

if (qfContainer || jsQFlowContainer) {
  const targetContainer = qfContainer || jsQFlowContainer;
  console.log('Found form container, applying hero variant');

  // Create hero section component
  function HeroSection() {
    return (
      <div data-cf-hero="bright-family-house" className="cf:w-full cf:py-12 cf:px-4 cf:bg-cover cf:bg-center cf:bg-no-repeat cf:flex cf:items-center cf:justify-center cf:relative" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")',
        minHeight: '360px',
        backgroundPosition: 'center 35%'
      }}>
        <div className="cf:absolute cf:inset-0 cf:bg-gradient-to-r cf:from-black/50 cf:to-black/40"></div>
        <div className="cf:relative cf:z-10 cf:text-center cf:text-white cf:max-w-2xl cf:px-6">
          <h1 className="cf:text-3xl cf:md:text-4xl cf:font-bold cf:mb-3 cf:text-white cf:leading-tight">
            Ready to protect your home?
          </h1>
          <p className="cf:text-base cf:md:text-lg cf:font-normal cf:text-white/90 cf:leading-relaxed">
            Compare top security systems and save money in Boardman, Oregon
          </p>
        </div>
      </div>
    );
  }

  // Create stats urgency block component
  function StatsBlock() {
    return (
      <div className="cf:w-full cf:bg-gradient-to-r cf:from-amber-50 cf:to-orange-50 cf:border cf:border-amber-200 cf:py-8 cf:px-4 cf:my-6">
        <div className="cf:max-w-4xl cf:mx-auto">
          <div className="cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6">
            {/* Stat 1 */}
            <div className="cf:flex cf:flex-col cf:items-start">
              <div className="cf:flex cf:items-center cf:mb-3">
                <i data-lucide="alert-circle" style={{ color: '#ea580c', width: '24px', height: '24px', marginRight: '8px' }}></i>
                <span className="cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide">Risk Alert</span>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">Every 25 Seconds</p>
              <p className="cf:text-sm cf:text-gray-700">A burglary occurs in the U.S.</p>
            </div>

            {/* Stat 2 */}
            <div className="cf:flex cf:flex-col cf:items-start">
              <div className="cf:flex cf:items-center cf:mb-3">
                <i data-lucide="shield-off" style={{ color: '#ea580c', width: '24px', height: '24px', marginRight: '8px' }}></i>
                <span className="cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide">Unprotected?</span>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">83% Check</p>
              <p className="cf:text-sm cf:text-gray-700">Burglars verify alarm systems first</p>
            </div>

            {/* Stat 3 */}
            <div className="cf:flex cf:flex-col cf:items-start">
              <div className="cf:flex cf:items-center cf:mb-3">
                <i data-lucide="sun" style={{ color: '#ea580c', width: '24px', height: '24px', marginRight: '8px' }}></i>
                <span className="cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide">Timing</span>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">Daytime Peak</p>
              <p className="cf:text-sm cf:text-gray-700">Most break-ins happen while you're out</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Insert or update hero section at the beginning of the form container
  const existingHero = targetContainer.querySelector('[data-cf-hero="bright-family-house"]');
  if (existingHero instanceof HTMLElement) {
    existingHero.style.backgroundImage = 'url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")';
    existingHero.style.backgroundPosition = 'center 35%';
    existingHero.style.minHeight = '360px';
    console.log('Updated existing hero background image');
  } else {
    const hero = <HeroSection />;
    targetContainer.insertAdjacentElement('afterbegin', hero);
  }

  // Insert stats block below hero, before form content
  const existingStats = targetContainer.querySelector('[data-cf-stats="urgency-block"]');
  if (!existingStats) {
    const statsBlock = (
      <div data-cf-stats="urgency-block" className="cf:max-w-full cf:mx-auto cf:w-full cf:px-4">
        <StatsBlock />
      </div>
    );
    const heroElement = targetContainer.querySelector('[data-cf-hero="bright-family-house"]');
    if (heroElement) {
      heroElement.insertAdjacentElement('afterend', statsBlock);
    }
    console.log('Added stats urgency block');
  }

  console.log('Hero section applied successfully');
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  // @coframe-ignore-query: .qf-24
  // @coframe-ignore-query: .js-q-flow-container
  console.error('Required form containers not found');
}


//Production Code
/*! Code generated by Coframe AI Editor */
(()=>{var d=Symbol.for("JSX.Fragment");function c(e,s,...n){if(e==null){let a=p(),i=s&&Object.keys(s).length>0,o=n&&n.length>0,r;i?r=`<${e}
  ${Object.entries(s).map(([u,y])=>`${u}=${JSON.stringify(y)}`).join(`
  `)}${o?">":""}`:r=`<${e}${o?">":""}`;let f;throw o?f=`
  {/* children.length: ${n.length} */}
</${e}>`:f=i?`
/>`:"/>",new Error(`Invalid element type: \`${e}\`.

**Hint**: Look for code like this:
${r}${f}
${a?`within ${JSON.stringify(a)}.`:""}
`)}if(e===d){let a=document.createDocumentFragment();return l(a,n),a}if(typeof e=="function")return e({...s||{},children:N(n)});let t=typeof e=="string"?document.createElement(e):document.createElement(String(e));return s&&x(t,s),l(t,n),t}function p(){return new Error().stack?.split(`
`)?.[3]?.trim().replace(/^at\s+/,"")}function x(e,s){for(let n in s){if(n==="key")continue;let t=s[n];if(n==="ref"){typeof t=="function"?t(e):t&&typeof t=="object"&&(t.current=e);continue}if(n==="class"||n==="className"){b(e,t);continue}if(n==="style"){h(e,t);continue}if(n==="dataset"&&t&&typeof t=="object"){for(let i in t)e.dataset[i]=String(t[i]);continue}if(n==="dangerouslySetInnerHTML"&&t&&typeof t=="object"){e.innerHTML=t.__html??"";continue}if(n.startsWith("on")&&typeof t=="function"){let i=n.slice(2).toLowerCase();e.addEventListener(i,t);continue}let a=n==="for"?"htmlFor":n;try{a in e&&typeof e[a]!="function"?e[a]=t:t!==!1&&t!=null&&e.setAttribute(n,String(t))}catch{t!==!1&&t!=null&&e.setAttribute(n,String(t))}}}function b(e,s){s&&(typeof s=="string"?e.className=s:Array.isArray(s)?e.className=s.filter(Boolean).join(" "):typeof s=="object"&&(e.className=Object.keys(s).filter(n=>s[n]).join(" ")))}function h(e,s){if(!s)return;if(typeof s=="string"){e.style.cssText=s;return}let n=e.style;for(let t in s){let a=s[t];a==null||a===!1||(t in n?n[t]=String(a):e.style.setProperty(t,String(a)))}}function l(e,s){let n=t=>{t==null||t===!1||(Array.isArray(t)?t.forEach(n):t instanceof Node?e.appendChild(t):e.appendChild(document.createTextNode(String(t))))};s.forEach(n)}function N(e){return e.length<=1?e[0]:e}var m=document.querySelector(".qf-24"),g=document.querySelector(".js-q-flow-container");if(m||g){let s=function(){return c("div",{"data-cf-hero":"bright-family-house",className:"cf:w-full cf:py-12 cf:px-4 cf:bg-cover cf:bg-center cf:bg-no-repeat cf:flex cf:items-center cf:justify-center cf:relative",style:{backgroundImage:'url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")',minHeight:"360px",backgroundPosition:"center 35%"}},c("div",{className:"cf:absolute cf:inset-0 cf:bg-gradient-to-r cf:from-black/50 cf:to-black/40"}),c("div",{className:"cf:relative cf:z-10 cf:text-center cf:text-white cf:max-w-2xl cf:px-6"},c("h1",{className:"cf:text-3xl cf:md:text-4xl cf:font-bold cf:mb-3 cf:text-white cf:leading-tight"},"Ready to protect your home?"),c("p",{className:"cf:text-base cf:md:text-lg cf:font-normal cf:text-white/90 cf:leading-relaxed"},"Compare top security systems and save money in Boardman, Oregon")))},n=function(){return c("div",{className:"cf:w-full cf:bg-gradient-to-r cf:from-amber-50 cf:to-orange-50 cf:border cf:border-amber-200 cf:py-8 cf:px-4 cf:my-6"},c("div",{className:"cf:max-w-4xl cf:mx-auto"},c("div",{className:"cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6"},c("div",{className:"cf:flex cf:flex-col cf:items-start"},c("div",{className:"cf:flex cf:items-center cf:mb-3"},c("i",{"data-lucide":"alert-circle",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),c("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Risk Alert")),c("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"Every 25 Seconds"),c("p",{className:"cf:text-sm cf:text-gray-700"},"A burglary occurs in the U.S.")),c("div",{className:"cf:flex cf:flex-col cf:items-start"},c("div",{className:"cf:flex cf:items-center cf:mb-3"},c("i",{"data-lucide":"shield-off",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),c("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Unprotected?")),c("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"83% Check"),c("p",{className:"cf:text-sm cf:text-gray-700"},"Burglars verify alarm systems first")),c("div",{className:"cf:flex cf:flex-col cf:items-start"},c("div",{className:"cf:flex cf:items-center cf:mb-3"},c("i",{"data-lucide":"sun",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),c("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Timing")),c("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"Daytime Peak"),c("p",{className:"cf:text-sm cf:text-gray-700"},"Most break-ins happen while you're out")))))};v=s,k=n;let e=m||g,t=e.querySelector('[data-cf-hero="bright-family-house"]');if(t instanceof HTMLElement)t.style.backgroundImage='url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")',t.style.backgroundPosition="center 35%",t.style.minHeight="360px";else{let i=c(s,null);e.insertAdjacentElement("afterbegin",i)}if(!e.querySelector('[data-cf-stats="urgency-block"]')){let i=c("div",{"data-cf-stats":"urgency-block",className:"cf:max-w-full cf:mx-auto cf:w-full cf:px-4"},c(n,null)),o=e.querySelector('[data-cf-hero="bright-family-house"]');o&&o.insertAdjacentElement("afterend",i)}window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"})}else console.error("Required form containers not found");var v,k;})();

(()=>{var l=Symbol.for("JSX.Fragment");var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var h=([e,t,a])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{r.setAttribute(o,String(t[o]))}),a?.length&&a.forEach(o=>{let f=h(o);r.appendChild(f)}),r},g=(e,t={})=>{let r={...d,...t};return h(["svg",r,e])};var k=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),P=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",A=e=>e.flatMap(P).map(a=>a.trim()).filter(Boolean).filter((a,r,o)=>o.indexOf(a)===r).join(" "),B=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),m=(e,{nameAttr:t,icons:a,attrs:r})=>{let o=e.getAttribute(t);if(o==null)return;let f=B(o),u=a[f];if(!u)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let n=k(e),c={...d,"data-lucide":o,...r,...n},C=A(["lucide",`lucide-${o}`,n,r]);C&&Object.assign(c,{class:C});let w=g(u,c);return e.parentNode?.replaceChild(w,e)};var p=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];var x=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];var i=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];var S=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=r.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(f=>m(f,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){let f=r.querySelectorAll("[icon-name]");f.length>0&&Array.from(f).forEach(u=>m(u,{nameAttr:"icon-name",icons:e,attrs:a}))}};S({icons:{AlertCircle:p,ShieldOff:x,Sun:i}});})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/icons/circle-alert.js:
lucide/dist/esm/icons/shield-off.js:
lucide/dist/esm/icons/sun.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

(function(){try{var t=document.createElement("style");t.type="text/css",t.dataset.coframe="variant-css",t.textContent='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial}}}:root,:host{--cf-color-orange-50:oklch(98% .016 73.684);--cf-color-amber-50:oklch(98.7% .022 95.277);--cf-color-amber-200:oklch(92.4% .12 95.746);--cf-color-amber-700:oklch(55.5% .163 48.998);--cf-color-gray-700:oklch(37.3% .034 259.733);--cf-color-gray-900:oklch(21% .034 264.665);--cf-color-black:#000;--cf-color-white:#fff;--cf-spacing:.25rem;--cf-container-2xl:42rem;--cf-container-4xl:56rem;--cf-text-xs:.75rem;--cf-text-xs--line-height:calc(1/.75);--cf-text-sm:.875rem;--cf-text-sm--line-height:calc(1.25/.875);--cf-text-base:1rem;--cf-text-base--line-height:calc(1.5/1);--cf-text-lg:1.125rem;--cf-text-lg--line-height:calc(1.75/1.125);--cf-text-2xl:1.5rem;--cf-text-2xl--line-height:calc(2/1.5);--cf-text-3xl:1.875rem;--cf-text-3xl--line-height:calc(2.25/1.875);--cf-text-4xl:2.25rem;--cf-text-4xl--line-height:calc(2.5/2.25);--cf-font-weight-normal:400;--cf-font-weight-bold:700;--cf-tracking-wide:.025em;--cf-leading-tight:1.25;--cf-leading-relaxed:1.625}.cf\\:absolute{position:absolute}.cf\\:relative{position:relative}.cf\\:inset-0{inset:calc(var(--cf-spacing)*0)}.cf\\:z-10{z-index:10}.cf\\:mx-auto{margin-inline:auto}.cf\\:my-6{margin-block:calc(var(--cf-spacing)*6)}.cf\\:mb-1{margin-bottom:calc(var(--cf-spacing)*1)}.cf\\:mb-3{margin-bottom:calc(var(--cf-spacing)*3)}.cf\\:flex{display:flex}.cf\\:grid{display:grid}.cf\\:w-full{width:100%}.cf\\:max-w-2xl{max-width:var(--cf-container-2xl)}.cf\\:max-w-4xl{max-width:var(--cf-container-4xl)}.cf\\:max-w-full{max-width:100%}.cf\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.cf\\:flex-col{flex-direction:column}.cf\\:items-center{align-items:center}.cf\\:items-start{align-items:flex-start}.cf\\:justify-center{justify-content:center}.cf\\:gap-6{gap:calc(var(--cf-spacing)*6)}.cf\\:border{border-style:var(--tw-border-style);border-width:1px}.cf\\:border-amber-200{border-color:var(--cf-color-amber-200)}.cf\\:bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.cf\\:from-amber-50{--tw-gradient-from:var(--cf-color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:from-black\\/50{--tw-gradient-from:var(--cf-color-black)}@supports (color:color-mix(in lab, red, red)){.cf\\:from-black\\/50{--tw-gradient-from:color-mix(in oklab,var(--cf-color-black)50%,transparent)}}.cf\\:from-black\\/50{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:to-black\\/40{--tw-gradient-to:var(--cf-color-black)}@supports (color:color-mix(in lab, red, red)){.cf\\:to-black\\/40{--tw-gradient-to:color-mix(in oklab,var(--cf-color-black)40%,transparent)}}.cf\\:to-black\\/40{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:to-orange-50{--tw-gradient-to:var(--cf-color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:bg-cover{background-size:cover}.cf\\:bg-center{background-position:50%}.cf\\:bg-no-repeat{background-repeat:no-repeat}.cf\\:px-4{padding-inline:calc(var(--cf-spacing)*4)}.cf\\:px-6{padding-inline:calc(var(--cf-spacing)*6)}.cf\\:py-8{padding-block:calc(var(--cf-spacing)*8)}.cf\\:py-12{padding-block:calc(var(--cf-spacing)*12)}.cf\\:text-center{text-align:center}.cf\\:text-2xl{font-size:var(--cf-text-2xl);line-height:var(--tw-leading,var(--cf-text-2xl--line-height))}.cf\\:text-3xl{font-size:var(--cf-text-3xl);line-height:var(--tw-leading,var(--cf-text-3xl--line-height))}.cf\\:text-base{font-size:var(--cf-text-base);line-height:var(--tw-leading,var(--cf-text-base--line-height))}.cf\\:text-sm{font-size:var(--cf-text-sm);line-height:var(--tw-leading,var(--cf-text-sm--line-height))}.cf\\:text-xs{font-size:var(--cf-text-xs);line-height:var(--tw-leading,var(--cf-text-xs--line-height))}.cf\\:leading-relaxed{--tw-leading:var(--cf-leading-relaxed);line-height:var(--cf-leading-relaxed)}.cf\\:leading-tight{--tw-leading:var(--cf-leading-tight);line-height:var(--cf-leading-tight)}.cf\\:font-bold{--tw-font-weight:var(--cf-font-weight-bold);font-weight:var(--cf-font-weight-bold)}.cf\\:font-normal{--tw-font-weight:var(--cf-font-weight-normal);font-weight:var(--cf-font-weight-normal)}.cf\\:tracking-wide{--tw-tracking:var(--cf-tracking-wide);letter-spacing:var(--cf-tracking-wide)}.cf\\:text-amber-700{color:var(--cf-color-amber-700)}.cf\\:text-gray-700{color:var(--cf-color-gray-700)}.cf\\:text-gray-900{color:var(--cf-color-gray-900)}.cf\\:text-white,.cf\\:text-white\\/90{color:var(--cf-color-white)}@supports (color:color-mix(in lab, red, red)){.cf\\:text-white\\/90{color:color-mix(in oklab,var(--cf-color-white)90%,transparent)}}.cf\\:uppercase{text-transform:uppercase}@media (min-width:48rem){.cf\\:md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.cf\\:md\\:text-4xl{font-size:var(--cf-text-4xl);line-height:var(--tw-leading,var(--cf-text-4xl--line-height))}.cf\\:md\\:text-lg{font-size:var(--cf-text-lg);line-height:var(--tw-leading,var(--cf-text-lg--line-height))}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}',document.head.appendChild(t)}catch(e){console.error("Failed to inject variant CSS",e)}})();
