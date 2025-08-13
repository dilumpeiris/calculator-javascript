let moveCurser = function (rel, input) {
	input.selectionStart = input.selectionEnd = input.selectionStart + rel;
};
let insertAtCurser = function (text, input) {
	const selectionStart = input.selectionStart;
	const selectionEnd = input.selectionEnd;

	input.value =
		input.value.slice(0, selectionStart) +
		text +
		input.value.slice(selectionEnd);

	input.selectionStart = input.selectionEnd = selectionStart + text.length;

	/* OR
	moveCurser(
		-1 * (input.value.length - (selectionStart + text.length)),
		input
	);
	*/

	input.focus();
};

let addToInput = function () {
	const input = document.getElementById('input-box');
	const result = document.getElementById('result');

	switch (this.textContent) {
		case 'AC':
			input.value = '';
			break;
		case '=':
			try {
				result.textContent = eval(input.value) + ' =';
				input.value = '';
			} catch (e) {
				result.textContent = 'ERROR =';
				input.value = '';
			} finally {
				break;
			}
		case '()':
			insertAtCurser(this.textContent, input);
			moveCurser(-1, input);
			break;

		default:
			insertAtCurser(this.textContent, input);
	}
};

document.addEventListener('DOMContentLoaded', function () {
	const calc_body = document.getElementById('calc-body');
	const calc_operations = document.getElementById('calc-operations');

	let operations = [
		['add', '+'],
		['minus', '-'],
		['mult', 'x'],
		['div', '/'],
		['equal', '='],
	];

	let keypad = [
		['AC', 'AC'],
		['changeSign', '+/-'],
		['percent', '%'],
		['1', '1'],
		['2', '2'],
		['3', '3'],
		['4', '4'],
		['5', '5'],
		['6', '6'],
		['7', '7'],
		['8', '8'],
		['9', '9'],
		['brack', '()'],
		['0', '0'],
		['dot', '.'],
	];

	for (let i = 0; i < 5; i++) {
		const calc_sqr = document.createElement('div');
		calc_sqr.classList.add(
			'flex',
			'bg-red-100',
			'w-full',
			'h-full',
			'items-center',
			'justify-center',
			'm-1',
			'text-5xl',
			'font-bold'
		);
		calc_sqr.onclick = addToInput;
		calc_sqr.textContent = operations[i][1];
		calc_operations.appendChild(calc_sqr);
	}

	for (let i = 0; i < 15; i += 3) {
		const calc_row = document.createElement('div');
		calc_row.classList.add(
			'flex',
			'flex-row',
			'w-full',
			'h-full',
			'items-center',
			'justify-center',
			'm-1'
		);

		for (let j = i; j < i + 3; j++) {
			const calc_sqr = document.createElement('div');
			calc_sqr.classList.add(
				'flex',
				'bg-red-100',
				'w-full',
				'h-full',
				'items-center',
				'justify-center',
				'm-1',
				'text-5xl',
				'font-bold'
			);

			calc_sqr.onclick = addToInput;
			calc_sqr.textContent = keypad[j][1];
			calc_row.appendChild(calc_sqr);
		}
		calc_body.appendChild(calc_row);
	}
});
