"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareObjectsArray = exports.compareObjects = exports.formatMorganDate = void 0;
/**
 * Function to return a string representing a date from a formatted date object
 *
 * @param {object} date
 * @return {string}
 */
function formatMorganDate(date) {
    if (typeof date === "string") {
        date = new Date(date);
    }
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const year = date.getFullYear(), month = months[date.getMonth()], day = date.getDate(), hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`, minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    return `${day} ${month} ${year} à ${hour}h${minutes}`;
}
exports.formatMorganDate = formatMorganDate;
/**
 * Function to compare if two objects have the same content
 *
 * @param {object} obj1
 * @param {object} obj2
 * @return boolean
 */
const compareObjects = (obj1, obj2) => {
    return Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(p => obj1[p] === obj2[p]);
};
exports.compareObjects = compareObjects;
/**
 * Function to compare if two array of objects have the same content
 *
 * @param {object} obj1
 * @param {object} obj2
 * @return boolean
 */
const compareObjectsArray = (arr1, arr2) => {
    let arr = [];
    console.log("arrs =>", arr1, arr2);
    arr1.forEach((item) => {
        console.log(typeof item);
        const isSame = Object.keys(item).length === Object.keys(arr2).length && Object.keys(item).every(i => item[i] === arr2[i]);
        arr.push(isSame);
    });
    console.log("isSame =>", arr);
    return arr.every(item => item === true);
};
exports.compareObjectsArray = compareObjectsArray;
