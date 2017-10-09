import { HttpService } from './../../../shared/services/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact = { name: '', email: '', phone: '', comments: '' };


  public modalRef: BsModalRef;

  @ViewChild('template') template: TemplateRef<any>;

  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(this.template, Object.assign({}, this.config, { class: 'modal-custom' }));
  }

  constructor(public modalService: BsModalService, public http: HttpService) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [ Validators.required ]),
      'email': new FormControl(null, [ Validators.required, Validators.minLength(10), Validators.email ]),
      'phone': new FormControl(null, [ Validators.pattern('[0-9]*') ]),
      'comments': new FormControl(null, [ Validators.required ])
    });
  }

  submitForm(value: any) {
    // touched show all error when submit form
    (<any>Object).values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });

    if (this.contactForm.valid) {
      this.openModal(this.template);


    }
    const rs = this.http.getApiAsync('https://jsonplaceholder.typicode.com/posts', null, true, true);
    rs.then(val => {
      //console.log(val.data);
    });
    console.log(value);
  }
}
