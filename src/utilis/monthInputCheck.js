export function monthInputCheck(setter, filed, eobj) {
	if (filed == 0 || filed == "") {
		setter((prev) => {
			return {
				...prev,
				errorMonth: {
					...eobj,
					state: true,
					empty: true,
					msg: "This field is required",
				},
			};
		});

		return false;
	} else if (filed != 0 || filed == "") {
		if (filed <= 12) {
			setter((prev) => {
				return { ...prev, errorMonth: { ...eobj, state: false } };
			});
			return true;
		} else if (!(filed <= 12)) {
			setter((prev) => {
				return {
					...prev,
					errorMonth: { state: true, msg: "Must by a valid Month" },
				};
			});
			return false;
		} else {
			setter((prev) => {
				return {
					...prev,
					errorMonth: { ...eobj, state: false, empty: false },
				};
			});
			return true;
		}
	}
}
