import {myComponentController} from './myComponent.controller'
export class myComponent implements angular.IComponentOptions{
    template:string = '<h1>myComponent - {{myCompCtrl.data}}{{myCompCtrl.myAttr}}</h1>';
    bindings={
       myAttr : '@' 
    }
    controller: angular.IControllerConstructor = myComponentController;
    controllerAs: string = myComponentController.alias;

    static instance(): angular.IComponentOptions {
        return new myComponent;
    }
    static id: string = "myComponent";
}