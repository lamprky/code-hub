import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormOptionsService } from '../../modules/services/form-options.service';
import { SelectOption } from '../../modules/models/selectOption.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaginationData } from '../../modules/models/pagination-data';

@Component({
  selector: 'br-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageItems: number;
  @Input() startPage?: number;
  @Output() pageChanged = new EventEmitter<PaginationData>();
  totalPagesArray: number[];
  currentPage: number;
  pageOptions: SelectOption[];
  pd: PaginationData;

  constructor(private formOptionsService: FormOptionsService) {
    this.pageOptions = this.formOptionsService.getPageOptions();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.startPage) {
      this.currentPage = this.startPage;
    } else {
      this.currentPage = 0;
    }

    if (this.totalItems) {
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

  pageItemsChanged() {
    this.currentPage = 0;
    this.onPageChanged();
  }
  private onPageChanged() {
    this.pd = <PaginationData>{
      currentPage: this.currentPage,
        pageItems: this.pageItems
    };
    this.pageChanged.emit(this.pd);
  }

  private calculateTotalPages() {
    this.totalPagesArray = new Array<number>(
      Math.ceil(this.totalItems / this.pageItems)
    );
  }
}
