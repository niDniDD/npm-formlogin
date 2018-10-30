
# npm formlogin 
==================

#1 install
  
  > ```npm i formlogin```
------------------

#2 import Module at home.module.ts
  
  > ```import { IonicFormloginModule } from "formlogin";```
------------------

#3 active at html
  
  > ```<formlogin-component [textButton]="'Sigin'" (dataUser)="getDataUser($event)"></formlogin-component>```
------------------

#4 input output formlogin
  ```@Input() textButton = "LOGIN";```
  ```@Output() dataUser = new EventEmitter();```


![alt text](https://res.cloudinary.com/dlwyi2urj/image/upload/v1540883500/npm/formlogin.jpg "Logo Title Text 1")


