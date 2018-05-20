import { Injectable } from '@angular/core';
import { SelectOption } from '../models/selectOption.model';

@Injectable()
export class FormOptionsService {
  private statusOptions: SelectOption[] = new Array<SelectOption>();
  private reporterOptions: SelectOption[] = new Array<SelectOption>();
  private prioritiesOptions: SelectOption[] = new Array<SelectOption>();
  private pagesOptions: SelectOption[] = new Array<SelectOption>();

  constructor() {
    this.prioritiesOptions.push({ value: 'Minor', key: 1 });
    this.prioritiesOptions.push({ value: 'Major', key: 2 });
    this.prioritiesOptions.push({ value: 'Critical', key: 3 });

    this.reporterOptions.push({ value: 'QA', key: 1 });
    this.reporterOptions.push({ value: 'PO', key: 2 });
    this.reporterOptions.push({ value: 'DEV', key: 3 });

    this.statusOptions.push({ value: 'Ready for test', key: 1 });
    this.statusOptions.push({ value: 'Done', key: 2 });
    this.statusOptions.push({ value: 'Rejected', key: 3 });

    this.pagesOptions.push({ value: '5', key: 5 });
    this.pagesOptions.push({ value: '10', key: 10 });
    this.pagesOptions.push({ value: '20', key: 20 });
  }

  getPrioritiesOptions(): SelectOption[] {
    return this.prioritiesOptions;
  }

  getStatusOptions(): SelectOption[] {
    return this.statusOptions;
  }

  getReporterOptions(): SelectOption[] {
    return this.reporterOptions;
  }

  getPageOptions(): SelectOption[] {
    return this.pagesOptions;
  }
}
