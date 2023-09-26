import { Injectable } from '@angular/core';
import { RecordModel } from '../models/record';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private record: RecordModel = {
    id: '555555555555555555555555',
    terminalId: 'B0129D9A',
    carrier: 'Vodafone',
    dateActivated: '2021-07-08T15:14:05Z',
    dateAdded: '2014-08-25T10:49:14Z',
    dateModified: '2021-09-17T13:57:27Z',
    hasDataUsage: true,
    hasSmsUsage: true,
    hasVoiceUsage: true,
    iccid: '89000000000000001280',
    identity: 'ICCID: 89000000000000001280',
    imei: '300000000000008',
    imsi: '310000000000008',
    imsis: ['310000000000008'],
    inSession: true,
    locAddress: {
      streetNumber: '5300',
      street: 'Brokensound BLVD NW',
      city: 'Boca Raton',
      state: 'Florida',
      zipCode: '33487',
      country: 'US',
    },
    locLat: 26.3951167,
    locLng: -80.1146146,
    meid: null,
    msisdn: '5555555551',
    status: 'activated',
    tags: ['has_imei', 'has_imsi', 'has_iccid', 'has_msisdn'],
  };
  private recordList: RecordModel[] = [];
  private headerKeys: string[] = [];
  constructor() {
    this.addRecordsToList(22);
    this.headerKeys = Object.keys(this.record);
  }

  getRecordHeaders(): string[] {
    return ['view', ...this.headerKeys];
  }
  getRecordKeys(): string[] {
    return this.headerKeys;
  }
  getRecords(): RecordModel[] {
    return this.recordList;
  }
  getRecordById(id: string): RecordModel | undefined {
    return this.recordList.find((x) => x.id === id);
  }
  addRecordsToList(NoOfRecords = 10) {
    for (let i = 0; i < NoOfRecords; i++) {
      let rr = { ...this.record, id: (i + 1).toString(),locLat:this.record.locLat+i };
      this.recordList.push(rr);
    }
  }
  getRecordWithDetails() {
    return { headers: this.headerKeys, records: this.recordList };
  }
}