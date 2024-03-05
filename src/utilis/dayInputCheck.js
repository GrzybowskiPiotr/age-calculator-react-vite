export function dayInputCheck(setter, filed, eobj) {
	if (filed == 0 || filed == "") {
		setter((prev) => {
			return {
				...prev,
				errorDay: {
					...eobj,
					state: true,
					empty: true,
					msg: "This field is required",
				},
			};
		});

		return false;
	} else if (filed != 0 || filed == "") {
		if (filed <= 31) {
			setter((prev) => {
				return { ...prev, errorDay: { ...eobj, state: false } };
			});
			return true;
		} else if (!(filed <= 31)) {
			setter((prev) => {
				return {
					...prev,
					errorDay: { state: true, msg: "Must by a valid filed" },
				};
			});
		}
		return false;
	} else {
		setter((prev) => {
			return {
				...prev,
				errorDay: { ...eobj, state: false, empty: false },
			};
		});
		return true;
	}
}
