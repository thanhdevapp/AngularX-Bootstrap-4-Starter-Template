import { FormGroup } from '@angular/forms';
import { ValidationResult } from '../models/ValidationResult';
export class GlobalValidator {
    static mailFormat(control: FormGroup): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static tel(control: FormGroup): ValidationResult {

        var EMAIL_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;

        if (control.value != "" && !EMAIL_REGEXP.test(control.value)) {
            return { "tel": true };
        }

        return null;
    }
}