
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , AbstractControl } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  hide = true;
  notvisible = true;

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  userdata !: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userdata =  this.formbuilder.group({
      firstName: [ '',Validators.required],
      lastName: [ '',Validators.required],
      mobileNo: [ '',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: [ '',[Validators.required, Validators.email]],
      gender: [ '',Validators.required],
      password: [ '',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      confirmPwd:[ '',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

  }

    // convenience getter for easy access to form fields
    //get frmctrl() { return this.userdata.controls; }
    get frmctrl(): { [key: string]: AbstractControl } {
      return this.userdata.controls;
   }

  onSubmit(): void {
      this.submitted = true;

      if(this.userdata.valid){
        console.log(this.userdata.value);
      }


  }

}
