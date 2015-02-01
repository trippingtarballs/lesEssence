(function () {
    'use strict';

    angular.module('app.foyer', [])
        .config(FoyerRouter)
        .controller('Passwd', PasswordController)
        .controller('SignIn', SignInController)
        .controller('SignUp', SignUpController);

    /* @ngInject */
    function FoyerRouter($stateProvider) {
        $stateProvider
            .state('foyer', {
                url: '/foyer',
                abstract: true
            })
            .state('foyer.welcome', {
                url: '',
                views: {
                    '@': {
                        templateUrl: 'js/foyer/welcome.html'
                    }
                }
            })
            .state('foyer.passwd', {
                url: '/passwd',
                views: {
                    '@': {
                        templateUrl: 'js/foyer/passwd.html',
                        controller: 'Passwd as vm'
                    }
                }
            })
            .state('foyer.signin', {
                url: '/signin',
                views: {
                    '@': {
                        templateUrl: 'js/foyer/signin.html',
                        controller: 'SignIn as vm'
                    }
                }
            })
            .state('foyer.signup', {
                url: '/signup',
                views: {
                    '@': {
                        templateUrl: 'js/foyer/signup.html',
                        controller: 'SignUp as vm'
                    }
                }
            });
    }

    /* @ngInject */
    function PasswordController() {}

    /* @ngInject */
    function SignInController() {}

    /* @ngInject */
    function SignUpController() {}

})();