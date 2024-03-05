//value - value to animate;
//fn - setter of state variable;
//objField - state varible object to update  field;
export function objValAnimation(value, fn, objField) {
	let i = 0;

	const animation = setInterval(() => {
		if (!(i == value)) {
			i++;
			fn((prev) => {
				return { ...prev, [objField]: i };
			});
		} else {
			fn((prev) => {
				return { ...prev, [objField]: i };
			});
			clearInterval(animation);
		}
	}, 15);
}
