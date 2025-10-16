let testInfo = {
  name: `CF XX - [Homepage]: Reorder Sections & Enhanced FAQ Design`,
};

let testInitiated = initTest(testInfo);
if (!testInitiated) return false;

addStyling();
monitorChangesByConditionAndRun(checkForElements, onElementsFound);

function onElementsFound() {
  console.log(`Running Code for: `, testInfo.name, testInfo);
  document
    .querySelector(`body`)
    ?.setAttribute(`cf-test-active`, testInfo.name);

  try {
    let allChangesApplied = true;

    // Part 1: Section Reordering - Move "Be the First to Watch" above "Try free for 7 days"
    const freeTrialSection = document.querySelector('.cr-premium-products-rounded');
    const beFirstSection = document.querySelector('.cr-browse-section');
    
    if (freeTrialSection && beFirstSection && !beFirstSection.hasAttribute('data-cf-reordered')) {
      freeTrialSection.parentNode?.insertBefore(beFirstSection, freeTrialSection);
      beFirstSection.setAttribute('data-cf-reordered', 'true');
      console.log('Successfully reordered sections: Be First to Watch now appears before Free Trial');
    } else if (!freeTrialSection || !beFirstSection) {
      console.error('Required sections not found for reordering');
      allChangesApplied = false;
    }

    // Part 2: FAQ Enhancement - Add animations, hover effects, and rotating chevron icons
    const faqDetails = document.querySelectorAll('details');
    console.log(`Found ${faqDetails.length} FAQ details elements`);

    if (faqDetails.length > 0) {
      faqDetails.forEach((details) => {
        if (details.hasAttribute('data-cf-enhanced')) {
          return;
        }

        const summary = details.querySelector('summary');
        if (!summary) return;

        // Add hover effects and spacing to details element
        details.classList.add(
          'cf:transition-all',
          'cf:duration-300',
          'cf:border',
          // 'cf:border-transparent',
          'cf:border-[#fff]',
          'cf:hover:border-[#ff5e00]',
          'cf:hover:bg-gradient-to-r',
          'cf:hover:from-transparent',
          'cf:hover:to-[#ff5e00]/10',
          'cf:rounded-lg',
          'cf:px-4',
          'cf:py-3',
          'cf:my-2'
        );
        
        // Enhance summary styling
        summary.classList.add(
          'cf:font-semibold',
          'cf:cursor-pointer',
          'cf:flex',
          'cf:items-center',
          'cf:justify-between',
          'cf:transition-colors',
          'cf:duration-200'
        );
        
        // Get all content elements after summary
        const contentElements = Array.from(details.children).filter(
          (child) => child !== summary
        ) as HTMLElement[];

        contentElements.forEach((content) => {
          content.classList.add('cf-faq-content', 'cf:overflow-hidden');
        });

        // Mark as enhanced to prevent duplicate modifications
        details.setAttribute('data-cf-enhanced', 'true');
      });

      console.log('Successfully enhanced FAQ design with animations and hover effects');
    }

    // Emit variant rendered only if all changes applied successfully
    if (allChangesApplied) {
      window.CFQ = window.CFQ || [];
      window.CFQ.push({ emit: 'variantRendered' });
      console.log('Variant successfully rendered');
    }

  } catch (error) {
    console.error('Error applying variant changes:', error);
  }
}

function checkForElements() {
  try {
    const cfDefined = typeof window.CF !== "undefined";
    console.log("Check: typeof window.CF !== 'undefined' =>", cfDefined);

    const testActiveSelector = `body[cf-test-active="${testInfo.name}"]`;
    const testActiveElem = document.querySelector(testActiveSelector);
    const testActiveAbsent = !testActiveElem;
    console.log(`Check: !document.querySelector('${testActiveSelector}') =>`, testActiveAbsent);

    const freeTrialSection = document.querySelector('.cr-premium-products-rounded');
    const freeTrialExists = !!freeTrialSection;
    console.log('Check: .cr-premium-products-rounded exists =>', freeTrialExists);

    const beFirstSection = document.querySelector('.cr-browse-section');
    const beFirstExists = !!beFirstSection;
    console.log('Check: .cr-browse-section exists =>', beFirstExists);

    const faqDetails = document.querySelectorAll('details');
    const faqsExist = faqDetails.length > 0;
    console.log('Check: details elements exist (count:', faqDetails.length, ') =>', faqsExist);

    return cfDefined && testActiveAbsent && freeTrialExists && beFirstExists && faqsExist;
  } catch (e) {
    console.error("Check error:", e);
    return false;
  }
}

