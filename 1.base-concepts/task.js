"use strict";

function solveEquation(a, b, c) {
	let d = b ** 2 - (4 * a * c);
	let arr = [];


	if (d == 0) {
		return [(-b + Math.sqrt(d)) / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (isNaN(contribution)) {
		return false;
	}

	let range = parseFloat(percent / 100 / 12); // каждый месяц столько %
	let creditBody = (amount - contribution); // сколько нужно вернуть в общем
	let perMonth = creditBody * (range + (range / ((Math.pow(1 + range, countMonths) - 1)))); // ежемесячный платеж
	let toPay = perMonth * countMonths; // общая сумма

	return +toPay.toFixed(2);
}
