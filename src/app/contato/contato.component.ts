import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Aqui você pode adicionar a lógica para enviar o formulário
    } else {
      console.log('Form is invalid');
      this.markAllAsTouched();
    }
  }

  private markAllAsTouched() {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  
  ngOnInit(): void {
  }

}
