# MyNgrxStoreApp

## App Setup
Step1: ng new [AppName] --style=scss --routing --prefix myprefix

## Install Bootstrap
Step3: npm install bootstrap --save
Step4: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],  ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code:
URL: https://www.techiediaries.com/angular-bootstrap-ui/
@import "~bootstrap/dist/css/bootstrap.css";

## NGRX schematics:
https://www.intertech.com/Blog/ngrx-tutorial-quickly-adding-ngrx-to-your-angular-6-project/
Scaffolding library for Angular applications using NgRx libraries. 
@ngrx/schematics provides CLI commands for generating files when building new NgRx feature areas and expanding existing ones.

npm install @ngrx/schematics --save-dev

## Install the rest of NgRx:
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save

## NGRX Flow Diagram
![Ngrx-Image](https://user-images.githubusercontent.com/30646609/62344444-b22be680-b50b-11e9-85ae-7ce70f588995.JPG)

## NGRX Form
https://github.com/MrWolfZ/ngrx-forms
https://ngrx-forms.readthedocs.io/en/master/user-guide/form-controls/#connecting-to-the-dom

## NGRX Form DEMO

https://ngrx-forms-example-app-v2.herokuapp.com/introduction
