let x = 256;
let y = 10;

document.addEventListener('DOMContentLoaded', function () {
	const calc_body = document.getElementById('calc-body');

	for (let i = 0; i < 9; i += 3) {
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

		for (let j = 1; j <= 3; j++) {
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
			calc_sqr.textContent = i + j;

			calc_row.appendChild(calc_sqr);
		}
		calc_body.appendChild(calc_row);
	}
});
