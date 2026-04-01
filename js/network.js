/**
 * network.js — CPPCalc.ca Canadian Calculator Network
 * Renders related tools and footer network links dynamically.
 * Do not hardcode related tool links in HTML.
 */

(function () {
  "use strict";

  const NETWORK = {
    hub: {
      name: "Calc-HQ Canada",
      url: "https://calc-hq.ca",
      description: "Canadian financial calculator network hub",
    },
    tools: [
      {
        live: true,
        name: "Ontario Take Home Calc",
        url: "https://ontariotakehomecalc.ca",
        description:
          "Estimate your Ontario net pay after federal and provincial taxes, CPP, and EI deductions.",
        tags: ["payroll", "ontario", "tax"],
      },
      {
        live: true,
        name: "EI Calculator Canada",
        url: "https://eicalc.ca",
        description:
          "Calculate your Employment Insurance (EI) premiums and benefit entitlements.",
        tags: ["ei", "employment insurance", "benefits"],
      },
    ],
    selfDomain: "cppcalc.ca",
  };

  function getRelatedTools() {
    return NETWORK.tools.filter(
      (t) => t.live === true && !t.url.includes(NETWORK.selfDomain)
    );
  }

  function renderRelatedCalculators(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tools = getRelatedTools();
    if (tools.length === 0) {
      container.innerHTML = "<p>No related tools available.</p>";
      return;
    }

    const cards = tools
      .map(
        (tool) => `
      <a href="${tool.url}" class="related-card" target="_blank" rel="noopener noreferrer">
        <span class="related-card-name">${tool.name}</span>
        <span class="related-card-desc">${tool.description}</span>
        <span class="related-card-link">Visit tool →</span>
      </a>`
      )
      .join("");

    container.innerHTML = cards;
  }

  function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tools = getRelatedTools();
    const toolLinks = tools
      .map(
        (t) =>
          `<a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.name}</a>`
      )
      .join("");

    container.innerHTML = `
      <div class="footer-grid">
        <div class="footer-col">
          <h4>CPP Calc</h4>
          <p>A free Canada Pension Plan contribution estimator for employees and self-employed Canadians.</p>
          <p class="footer-email">Questions? <a href="mailto:partnerships@calc-hq.ca">partnerships@calc-hq.ca</a></p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <a href="index.html">CPP Calculator</a>
          <a href="faq.html">FAQ</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms.html">Terms</a>
          <a href="disclaimer.html">Disclaimer</a>
        </div>
        <div class="footer-col">
          <h4>Related Calculators</h4>
          ${toolLinks}
        </div>
        <div class="footer-col">
          <h4>Network Hub</h4>
          <a href="${NETWORK.hub.url}" target="_blank" rel="noopener noreferrer">${NETWORK.hub.name}</a>
          <span class="footer-hub-desc">${NETWORK.hub.description}</span>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} cppcalc.ca — For estimation purposes only. Not official CRA guidance.</p>
        <p>Canada Pension Plan rates sourced from publicly available Government of Canada information.</p>
      </div>
    `;
  }

  // Auto-init on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    renderRelatedCalculators("network-related-calculators");
    renderFooter("network-footer");
  });

  // Expose API
  window.NetworkJS = {
    renderRelatedCalculators,
    renderFooter,
    getRelatedTools,
    hub: NETWORK.hub,
  };
})();
