/** @module Helpers */

/**
 * Function parsing hex color to the rgba format color.
 *
 * @param {String} hex - The hex format color.
 * @param {Number} opacity - The opacity.
 * @returns {string} - The rgba format color.
 */
export const hexToRgba = (hex, opacity) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return `${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, ${opacity}`;
};