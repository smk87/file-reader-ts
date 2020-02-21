"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var datePart = dateString.split("/").map(function (datePart) {
        return parseInt(datePart);
    });
    return new Date(datePart[2], datePart[1] - 1);
};
