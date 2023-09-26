export interface RecordModel {
    carrier: string;
    dateActivated: string;
    dateAdded: string;
    dateModified: string;
    hasDataUsage: boolean;
    hasSmsUsage: boolean;
    hasVoiceUsage: boolean;
    iccid: string;
    id: string;
    identity: string;
    imei: string;
    imsi: string;
    imsis: string[];
    inSession: boolean;
    locAddress: LocAddress;
    locLat: number;
    locLng: number;
    meid?: any;
    msisdn: string;
    status: string;
    tags: string[];
    terminalId: string;
}

interface LocAddress {
    streetNumber: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}