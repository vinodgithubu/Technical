import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RecordModel } from '../shared/models/record';
import { RecordService } from '../shared/services/record.service';
import { MatDialog } from '@angular/material/dialog';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  records: RecordModel[] = [];
  sortedColumn: string;
  isAscending: boolean = true;
  headersList: string[];

  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;
  constructor(private datePipe: DatePipe, private _recordService: RecordService,private dialog: MatDialog) {
  }

  ngOnInit() {
    this.initTable();
  }
  initTable() {
    let recordDetails = this._recordService.getRecordWithDetails();
    this.records = recordDetails.records;
    this.totalRecords = this.records.length;
    this.headersList = recordDetails.headers;
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
      const valueA = a[field];
      const valueB = b[field];
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.isAscending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return this.isAscending ? valueA - valueB : valueB - valueA;
      }
    });
    this.sortedColumn = field;
  }
  openRecordModel(recordId) {
    const dialogRef = this.dialog.open(RecordComponent, {
      data: {
        recordId,
      },
    });
    console.log("recordId ", recordId)
  }

  get paginatedRecords(): RecordModel[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.records.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }
  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
  }
}
