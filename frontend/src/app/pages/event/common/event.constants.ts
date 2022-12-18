import {EventLocation} from './event.interfaces';

export const ticketMasterApiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
export const ticketMasterApiKey = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

export const eventLocations: EventLocation[] = [
	{
		countryCode: 'AU',
		label: 'Australia'
	},
	{
		countryCode: 'CA',
		label: 'Canada'
	},
	{
		countryCode: 'DE',
		label: 'Germany'
	},
	{
		countryCode: 'JP',
		label: 'Japan'
	},
	{
		countryCode: 'NZ',
		label: 'New Zealand'
	},
	{
		countryCode: 'US',
		label: 'United States of America'
	},
];
