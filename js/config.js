/**
 * config.js — CPPCalc.ca Central Configuration
 * Single source of truth for all CPP rate parameters.
 *
 * TO UPDATE FOR A NEW TAX YEAR:
 *   1. Change TAX_YEAR to the new year
 *   2. Update LAST_UPDATED to today's date
 *   3. Update YMPE, YAMPE, rates, and MAX values
 *      to the values published by CRA for that year
 *   4. No other code changes required
 */
const CPP_CONFIG = {
  TAX_YEAR:               2026,
  LAST_UPDATED:           "March 22, 2026",

  // ── Thresholds ────────────────────────────────────────────
  YMPE:                   74600,     // Year's Maximum Pensionable Earnings
  YAMPE:                  85000,     // Year's Additional Maximum Pensionable Earnings
  BASIC_EXEMPTION:        3500,      // Basic Exemption Amount

  // ── CPP1 Rates ────────────────────────────────────────────
  EMPLOYEE_RATE:          0.0595,    // 5.95%
  EMPLOYER_RATE:          0.0595,    // 5.95%
  get SELF_EMPLOYED_RATE() { return this.EMPLOYEE_RATE + this.EMPLOYER_RATE; },

  // ── CPP2 Rates ────────────────────────────────────────────
  CPP2_EMPLOYEE_RATE:     0.04,      // 4.00%
  CPP2_EMPLOYER_RATE:     0.04,      // 4.00%
  get CPP2_SELF_EMPLOYED_RATE() { return this.CPP2_EMPLOYEE_RATE + this.CPP2_EMPLOYER_RATE; },

  // ── CPP1 Annual Maximums ──────────────────────────────────
  MAX_EMPLOYEE_CONTRIBUTION:      4230.45,
  MAX_EMPLOYER_CONTRIBUTION:      4230.45,
  MAX_SELF_EMPLOYED_CONTRIBUTION: 8460.90,

  // ── CPP2 Annual Maximums ──────────────────────────────────
  MAX_EMPLOYEE_CPP2:              416.00,
  MAX_EMPLOYER_CPP2:              416.00,
  MAX_SELF_EMPLOYED_CPP2:         832.00,

  // ── Combined Totals (CPP1 + CPP2) ────────────────────────
  MAX_EMPLOYEE_TOTAL:             4646.45,
  MAX_EMPLOYER_TOTAL:             4646.45,
  MAX_SELF_EMPLOYED_TOTAL:        9292.90,
};
