"use strict"
function saveInformation() {
    var typeInsurance = document.getElementById("typeInsurance").value;
    var numberPolicy = document.getElementById("numberPolicy").value;
	var nameInsurer = document.getElementById("nameInsurer").value;
	var dateSale = document.getElementById("dataSale").value;
	var premium = document.getElementById("premium").value;
	var discount  = document.getElementById("discount").value;
	var pattern = new RegExp(document.getElementById("numberPolicy").getAttribute("pattern"));
	if (pattern.test(numberPolicy)) {
		var insurancePolicy = new InsurancePolicy(typeInsurance, numberPolicy, nameInsurer, dateSale, premium, discount);
	    save(JSON.stringify(insurancePolicy));
    }
    clearTable();
    completeTable();
}

function deleteEntry() {
    var deletedRow = prompt("Enter number for deleted row", "");
    var countRow = countElements();
    if (deletedRow == null || deletedRow < countRow || deletedRow >= 0) {
        if (deletedRow == countRow) {
            deleteElement((countRow - 1).toString());
        } else {
            deleteElement((deletedRow - 1).toString());
            for (var row = deletedRow; row < countRow; row++) {
                var element = getElement(row.toString());
                setElement((row - 1).toString(), element);
            }
            deleteElement((countRow - 1).toString());
        }
    } else {
        alert("Number for deleted row is wrong!");
    }
    location.reload();
}

function deleteAllInformation() {
    deleteAll();
    clearTable();
}