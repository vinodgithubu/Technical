import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  itemsPerPages: number[] = [10, 20, 50, 100];

  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalPages: number;

  @Output() setPage = new EventEmitter<number>();
  @Output() setPageSize = new EventEmitter<number>();

  constructor() { }

  get pageNumbers(): number[] {
    const start = Math.min(Math.max(1, this.currentPage - 2), Math.max(1, (this.totalPages - 4)));
    const end = Math.min(this.totalPages, start + 4);
    return Array(end - start + 1).fill(0).map((_, i) => start + i);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.setPageNumber();
    }
  }
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPageNumber();
    }
  }
  firstPage(): void {
    this.currentPage = 1;
    this.setPageNumber();
  }
  lastPage(): void {
    this.currentPage = this.totalPages;
    this.setPageNumber();
  }
  setPageNumber(pageNumber?: number) {
    this.setPage.emit(pageNumber || this.currentPage);
  }
  setItemsPerPage(pageSize?: number) {
    this.pageSize = pageSize;

    this.setPage.emit(1);
    this.setPageSize.emit(pageSize);
  }
}
