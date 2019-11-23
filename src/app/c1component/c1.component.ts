import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
})
export class C1Component  {
  
  private form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      'texto': this.formBuilder.control('', [Validators.required]),
    })
  }

  salvar() {
    console.log('Registro salvo com sucesso')
    this.form.markAsPristine()
  }

  canDeactivate(): Promise<boolean> | boolean { 
   return this.form.dirty ? confirm('Discard changes?') : true;
  }
}