import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecordService } from '../shared/services/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent {
  record = {};
  constructor(
    private _recordService: RecordService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RecordComponent>
  ) {
    if (data && data.recordId) {
      this.openRecord(data.recordId);
    }
  }

  openRecord(id: string) {
    this.record = this._recordService.getRecordById(id) || {};
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}