function addStyling() {
  let cssArray = [
    {
      desc: `FAQ Enhancement Animations`,
      css: `
        /* Smooth slide-down animation for FAQ content */
        @keyframes cf-slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }

        /* Hide default browser disclosure marker */
        details[data-cf-enhanced] summary {
          list-style: none;
        }
        
        details[data-cf-enhanced] summary::-webkit-details-marker {
          display: none;
        }

        /* Apply animation to FAQ content when details is open */
        details[open] .cf-faq-content {
          animation: cf-slideDown 0.3s ease-out forwards;
        }

        /* Chevron rotation animation when FAQ expands */
        .cf-chevron-rotate {
          transform: rotate(180deg);
        }

        /* Additional smooth transitions */
        details[data-cf-enhanced] {
          transition: all 0.3s ease;
        }
      `,
    },
  ];

  cssArray.forEach(({ desc, css }) => {
    let newStyleElem = document.createElement(`style`);
    newStyleElem.dataset.desc = desc;
    newStyleElem.innerHTML = css;
    document.head.insertAdjacentElement(`beforeend`, newStyleElem);
  });
}

function monitorChangesByConditionAndRun(check: () => boolean, code: () => void, keepChecking = false) {
  let checkAndRun = () =>
    check() && (!keepChecking && observer.disconnect(), code());
  var observer = new MutationObserver(checkAndRun);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  checkAndRun();

  if (!keepChecking) setTimeout(() => observer.disconnect(), 10000);
}

function initTest() {
  let cfObj = window.CF || { qaTesting: false, testsRunning: [] };

  if (cfObj.testsRunning.find((test: any) => test.name == testInfo.name)) {
    console.warn(`The following test is already running: `, testInfo);
    return false;
  }

  cfObj.testsRunning = [...cfObj.testsRunning, testInfo];

  window.CF = { ...window.CF, ...cfObj };

  return { ...window.CF };
}




// Product code 

