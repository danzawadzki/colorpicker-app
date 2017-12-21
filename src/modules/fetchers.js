import {CONFIG} from "./config";
import {IDS} from "./api";

/** @module Fetchers */

/**
 * Fetch arrays of objects representing colors.
 * @returns {Promise<Array,Error>} - A promise that returns a array if resolved, or an error if rejected.
 */
export function fetchColorsArray() {
    return fetch(CONFIG.apiUrl + IDS.getColorsArray)
        .then(response => response.json());
}