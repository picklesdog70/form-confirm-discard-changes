import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface FormChangedCanDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class FormChangedGuard implements CanDeactivate<FormChangedCanDeactivate>{

    canDeactivate(component: FormChangedCanDeactivate) {
        return component.canDeactivate();
    }

}