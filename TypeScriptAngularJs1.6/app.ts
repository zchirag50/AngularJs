import {EmployeeCtrl} from "./controller"
import {myDirective} from "./myDirective"
import { myComponent } from './myComponent';

var app = angular.module('app',[]);

angular.module('app')
    .directive(myDirective.id, myDirective.instance)
    .controller("EmployeeCtrl",EmployeeCtrl)
    .component(myComponent.id, myComponent.instance());
