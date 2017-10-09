import { Injectable } from '@angular/core';
import { FormControl, Validators, FormArray, FormGroup, FormBuilder } from '@angular/forms';

declare var $: any;

@Injectable()
export class ExtensionService {

    constructor(private fb: FormBuilder) { }

    public getUrlParameter(sParam, search: string = null) {
        if (search == null) { search = window.location.search }
        search = search.replace('?', '');
        let sPageURL = decodeURIComponent(search),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[ i ].split('=');

            if (sParameterName[ 0 ] === sParam) {
                return sParameterName[ 1 ] === undefined ? true : sParameterName[ 1 ];
            }
        }
    };

    public getFormGroup(obj: any, valid: boolean = true): FormGroup {
        const formGroup: FormGroup = this.fb.group({});
        obj.forEach(x => {
            if (!x.isObject) {
                const formControl = this.getFormControll(x, valid);
                formGroup.addControl(x.name, formControl);
            } else {
                if (x.isArray) {
                    const formArray: FormArray = this.getFormArray(x);
                    formGroup.addControl(x.name, formArray)
                } else {
                    const formGroupChild: FormGroup = this.getFormGroup(x);
                    formGroup.addControl(x.name, formGroupChild)
                }
            }
        });
        return formGroup;
    }

    public confirmDialog(title: string = '', content: string = ''): Promise<any> {
        return new Promise(resolve => {
            $.confirm({
                type: 'red',
                title: title,
                content: content,
                buttons: {
                    ok: {
                        text: 'Ok',
                        keys: [ 'enter' ],
                        action: function () {
                            resolve(true);
                        }
                    },
                    cancel: {
                        text: 'cancel',
                        keys: [ 'esc' ],
                        action: function () {
                            resolve(false);
                        }
                    }
                }
            });
        });
    }

    public alertDialog(title: string = '', content: string = '') {
        $.alert({
            type: 'red',
            title: title,
            content: content,
            buttons: {
                ok: {
                    text: 'Ok',
                    keys: [ 'enter' ],
                    action: function () { }
                }
            }
        })
    }

    public markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            // if (control.controls) {            
            //     control.controls.forEach(c => this.markFormGroupTouched(c));
            // }
        });
    }

    // set icon button submit success
    public showMsgSuccessfully(msg: string) {
        $('.msg').text(msg);
        $('.error-fixed-bottom').css({ 'opacity': 1, 'transform': 'scale(1)' });
        $('.error-fixed-bottom .icon').attr('src', '/assets/icons/ic-submit-successful.svg');
    }

    public showMsgSubmitFail(msg: string) {
        $('.msg').text(msg);
        $('.error-fixed-bottom').css({ 'opacity': 1, 'transform': 'scale(1)' });
        $('.error-fixed-bottom .icon').attr('src', 'icons/ic-submitfail.svg');
    }

    public showLoading(show: boolean, timeout: any = 3000, autoclose: boolean = false) {
        if (show) {
            $('.loading').removeClass('show');
            $('.loading').removeClass('animate');
            $('.loading').removeClass('hide');
            $('.loading').addClass('show').delay(timeout - 1500).queue(function (next) {
                $(this).addClass('animate');
                next();
            });
            if (autoclose) {
                setTimeout(function () {
                    $('.loading').removeClass('show');
                    $('.loading').removeClass('animate');
                    $('.loading').removeClass('hide');
                }, timeout)
            }
        } else {
            $('.loading').removeClass('show');
            $('.loading').removeClass('animate');
            $('.loading').removeClass('hide');
        }
    }

    public BoDau(str): string {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        // str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
        /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
        // str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
        str = str.replace(/^\-+|\-+$/g, '');
        // cắt bỏ ký tự - ở đầu và cuối chuỗi
        return str;
    }

    public roundMoneyNumber(moneyNumber) {
        return Math.round(moneyNumber * 1000) / 1000;
    };
    // -----private-----
    private getFormControll(obj: any, val: boolean = true): FormControl {
        const valid = [];
        if (val) {
            obj.validate.forEach(v => {
                switch (v.name) {
                    case 'Required':
                        valid.push(Validators.required);
                        break;
                    case 'Compare':
                        // valid.push(Validators.required);
                        break;
                    case 'StringLength':
                        // valid.push(Validators.required);
                        break;
                    case 'MinLength':
                        valid.push(Validators.min(v.value.minLength));
                        break;
                    case 'MaxLength':
                        valid.push(Validators.min(v.value.maxLength));
                        break;
                    case 'EmailAddress':
                        valid.push(Validators.email);
                        break;
                    case 'Phone':
                        // valid.push(Validators.required);
                        break;
                    case 'RegularExpression':
                        // valid.push(Validators.required);
                        break;
                }
            });
        }
        const ctrl: FormControl = this.fb.control(obj.value, valid);
        return ctrl;
    }

    private getFormArray(obj: any): FormArray {
        const lstFormGroup: FormGroup[] = [];
        obj.value.forEach(x => {
            const formGroup: FormGroup = this.getFormGroup(x);
            lstFormGroup.push(formGroup);
        });
        const formArray: FormArray = this.fb.array(lstFormGroup);
        return formArray;
    }
}
