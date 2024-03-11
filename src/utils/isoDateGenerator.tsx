export function generateISOString(): string {
    // Get the current date and time
    const currentDate = new Date();
    
    // Convert the date to an ISO 8601 formatted string
    const isoString = currentDate.toISOString();
    
    // Return the generated ISO string
    return isoString;
}