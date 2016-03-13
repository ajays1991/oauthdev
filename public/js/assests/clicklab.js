app = angular.module('clicklab', ['ui.bootstrap']);

app.run(['$rootScope', '$http', function($rootScope, $http) {
   
}]);

angular.module('clicklab').factory('_', ['$window', function($window) {
    return $window._;
}]);

angular.module('clicklab').controller('clicklabController', ['$scope', '_', '$document', function($scope, _, $document) {

    var clCtrl = this;
    clCtrl.openCardObject = {};

    clCtrl.tableList = [{
        name: "Tech",
        seats: [
            { bool: false, employeeId: 1, pos: 1, occupied: true, name: 'Ajay', designation: 'Senior Software Engineer', gravatar: '', project: 'Uber Wordpress Deploy' },
            { bool: false, employeeId: 2, pos: 2, occupied: true, name: 'Scooby do', designation: 'Software Engineer', gravatar: '', project: 'Uber Wordpress Deploy' },
            { bool: false, employeeId: 3, pos: 3, occupied: true, name: 'Mojo', designation: 'Software Engineer', gravatar: '', project: 'Uber Wordpress Deploy' },
            { bool: false, employeeId: 4, pos: 4, occupied: true, name: 'Uncle Scrooge', designation: 'UI Developer', gravatar: '', project: 'Uber Wordpress Deploy' }
        ]
    }, {
        name: "Sales",
        seats: [
            { bool: false, employeeId: 5, pos: 1, occupied: true, name: 'Night Wing', designation: 'Manager', gravatar: '', project: 'Sales' },
            { bool: false, employeeId: 6, pos: 2, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 7, pos: 3, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 8, pos: 4, occupied: false, name: undefined, designation: undefined, gravatar: undefined }
        ]
    }, {
        name: "HR",
        seats: [
            { bool: false, employeeId: 9, pos: 1, occupied: true, name: 'Yo Man', designation: 'Manager', gravatar: '', project: 'Recruit IOS Developer' },
            { bool: false, employeeId: 10, pos: 2, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 11, pos: 3, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 12, pos: 4, occupied: false, name: undefined, designation: undefined, gravatar: undefined }
        ]
    }, {
        name: "Boss",
        seats: [
            { bool: false, employeeId: 13, pos: 1, occupied: true, name: 'Powerpack', designation: 'Boss', gravatar: undefined ,project: 'Sales'},
            { bool: false, employeeId: 14, pos: 2, occupied: false, name: 'Powerpack', designation: 'Big Boss', gravatar: undefined,project: 'Sales' },
            { bool: false, employeeId: 15, pos: 3, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 16, pos: 4, occupied: false, name: undefined, designation: undefined, gravatar: undefined }
        ]
    },{
        name: "Freelancers",
        seats: [
            { bool: false, employeeId: 17, pos: 1, occupied: true, name: 'Batman', designation: 'Developer', gravatar: '', project: 'Android Build' },
            { bool: false, employeeId: 18, pos: 2, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 19, pos: 3, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 20, pos: 4, occupied: false, name: undefined, designation: undefined, gravatar: undefined }
        ]
    }, {
        name: "Lunch",
        seats: [            
            { bool: false, employeeId: 21, pos: 1, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 22, pos: 2, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 23, pos: 3, occupied: false, name: undefined, designation: undefined, gravatar: undefined },
            { bool: false, employeeId: 24, pos: 4, occupied: true, name: 'eating alone', designation: 'Foodie', gravatar: undefined ,project: 'Hunger Buster'},
        ]
    }];
    clCtrl.matchedUsers = _.pluck(clCtrl.tableList, 'seats');
    clCtrl.allUsers = _.union.apply(_, clCtrl.matchedUsers);
   
    clCtrl.init = function() {
       
    }
    clCtrl.checkPeople = function() {
        if (clCtrl.query === "") {
           
            hideAllcards();
            return;
        }
        if (clCtrl.query.length !== 1) {
          
            hideAllcards();
        }      
        var result = _.filter(clCtrl.allUsers, function(x) {
            if (x.occupied === true) {               
                // return (x.name.toLowerCase().search(clCtrl.query.toLowerCase()) !== -1) ? true : false;
                return (x.name.toLowerCase().indexOf(clCtrl.query.toLowerCase()) == 0);
            }
            return false;
        });
        console.log(result, 'result here');
        if (result.length > 0) {
            if(clCtrl.openCardObject !== undefined){
                hideAllcards();
            }
            clCtrl.openCardObject = result[0];
            result[0].bool = true;
        }
    }

    clCtrl.keyPress = function(event) {           
        if (event.which === 8) {           
        }

    };

    var hideAllcards = function() {
        var z = _.find(clCtrl.allUsers, function(x){
            console.log(x, clCtrl.openCardObject);
            return x.employeeId === clCtrl.openCardObject.employeeId;
        });
        if(z){
        z.bool = false;
         
        }
        console.log(z, 'z here');
    }



    clCtrl.pluckSeat = function(index, table) {
        console.log(index, table);
        var seat = _.pluck(clCtrl.tableList[table], 'seats');
        console.log('seats', seat);
        return seat[index];
    }


    clCtrl.init();
}]);



