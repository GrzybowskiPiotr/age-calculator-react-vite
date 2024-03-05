export function ageCalc({ day, month, year }) {
    
    let birthDate = new Date(`${year}-${month}-${day}`);
    let currentDate = new Date();
    let yearOfBirth = birthDate.getFullYear();
    let monthOfBirth = birthDate.getMonth();
    let dayOfBirth = birthDate.getDate();

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let years = currentYear - yearOfBirth;

    if (
        currentMonth < monthOfBirth ||
        (currentMonth === monthOfBirth && currentDay < dayOfBirth)
    ) {
        years--;
    }

    let months = currentMonth - monthOfBirth;
    if (months < 0 || (months === 0 && currentDay < dayOfBirth)) {
        months = 12 - Math.abs(months);
    }

    let days = Math.abs(currentDay - dayOfBirth);

return {years,months,days}
}