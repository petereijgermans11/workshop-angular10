import { Component, OnInit } from '@angular/core';

// import the required classes from angular forms
import { FormGroup, FormBuilder } from '@angular/forms';

// in this example i created a Customer model including a Gender enum
import { Gender } from './customer.model';

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormsComponent implements OnInit{
    // allows the usage of the Gender enum (see customer.model.ts) in the template
    public Gender = Gender;
    
    // prefilled arary of skill levels
    public skillLevels: string[] = ["Student", "Junior", "Medior", "Senior", "CodeSmith", "Champion"];

    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        // create a formGroup using the formbuilder
        this.formGroup = this.formBuilder.group({
            username: [''],
            firstName: ['Default'],
            lastName: [''],
            phoneNumber: [''],
            email: [''],
            gender: [''],
            skillLevel: ['']
        });

        this.formGroup.valueChanges.subscribe((value)=>{ console.log('Changes	at	form	level:	',	value);
    });

    }

    onSubmit()  {
        console.log('Form  submitted:  ',  this.formGroup.value);
        //  TODO:  do  something  useful  with  form
        }
}
