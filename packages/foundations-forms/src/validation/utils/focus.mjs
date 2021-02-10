import { getLabelOrLegend } from '../fields/helpers.mjs';

/**
 * Scroll to target
 */
export const scrollTo = (target) => target.scrollIntoView();

// Scroll to target and focus
export const focusTarget = (field, target) => {
  scrollTo(target || getLabelOrLegend(field));
  field.focus({ preventScroll: true });
};