angular.module('clicklab').directive('masterDirective', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            mod: '=',
            table: '=',
            bool: '=',
            empid: '=',
            occupied: '='
        },
        template: '<div id="hover" data-ident="{{empid}}" class="{{className}}" popover-placement="right" popover-template="{{popoverTmpl}}" popover-trigger="mouseenter"></div>',
        link: function(scope, element) {

            scope.isOpen = true;
            if (!scope.occupied) {
                scope.className = 'seate';
                scope.popoverTmpl = '';
                console.log('false', element);
                // angular.element(element).attr("class", "seat1e");
            } else {
                scope.popoverTmpl = "calendar.html";
                scope.className = 'seat';
                console.log('true', element);
            }
            scope.$watch('bool', function(newval, oldval) {

                var el = element.find('hover');
                var el3 = element.children().find("div");

                // var z = $('.hover[data-ident="+'
                //     scope.empid '+"]');
                var z = $("div")
                    .filter(function(index) {
                        return $(this).attr("data-ident") === scope.empid.toString();
                    });
                if (newval) {
                    $timeout(function() {
                        z.removeClass('seat').addClass('seatH');
                        z.trigger('mouseenter');

                    }, 0, false);
                }
                if (!newval) {
                    $timeout(function() {
                        console.log(z, 'class change hee');
                        
                        z.trigger('mouseleave');
                        z.removeClass( "seatH" ).addClass("seat");
                         z.addClass('seat');

                    }, 0, false);
                }
            })
        },
        controller: function($scope) {

            // $scope.$watch('bool', function(old,new1){
            //     console.log(old, new1, this);
            // })
        }
    }
});

angular.module('clicklab').directive('masterDirectived', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            mod: '=',
            table: '=',
            bool: '=',
            empid: '=',
            occupied: '='
        },
        template: '<div id="hover" data-ident="{{empid}}" class="{{className}}" popover-placement="right" popover-template="{{popoverTmpl}}" popover-trigger="mouseenter"></div>',
        link: function(scope, element) {

            if (!scope.occupied) {
                scope.popoverTmpl = "";
                scope.className = 'seat1e';              
            } else {
                scope.popoverTmpl = "calendar.html";
                scope.className = 'seat1';               
            }

            // scope.$apply(function(){
            //     console.log('link apply');
            // })
            scope.$watch('bool', function(newval, oldval) {

                var el = element.find('hover');
                var el3 = element.children().find("div");
               
                var z = $("div")
                    .filter(function(index) {
                        return $(this).attr("data-ident") === scope.empid.toString();
                    });
                if (newval) {
                    $timeout(function() {
                         z.removeClass('seat1').addClass('seat1H');
                        z.trigger('mouseenter');

                    }, 0, false);
                }
                if (!newval) {
                    $timeout(function() {
                         z.removeClass('seat1H').addClass('seat1');
                        z.trigger('mouseleave');

                    }, 0, false);
                }

            })        
        },
        controller: function($scope) {
           
        }
    }
});

angular.module('clicklab').directive('subDirective', function() {
    return {
        restrict: 'A',
        scope: {
            modsub: '=subDirectiveMod',
            modtable: '=subDirectiveTable'
        },
        // template: '{{modsub}}',
        template: '<div id = {{id}}><img class="img-circle" src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt=""><h4>{{name}}</h4><P class="h8">Role: {{designation}}</P><P class="h8">Project: {{project}}</P></div>',
        link: function(scope, element) {

            scope.id = scope.modtable.seats[scope.modsub].id;
            scope.name = scope.modtable.seats[scope.modsub].name;
            scope.designation = scope.modtable.seats[scope.modsub].designation;
            scope.img = scope.modtable.seats[scope.modsub].img;
            scope.project = scope.modtable.seats[scope.modsub].project;
            element.on('mouseenter', function() {
                scope.$apply(function() {});
            });
        }
    }
});
