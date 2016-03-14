"use strict"

function save(information) {
    localStorage.setItem(localStorage.length.toString(), information);
}

function deleteAll() {
    localStorage.clear();
}

function countElements() {
    return localStorage.length;
}

function getElement(row) {
    return localStorage.getItem(row);
}

function setElement(row, information) {
    localStorage.setItem(row, information);
}

function deleteElement(row) {
    localStorage.removeItem(row);
}