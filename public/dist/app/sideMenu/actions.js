export var COLLAPSE_SIDE_MENU = Symbol('COLLAPSE_SIDE_MENU');
export var SHOW_SIDE_MENU = Symbol('SHOW_SIDE_MENU');
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
//# sourceMappingURL=actions.js.map