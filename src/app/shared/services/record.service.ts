import { Injectable } from '@angular/core';
import { RecordModel } from '../models/record';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private recordList: RecordModel[] = [];
  private headerKeys: string[] = [];
  constructor(private _httpClient: HttpClient) { }
  getData(): Observable<RecordModel[]> {
    let url = "./data.json";
    return this._httpClient.get<RecordModel[]>(url).pipe(map((data:RecordModel[]) => {
      this.recordList = data;
      this.headerKeys = Object.keys(this.recordList[0]);
      return this.convertDateStrings(data);
    }));
  }
  
  convertDateStrings(data: RecordModel[]): RecordModel[] {
    return data.map(x => {
      x.dateActivated = new Date(x.dateActivated);
      x.dateAdded = new Date(x.dateAdded);
      x.dateModified = new Date(x.dateModified);
      return x;
    });
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
  getRecordWithDetails() {
    return { headers: this.headerKeys, records: this.recordList };
  }
}