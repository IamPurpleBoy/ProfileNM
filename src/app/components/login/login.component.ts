import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn=false;
form:FormGroup;
  constructor(private formBuilder: FormBuilder, private autenticationService: AutenticacionService, private ruta:Router) { 
  this.form = this.formBuilder.group(
    {
      
      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
     
      
    }

  )
}

ngOnInit(): void {
  
  this.form=this.formBuilder.group({
    email:[''],
    password: [''],
  });

}

get Email(){
  return this.form.get('email');
  
}

get Password(){
  return this.form.get('password');
}

onEnviar(event:Event){
  console.log(this.form.value);
  this.isLoggedIn=true;
  event.preventDefault;
  this.autenticationService.Loguearse(this.form.value).subscribe(data=>{
    console.log("DATA" + JSON.stringify(data));
    this.ruta.navigate(['/portfolio']);
  })


}

}
