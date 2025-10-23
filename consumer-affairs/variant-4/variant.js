// Sesssion URL:
// https://mark-1.coframe.com/?session_id=78b54838-3e50-4f04-985b-e0b6be3430ef



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

  // Create trust & proof block component
  function TrustBlock() {
    return (
      <div className="cf:w-full cf:bg-gradient-to-r cf:from-green-50 cf:to-blue-50 cf:border cf:border-green-200 cf:py-8 cf:px-4 cf:mt-8">
        <div className="cf:max-w-4xl cf:mx-auto">
          <h3 className="cf:text-lg cf:font-bold cf:text-gray-900 cf:mb-6 cf:text-center">Why Homeowners Trust Us</h3>
          <div className="cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6">
            {/* Trust Indicator 1 */}
            <div className="cf:flex cf:flex-col cf:items-center cf:text-center">
              <div className="cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-green-100 cf:rounded-full cf:mb-3">
                <i data-lucide="home" style={{ color: '#16a34a', width: '24px', height: '24px' }}></i>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">50,000+</p>
              <p className="cf:text-sm cf:text-gray-700">Trusted by homeowners nationwide</p>
            </div>

            {/* Trust Indicator 2 */}
            <div className="cf:flex cf:flex-col cf:items-center cf:text-center">
              <div className="cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-yellow-100 cf:rounded-full cf:mb-3">
                <i data-lucide="star" style={{ color: '#ca8a04', width: '24px', height: '24px' }}></i>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">4.8/5</p>
              <p className="cf:text-sm cf:text-gray-700">Average rating from verified customers</p>
            </div>

            {/* Trust Indicator 3 */}
            <div className="cf:flex cf:flex-col cf:items-center cf:text-center">
              <div className="cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-blue-100 cf:rounded-full cf:mb-3">
                <i data-lucide="shield-check" style={{ color: '#2563eb', width: '24px', height: '24px' }}></i>
              </div>
              <p className="cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1">100%</p>
              <p className="cf:text-sm cf:text-gray-700">Verified & licensed providers</p>
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

  // Insert trust block after form content
  const existingTrust = targetContainer.querySelector('[data-cf-trust="proof-block"]');
  if (!existingTrust) {
    const trustBlock = (
      <div data-cf-trust="proof-block" className="cf:max-w-full cf:mx-auto cf:w-full cf:px-4">
        <TrustBlock />
      </div>
    );
    // Insert at the end of the container (after form)
    targetContainer.insertAdjacentElement('beforeend', trustBlock);
    console.log('Added trust & proof block');
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
(()=>{var d=Symbol.for("JSX.Fragment");function e(t,n,...s){if(t==null){let f=p(),i=n&&Object.keys(n).length>0,o=s&&s.length>0,a;i?a=`<${t}
  ${Object.entries(n).map(([u,x])=>`${u}=${JSON.stringify(x)}`).join(`
  `)}${o?">":""}`:a=`<${t}${o?">":""}`;let r;throw o?r=`
  {/* children.length: ${s.length} */}
</${t}>`:r=i?`
/>`:"/>",new Error(`Invalid element type: \`${t}\`.

**Hint**: Look for code like this:
${a}${r}
${f?`within ${JSON.stringify(f)}.`:""}
`)}if(t===d){let f=document.createDocumentFragment();return l(f,s),f}if(typeof t=="function")return t({...n||{},children:N(s)});let c=typeof t=="string"?document.createElement(t):document.createElement(String(t));return n&&y(c,n),l(c,s),c}function p(){return new Error().stack?.split(`
`)?.[3]?.trim().replace(/^at\s+/,"")}function y(t,n){for(let s in n){if(s==="key")continue;let c=n[s];if(s==="ref"){typeof c=="function"?c(t):c&&typeof c=="object"&&(c.current=t);continue}if(s==="class"||s==="className"){b(t,c);continue}if(s==="style"){v(t,c);continue}if(s==="dataset"&&c&&typeof c=="object"){for(let i in c)t.dataset[i]=String(c[i]);continue}if(s==="dangerouslySetInnerHTML"&&c&&typeof c=="object"){t.innerHTML=c.__html??"";continue}if(s.startsWith("on")&&typeof c=="function"){let i=s.slice(2).toLowerCase();t.addEventListener(i,c);continue}let f=s==="for"?"htmlFor":s;try{f in t&&typeof t[f]!="function"?t[f]=c:c!==!1&&c!=null&&t.setAttribute(s,String(c))}catch{c!==!1&&c!=null&&t.setAttribute(s,String(c))}}}function b(t,n){n&&(typeof n=="string"?t.className=n:Array.isArray(n)?t.className=n.filter(Boolean).join(" "):typeof n=="object"&&(t.className=Object.keys(n).filter(s=>n[s]).join(" ")))}function v(t,n){if(!n)return;if(typeof n=="string"){t.style.cssText=n;return}let s=t.style;for(let c in n){let f=n[c];f==null||f===!1||(c in s?s[c]=String(f):t.style.setProperty(c,String(f)))}}function l(t,n){let s=c=>{c==null||c===!1||(Array.isArray(c)?c.forEach(s):c instanceof Node?t.appendChild(c):t.appendChild(document.createTextNode(String(c))))};n.forEach(s)}function N(t){return t.length<=1?t[0]:t}var m=document.querySelector(".qf-24"),g=document.querySelector(".js-q-flow-container");if(m||g){let n=function(){return e("div",{"data-cf-hero":"bright-family-house",className:"cf:w-full cf:py-12 cf:px-4 cf:bg-cover cf:bg-center cf:bg-no-repeat cf:flex cf:items-center cf:justify-center cf:relative",style:{backgroundImage:'url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")',minHeight:"360px",backgroundPosition:"center 35%"}},e("div",{className:"cf:absolute cf:inset-0 cf:bg-gradient-to-r cf:from-black/50 cf:to-black/40"}),e("div",{className:"cf:relative cf:z-10 cf:text-center cf:text-white cf:max-w-2xl cf:px-6"},e("h1",{className:"cf:text-3xl cf:md:text-4xl cf:font-bold cf:mb-3 cf:text-white cf:leading-tight"},"Ready to protect your home?"),e("p",{className:"cf:text-base cf:md:text-lg cf:font-normal cf:text-white/90 cf:leading-relaxed"},"Compare top security systems and save money in Boardman, Oregon")))},s=function(){return e("div",{className:"cf:w-full cf:bg-gradient-to-r cf:from-amber-50 cf:to-orange-50 cf:border cf:border-amber-200 cf:py-8 cf:px-4 cf:my-6"},e("div",{className:"cf:max-w-4xl cf:mx-auto"},e("div",{className:"cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6"},e("div",{className:"cf:flex cf:flex-col cf:items-start"},e("div",{className:"cf:flex cf:items-center cf:mb-3"},e("i",{"data-lucide":"alert-circle",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),e("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Risk Alert")),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"Every 25 Seconds"),e("p",{className:"cf:text-sm cf:text-gray-700"},"A burglary occurs in the U.S.")),e("div",{className:"cf:flex cf:flex-col cf:items-start"},e("div",{className:"cf:flex cf:items-center cf:mb-3"},e("i",{"data-lucide":"shield-off",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),e("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Unprotected?")),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"83% Check"),e("p",{className:"cf:text-sm cf:text-gray-700"},"Burglars verify alarm systems first")),e("div",{className:"cf:flex cf:flex-col cf:items-start"},e("div",{className:"cf:flex cf:items-center cf:mb-3"},e("i",{"data-lucide":"sun",style:{color:"#ea580c",width:"24px",height:"24px",marginRight:"8px"}}),e("span",{className:"cf:text-xs cf:font-bold cf:text-amber-700 cf:uppercase cf:tracking-wide"},"Timing")),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"Daytime Peak"),e("p",{className:"cf:text-sm cf:text-gray-700"},"Most break-ins happen while you're out")))))},c=function(){return e("div",{className:"cf:w-full cf:bg-gradient-to-r cf:from-green-50 cf:to-blue-50 cf:border cf:border-green-200 cf:py-8 cf:px-4 cf:mt-8"},e("div",{className:"cf:max-w-4xl cf:mx-auto"},e("h3",{className:"cf:text-lg cf:font-bold cf:text-gray-900 cf:mb-6 cf:text-center"},"Why Homeowners Trust Us"),e("div",{className:"cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6"},e("div",{className:"cf:flex cf:flex-col cf:items-center cf:text-center"},e("div",{className:"cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-green-100 cf:rounded-full cf:mb-3"},e("i",{"data-lucide":"home",style:{color:"#16a34a",width:"24px",height:"24px"}})),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"50,000+"),e("p",{className:"cf:text-sm cf:text-gray-700"},"Trusted by homeowners nationwide")),e("div",{className:"cf:flex cf:flex-col cf:items-center cf:text-center"},e("div",{className:"cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-yellow-100 cf:rounded-full cf:mb-3"},e("i",{"data-lucide":"star",style:{color:"#ca8a04",width:"24px",height:"24px"}})),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"4.8/5"),e("p",{className:"cf:text-sm cf:text-gray-700"},"Average rating from verified customers")),e("div",{className:"cf:flex cf:flex-col cf:items-center cf:text-center"},e("div",{className:"cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:bg-blue-100 cf:rounded-full cf:mb-3"},e("i",{"data-lucide":"shield-check",style:{color:"#2563eb",width:"24px",height:"24px"}})),e("p",{className:"cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-1"},"100%"),e("p",{className:"cf:text-sm cf:text-gray-700"},"Verified & licensed providers")))))};h=n,w=s,k=c;let t=m||g,f=t.querySelector('[data-cf-hero="bright-family-house"]');if(f instanceof HTMLElement)f.style.backgroundImage='url("https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop")',f.style.backgroundPosition="center 35%",f.style.minHeight="360px";else{let a=e(n,null);t.insertAdjacentElement("afterbegin",a)}if(!t.querySelector('[data-cf-stats="urgency-block"]')){let a=e("div",{"data-cf-stats":"urgency-block",className:"cf:max-w-full cf:mx-auto cf:w-full cf:px-4"},e(s,null)),r=t.querySelector('[data-cf-hero="bright-family-house"]');r&&r.insertAdjacentElement("afterend",a)}if(!t.querySelector('[data-cf-trust="proof-block"]')){let a=e("div",{"data-cf-trust":"proof-block",className:"cf:max-w-full cf:mx-auto cf:w-full cf:px-4"},e(c,null));t.insertAdjacentElement("beforeend",a)}window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"})}else console.error("Required form containers not found");var h,w,k;})();

(()=>{var f=Symbol.for("JSX.Fragment");var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var w=([e,t,a])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{r.setAttribute(o,String(t[o]))}),a?.length&&a.forEach(o=>{let s=w(o);r.appendChild(s)}),r},k=(e,t={})=>{let r={...d,...t};return w(["svg",r,e])};var M=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),B=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",y=e=>e.flatMap(B).map(a=>a.trim()).filter(Boolean).filter((a,r,o)=>o.indexOf(a)===r).join(" "),D=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),x=(e,{nameAttr:t,icons:a,attrs:r})=>{let o=e.getAttribute(t);if(o==null)return;let s=D(o),u=a[s];if(!u)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let h=M(e),g={...d,"data-lucide":o,...r,...h},S=y(["lucide",`lucide-${o}`,h,r]);S&&Object.assign(g,{class:S});let A=k(u,g);return e.parentNode?.replaceChild(A,e)};var p=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];var m=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];var i=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];var n=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];var c=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];var C=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];var P=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=r.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(s=>x(s,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){let s=r.querySelectorAll("[icon-name]");s.length>0&&Array.from(s).forEach(u=>x(u,{nameAttr:"icon-name",icons:e,attrs:a}))}};P({icons:{AlertCircle:p,ShieldOff:n,Sun:C,Home:m,Star:c,ShieldCheck:i}});})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/icons/circle-alert.js:
lucide/dist/esm/icons/house.js:
lucide/dist/esm/icons/shield-check.js:
lucide/dist/esm/icons/shield-off.js:
lucide/dist/esm/icons/star.js:
lucide/dist/esm/icons/sun.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

(function(){try{var t=document.createElement("style");t.type="text/css",t.dataset.coframe="variant-css",t.textContent='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial}}}:root,:host{--cf-color-orange-50:oklch(98% .016 73.684);--cf-color-amber-50:oklch(98.7% .022 95.277);--cf-color-amber-200:oklch(92.4% .12 95.746);--cf-color-amber-700:oklch(55.5% .163 48.998);--cf-color-yellow-100:oklch(97.3% .071 103.193);--cf-color-green-50:oklch(98.2% .018 155.826);--cf-color-green-100:oklch(96.2% .044 156.743);--cf-color-green-200:oklch(92.5% .084 155.995);--cf-color-blue-50:oklch(97% .014 254.604);--cf-color-blue-100:oklch(93.2% .032 255.585);--cf-color-gray-700:oklch(37.3% .034 259.733);--cf-color-gray-900:oklch(21% .034 264.665);--cf-color-black:#000;--cf-color-white:#fff;--cf-spacing:.25rem;--cf-container-2xl:42rem;--cf-container-4xl:56rem;--cf-text-xs:.75rem;--cf-text-xs--line-height:calc(1/.75);--cf-text-sm:.875rem;--cf-text-sm--line-height:calc(1.25/.875);--cf-text-base:1rem;--cf-text-base--line-height:calc(1.5/1);--cf-text-lg:1.125rem;--cf-text-lg--line-height:calc(1.75/1.125);--cf-text-2xl:1.5rem;--cf-text-2xl--line-height:calc(2/1.5);--cf-text-3xl:1.875rem;--cf-text-3xl--line-height:calc(2.25/1.875);--cf-text-4xl:2.25rem;--cf-text-4xl--line-height:calc(2.5/2.25);--cf-font-weight-normal:400;--cf-font-weight-bold:700;--cf-tracking-wide:.025em;--cf-leading-tight:1.25;--cf-leading-relaxed:1.625}.cf\\:absolute{position:absolute}.cf\\:relative{position:relative}.cf\\:inset-0{inset:calc(var(--cf-spacing)*0)}.cf\\:z-10{z-index:10}.cf\\:mx-auto{margin-inline:auto}.cf\\:my-6{margin-block:calc(var(--cf-spacing)*6)}.cf\\:mt-8{margin-top:calc(var(--cf-spacing)*8)}.cf\\:mb-1{margin-bottom:calc(var(--cf-spacing)*1)}.cf\\:mb-3{margin-bottom:calc(var(--cf-spacing)*3)}.cf\\:mb-6{margin-bottom:calc(var(--cf-spacing)*6)}.cf\\:flex{display:flex}.cf\\:grid{display:grid}.cf\\:h-12{height:calc(var(--cf-spacing)*12)}.cf\\:w-12{width:calc(var(--cf-spacing)*12)}.cf\\:w-full{width:100%}.cf\\:max-w-2xl{max-width:var(--cf-container-2xl)}.cf\\:max-w-4xl{max-width:var(--cf-container-4xl)}.cf\\:max-w-full{max-width:100%}.cf\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.cf\\:flex-col{flex-direction:column}.cf\\:items-center{align-items:center}.cf\\:items-start{align-items:flex-start}.cf\\:justify-center{justify-content:center}.cf\\:gap-6{gap:calc(var(--cf-spacing)*6)}.cf\\:rounded-full{border-radius:3.40282e38px}.cf\\:border{border-style:var(--tw-border-style);border-width:1px}.cf\\:border-amber-200{border-color:var(--cf-color-amber-200)}.cf\\:border-green-200{border-color:var(--cf-color-green-200)}.cf\\:bg-blue-100{background-color:var(--cf-color-blue-100)}.cf\\:bg-green-100{background-color:var(--cf-color-green-100)}.cf\\:bg-yellow-100{background-color:var(--cf-color-yellow-100)}.cf\\:bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.cf\\:from-amber-50{--tw-gradient-from:var(--cf-color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:from-black\\/50{--tw-gradient-from:var(--cf-color-black)}@supports (color:color-mix(in lab, red, red)){.cf\\:from-black\\/50{--tw-gradient-from:color-mix(in oklab,var(--cf-color-black)50%,transparent)}}.cf\\:from-black\\/50{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:from-green-50{--tw-gradient-from:var(--cf-color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:to-black\\/40{--tw-gradient-to:var(--cf-color-black)}@supports (color:color-mix(in lab, red, red)){.cf\\:to-black\\/40{--tw-gradient-to:color-mix(in oklab,var(--cf-color-black)40%,transparent)}}.cf\\:to-black\\/40{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:to-blue-50{--tw-gradient-to:var(--cf-color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:to-orange-50{--tw-gradient-to:var(--cf-color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:bg-cover{background-size:cover}.cf\\:bg-center{background-position:50%}.cf\\:bg-no-repeat{background-repeat:no-repeat}.cf\\:px-4{padding-inline:calc(var(--cf-spacing)*4)}.cf\\:px-6{padding-inline:calc(var(--cf-spacing)*6)}.cf\\:py-8{padding-block:calc(var(--cf-spacing)*8)}.cf\\:py-12{padding-block:calc(var(--cf-spacing)*12)}.cf\\:text-center{text-align:center}.cf\\:text-2xl{font-size:var(--cf-text-2xl);line-height:var(--tw-leading,var(--cf-text-2xl--line-height))}.cf\\:text-3xl{font-size:var(--cf-text-3xl);line-height:var(--tw-leading,var(--cf-text-3xl--line-height))}.cf\\:text-base{font-size:var(--cf-text-base);line-height:var(--tw-leading,var(--cf-text-base--line-height))}.cf\\:text-lg{font-size:var(--cf-text-lg);line-height:var(--tw-leading,var(--cf-text-lg--line-height))}.cf\\:text-sm{font-size:var(--cf-text-sm);line-height:var(--tw-leading,var(--cf-text-sm--line-height))}.cf\\:text-xs{font-size:var(--cf-text-xs);line-height:var(--tw-leading,var(--cf-text-xs--line-height))}.cf\\:leading-relaxed{--tw-leading:var(--cf-leading-relaxed);line-height:var(--cf-leading-relaxed)}.cf\\:leading-tight{--tw-leading:var(--cf-leading-tight);line-height:var(--cf-leading-tight)}.cf\\:font-bold{--tw-font-weight:var(--cf-font-weight-bold);font-weight:var(--cf-font-weight-bold)}.cf\\:font-normal{--tw-font-weight:var(--cf-font-weight-normal);font-weight:var(--cf-font-weight-normal)}.cf\\:tracking-wide{--tw-tracking:var(--cf-tracking-wide);letter-spacing:var(--cf-tracking-wide)}.cf\\:text-amber-700{color:var(--cf-color-amber-700)}.cf\\:text-gray-700{color:var(--cf-color-gray-700)}.cf\\:text-gray-900{color:var(--cf-color-gray-900)}.cf\\:text-white,.cf\\:text-white\\/90{color:var(--cf-color-white)}@supports (color:color-mix(in lab, red, red)){.cf\\:text-white\\/90{color:color-mix(in oklab,var(--cf-color-white)90%,transparent)}}.cf\\:uppercase{text-transform:uppercase}@media (min-width:48rem){.cf\\:md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.cf\\:md\\:text-4xl{font-size:var(--cf-text-4xl);line-height:var(--tw-leading,var(--cf-text-4xl--line-height))}.cf\\:md\\:text-lg{font-size:var(--cf-text-lg);line-height:var(--tw-leading,var(--cf-text-lg--line-height))}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}',document.head.appendChild(t)}catch(r){console.error("Failed to inject variant CSS",r)}})();
