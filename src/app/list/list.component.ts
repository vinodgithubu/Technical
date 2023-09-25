import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Record } from '../shared/record';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  records: Record[];
  sortedColumn: string;
  isAscending: boolean = true;
  headersList: string[];
  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.initTable();
  }
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  getColumnValue(column: string, columnData: any): string {
    let value = columnData;
    if (column == 'locAddress') {
      value = this.getAddress(columnData);
    } else if (column.includes('date')) {
      value = this.datePipe.transform(columnData, 'MMM d y h:mm:ss a');
    }
    return value;
  }
  getAddress(lacAddressColumn) {
    return `${lacAddressColumn.streetNumber}, ${lacAddressColumn.street}, ${lacAddressColumn.city},
     ${lacAddressColumn.state}, ${lacAddressColumn.country}, ${lacAddressColumn.zipCode}`
  }

  sortRecords(field: string): void {
    if (field === this.sortedColumn) {
      this.isAscending = !this.isAscending;
    } else {
      this.isAscending = true;
    }

    this.records.sort((a, b) => {
      const valueA = a[field].toString().toLowerCase();
      const valueB = b[field].toString().toLowerCase();

      if (valueA < valueB) return this.isAscending ? -1 : 1;
      if (valueA > valueB) return this.isAscending ? 1 : -1;
      return 0;
    });
    this.sortedColumn = field;
  }
  openRecordModel(recordId) {
    console.log("recordId ", recordId)
  }
  initTable() {
    this.records = [];
    this.headersList = this.records.length && Object.keys(this.records[0]);
  }
}
