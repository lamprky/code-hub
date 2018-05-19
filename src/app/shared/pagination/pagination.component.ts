import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'br-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageItems: number;
  @Input() startPage?: number;
  @Output() pageChanged = new EventEmitter<number>();
  totalPagesArray: number[];
  currentPage: number;

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.startPage) {
      this.currentPage = this.startPage;
    } else {
      this.currentPage = 0;
    }
    if(this.totalItems){
      this.calculateTotalPages();
    }
  }

  previous() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.onPageChanged();
    }
  }

  next() {
    if (this.currentPage < this.totalPagesArray.length) {
      this.currentPage++;
      this.onPageChanged();
    }
  }

  goToPage(index: number) {
    this.currentPage = index;
    this.onPageChanged();
  }

  private onPageChanged(){
    this.pageChanged.emit(this.currentPage);
  }

  private calculateTotalPages() {
    this.totalPagesArray = new Array<number>(
      Math.ceil(this.totalItems / this.pageItems)
    );
  }
}
