// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, CustomValidators.forbiddenName]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
