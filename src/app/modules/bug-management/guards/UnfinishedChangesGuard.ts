import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from './BaseComponent';

export class UnfinishedChangesGuard implements CanDeactivate<BaseComponent> {
  public canDeactivate(
    component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!component.canDeactivate()) {
      return window.confirm('Are you sure you want to leave the page?');
    }
    return true;
  }
}
