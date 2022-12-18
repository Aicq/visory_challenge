export interface EventLocation {
	countryCode: string;
	label: string;
}

export interface EventPromoter {
	description: string;
	id: string;
	name: string;
}

export interface EventAccessibility {
	info: string;
	ticketLimit: number;
}

export interface EventTicketLimit {
	info: string;
}
