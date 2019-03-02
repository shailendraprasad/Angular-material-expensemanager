import { AbstractControl, ValidatorFn, FormControl, FormGroup } from "@angular/forms";



export class CustomValidators {


    public static CompareValidator(sourceField: string, comapreToField: string): any {
        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[sourceField];
            let confirmPassword = group.controls[comapreToField];

            if (password.value !== confirmPassword.value) {
                return {
                    compare: true
                };
            }
            else {
                return {
                    compare: false
                };
            }
        }
    }
}

