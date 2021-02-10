/* eslint-disable import/prefer-default-export */

// Detect select menu
export const isSelect = (field) => !!(field?.options && 'selectedIndex' in field);
