import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        UsernameValidators.cannotContainSpace
      ]),
      password: new FormControl("", Validators.required)
    })
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  // login() {
  //   let isValid = authService.login(this.form.value);
  //   if (!isValid) {
  //     this.form.setErrors({
  //       invalidLogin: true
  //     });
  //   }
  // }

  get username() {
    return this.form.get("account.username");
  }

  constructor() {}

  ngOnInit() {}
}
