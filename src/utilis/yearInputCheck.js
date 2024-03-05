export function yearInputCheck(setter, filed, eobj) {
	if (filed == 0 || filed == "") {
		setter((prev) => {
			return {
				...prev,
				errorYear: {
					...eobj,
					state: true,
					empty: true,
					msg: "This field is required",
				},
			};
		});

		return false;
	} else if (filed != 0) {
        const now = new Date();
		if (filed <= now.getFullYear()) {
			setter((prev) => {
				return { ...prev, errorYear: { ...eobj, state: false } };
			});
			return true;
		} else {
			setter((prev) => {
				return {
					...prev,
					errorYear: { ...eobj, state: true, msg: "Must by in past" },
				};
			});
			return false;
		}
	} else {
		setter((prev) => {
			return {
				...prev,
				errorYear: { ...eobj, state: false, empty: false },
			};
		});
		return true;
	}
}
