function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'skillsMember.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}