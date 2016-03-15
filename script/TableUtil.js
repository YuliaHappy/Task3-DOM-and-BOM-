"use strict"

function completeTable() {
    var table = document.getElementById("table");
    var countRow = countElements();
    for (var row = 0; row < countRow; row++) {
        var information = JSON.parse(getElement(row.toString()));
        var rowTable = table.insertRow();
        var columnTable1 = rowTable.insertCell(0);
        var columnTable2 = rowTable.insertCell(1);
        var columnTable3 = rowTable.insertCell(2);
        var columnTable4 = rowTable.insertCell(3);
        var columnTable5 = rowTable.insertCell(4);
        var columnTable6 = rowTable.insertCell(5);
        var columnTable7 = rowTable.insertCell(6);
        columnTable1.innerHTML = (row+1).toString();
        columnTable2.innerHTML = information.typeInsurance;
        columnTable3.innerHTML = information.numberPolicy;
        columnTable4.innerHTML = information.nameInsurer;
        columnTable5.innerHTML = information.dateSale;
        columnTable6.innerHTML = information.premium;
        columnTable7.innerHTML = information.discount;
    }
}

function clearTable() {
    var table = document.getElementById("table");
    for (var row = table.rows.length - 1; row > 0; row--) {
        table.deleteRow(row);
    }
}