/*! Code generated by Coframe AI Editor */
(()=>{var u=(e,t)=>()=>(e&&(t=e(e=0)),t);var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var y,a=u(()=>{"use strict";y=Symbol.for("JSX.Fragment")});var w=m(()=>{a();var s={name:"CF XX - [Homepage]: Reorder Sections & Enhanced FAQ Design"},g=A(s);if(!g)return!1;b();S(p,h);function h(){s.name,document.querySelector("body")?.setAttribute("cf-test-active",s.name);try{let e=!0,t=document.querySelector(".cr-premium-products-rounded"),o=document.querySelector(".cr-browse-section");t&&o&&!o.hasAttribute("data-cf-reordered")?(t.parentNode?.insertBefore(o,t),o.setAttribute("data-cf-reordered","true")):(!t||!o)&&(console.error("Required sections not found for reordering"),e=!1);let n=document.querySelectorAll("details");`${n.length}`,n.length>0&&n.forEach(r=>{if(r.hasAttribute("data-cf-enhanced"))return;let i=r.querySelector("summary");if(!i)return;r.classList.add("cf:transition-all","cf:duration-300","cf:border","cf:border-[#fff]","cf:hover:border-[#ff5e00]","cf:hover:bg-gradient-to-r","cf:hover:from-transparent","cf:hover:to-[#ff5e00]/10","cf:rounded-lg","cf:px-4","cf:py-3","cf:my-2"),i.classList.add("cf:font-semibold","cf:cursor-pointer","cf:flex","cf:items-center","cf:justify-between","cf:transition-colors","cf:duration-200"),Array.from(r.children).filter(c=>c!==i).forEach(c=>{c.classList.add("cf-faq-content","cf:overflow-hidden")}),r.setAttribute("data-cf-enhanced","true")}),e&&(window.CFQ=window.CFQ||[],window.CFQ.push({emit:"variantRendered"}))}catch(e){console.error("Error applying variant changes:",e)}}function p(){try{let e=typeof window.CF<"u",t=`body[cf-test-active="${s.name}"]`,n=!document.querySelector(t);`${t}`;let i=!!document.querySelector(".cr-premium-products-rounded"),c=!!document.querySelector(".cr-browse-section"),l=document.querySelectorAll("details"),f=l.length>0;return l.length,e&&n&&i&&c&&f}catch(e){return console.error("Check error:",e),!1}}function b(){[{desc:"FAQ Enhancement Animations",css:`
        /* Smooth slide-down animation for FAQ content */
        @keyframes cf-slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }

        /* Hide default browser disclosure marker */
        details[data-cf-enhanced] summary {
          list-style: none;
        }
        
        details[data-cf-enhanced] summary::-webkit-details-marker {
          display: none;
        }

        /* Apply animation to FAQ content when details is open */
        details[open] .cf-faq-content {
          animation: cf-slideDown 0.3s ease-out forwards;
        }

        /* Chevron rotation animation when FAQ expands */
        .cf-chevron-rotate {
          transform: rotate(180deg);
        }

        /* Additional smooth transitions */
        details[data-cf-enhanced] {
          transition: all 0.3s ease;
        }
      `}].forEach(({desc:t,css:o})=>{let n=document.createElement("style");n.dataset.desc=t,n.innerHTML=o,document.head.insertAdjacentElement("beforeend",n)})}function S(e,t,o=!1){let n=()=>e()&&(!o&&r.disconnect(),t());var r=new MutationObserver(n);r.observe(document.documentElement,{childList:!0,subtree:!0}),n(),o||setTimeout(()=>r.disconnect(),1e4)}function A(){let e=window.CF||{qaTesting:!1,testsRunning:[]};return e.testsRunning.find(t=>t.name==s.name)?!1:(e.testsRunning=[...e.testsRunning,s],window.CF={...window.CF,...e},{...window.CF})}});w();})();

(function injectCoframeVariantCss(){
  try {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.dataset.coframe = 'variant-css';
    style.textContent = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-duration:initial;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%}}}:root,:host{--cf-spacing:.25rem;--cf-font-weight-semibold:600;--cf-radius-lg:.5rem;--cf-default-transition-duration:.15s;--cf-default-transition-timing-function:cubic-bezier(.4,0,.2,1)}.cf\\:my-2{margin-block:calc(var(--cf-spacing)*2)}.cf\\:flex{display:flex}.cf\\:cursor-pointer{cursor:pointer}.cf\\:items-center{align-items:center}.cf\\:justify-between{justify-content:space-between}.cf\\:overflow-hidden{overflow:hidden}.cf\\:rounded-lg{border-radius:var(--cf-radius-lg)}.cf\\:border{border-style:var(--tw-border-style);border-width:1px}.cf\\:border-\\[\\#fff\\]{border-color:#fff}.cf\\:border-transparent{border-color:#0000}.cf\\:px-4{padding-inline:calc(var(--cf-spacing)*4)}.cf\\:py-3{padding-block:calc(var(--cf-spacing)*3)}.cf\\:font-semibold{--tw-font-weight:var(--cf-font-weight-semibold);font-weight:var(--cf-font-weight-semibold)}.cf\\:transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--cf-default-transition-timing-function));transition-duration:var(--tw-duration,var(--cf-default-transition-duration))}.cf\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--cf-default-transition-timing-function));transition-duration:var(--tw-duration,var(--cf-default-transition-duration))}.cf\\:duration-200{--tw-duration:.2s;transition-duration:.2s}.cf\\:duration-300{--tw-duration:.3s;transition-duration:.3s}@media (hover:hover){.cf\\:hover\\:border-\\[\\#ff5e00\\]:hover{border-color:#ff5e00}.cf\\:hover\\:bg-gradient-to-r:hover{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.cf\\:hover\\:from-transparent:hover{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.cf\\:hover\\:to-\\[\\#ff5e00\\]\\/10:hover{--tw-gradient-to:oklab(68.6033% .15851 .13847/.1);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}";
    document.head.appendChild(style);
  } catch(e) {
    console.error('Failed to inject variant CSS', e);
  }
})();