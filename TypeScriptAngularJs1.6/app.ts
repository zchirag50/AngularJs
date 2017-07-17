import {EmployeeCtrl} from "./controller"
import {myDirective} from "./myDirective"

var app = angular.module('app',[]);

angular.module('app')
    .directive(myDirective.id,myDirective.instance)
    .controller("EmployeeCtrl",EmployeeCtrl);
