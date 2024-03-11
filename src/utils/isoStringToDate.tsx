export function getDateAndTime(isoString: string | undefined) {
    // Create a new Date object from the ISO string
    let date;
    if(isoString) date = new Date(isoString);

    // Get the date components
    const year = date?.getFullYear();
    const month = date && String(date.getMonth() + 1).padStart(2, '0');
    const day = date && String(date.getDate()).padStart(2, '0');

    // Get the time components
    const hours = date && String(date.getHours()).padStart(2, '0');
    const minutes = date && String(date.getMinutes()).padStart(2, '0');

    // Construct date and time strings
    const dateString = `${year}-${month}-${day}`;
    const timeString = `${hours}:${minutes}`;

    // Return an object containing date and time separately
    return { date: dateString, time: timeString };
}