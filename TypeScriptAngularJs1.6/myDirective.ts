export class myDirective{

    restrict: string ='E';
    template: string ='<h1>chirag</h1>';
    scope={};
    static instance(): ng.IDirective{
        return new myDirective;
    }
     static id: string = 'myDirective';
}