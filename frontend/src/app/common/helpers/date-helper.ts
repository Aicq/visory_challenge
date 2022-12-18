export class DateHelper {

	/**
	 * Helper function to correctly format a date object to what the format
	 * the TicketMaster API is expecting (YYYY-MM-DDTHH:mm:ssZ {example: 2020-08-01T14:00:00Z })
	 * @param dateString
	 */
	public static getTicketMasterFormattedDateString(dateString: string): string {
		// toISOString will return the following format: yyyy-MM-ddTHH:mm:ss.SSSZ
		let formattedDate = new Date(dateString).toISOString();
		// We must remove the unnecessary data at the end (.SSS)
		formattedDate = formattedDate.slice(0, -5);
		// Add back the Z
		formattedDate += 'Z';
		return formattedDate;
	}
}
