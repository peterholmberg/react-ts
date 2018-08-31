export const COLLAPSE_SIDE_MENU = Symbol('COLLAPSE_SIDE_MENU');
export const SHOW_SIDE_MENU = Symbol('SHOW_SIDE_MENU');

export function collapseSideMenu() {
  return {
    type: COLLAPSE_SIDE_MENU,
  };
}

export function showSideMenu() {
  return {
    type: SHOW_SIDE_MENU,
  };
}
