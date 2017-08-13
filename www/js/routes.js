angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.hOME', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/hOME.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('tabsController.hISTORY', {
    url: '/history',
    views: {
      'tab2': {
        templateUrl: 'templates/hISTORY.html',
        controller: 'hISTORYCtrl'
      }
    }
  })

  .state('tabsController.hELP', {
    url: '/help',
    views: {
      'tab3': {
        templateUrl: 'templates/hELP.html',
        controller: 'hELPCtrl'
      }
    }
  })

  .state('tabsController.mYACCOUNT', {
    url: '/myaccount',
    views: {
      'tab4': {
        templateUrl: 'templates/mYACCOUNT.html',
        controller: 'mYACCOUNTCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.share', {
    url: '/share',
    templateUrl: 'templates/share.html',
    controller: 'shareCtrl'
  })

  .state('tabsController.setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

  .state('tabsController.faq', {
    url: '/faq',
    templateUrl: 'templates/faq.html',
    controller: 'faqCtrl'
  })

  .state('tabsController.signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.logout', {
    url: '/logout',
    templateUrl: 'templates/logout.html',
    controller: 'logoutCtrl'
  })

  .state('tabsController.saldo', {
    url: '/saldo',
    templateUrl: 'templates/saldo.html',
    controller: 'saldoCtrl'
  })

  .state('tabsController.kalender', {
    url: '/kalender',
    templateUrl: 'templates/kalender.html',
    controller: 'kalenderCtrl'
  })

  .state('tabsController.qrcode', {
    url: '/qrcode',
    templateUrl: 'templates/qrcode.html',
    controller: 'qrcodeCtrl'
  })

  .state('tabsController.lAKUPANDAI', {
    url: '/lakupandai',
    views: {
      'tab1': {
        templateUrl: 'templates/lAKUPANDAI.html',
        controller: 'lAKUPANDAICtrl'
      }
    }
  })
.state('tabsController.dAFTARNASABAH', {
    url: '/daftarnasabah',
    views: {
      'tab1': {
        templateUrl: 'templates/dAFTARNASABAH.html',
        controller: 'dAFTARNASABAHCtrl'
      }
    }
  })

  .state('tabsController.sETORTUNAI', {
    url: '/setortunai',
    views: {
      'tab1': {
        templateUrl: 'templates/sETORTUNAI.html',
        controller: 'sETORTUNAICtrl'
      }
    }
  })

  .state('tabsController.tARIKTUNAI', {
    url: '/tariktunai',
    views: {
      'tab1': {
        templateUrl: 'templates/tARIKTUNAI.html',
        controller: 'tARIKTUNAICtrl'
      }
    }
  })

  .state('tabsController.mOBILEBANKING', {
    url: '/mobilebanking',
    views: {
      'tab1': {
        templateUrl: 'templates/mOBILEBANKING.html',
        controller: 'mOBILEBANKINGCtrl'
      }
    }
  })

.state('tabsController.iNFORMASIREKENING', {
    url: '/informasirekening',
    views: {
      'tab1': {
        templateUrl: 'templates/iNFORMASIREKENING.html',
        controller: 'iNFORMASIREKENINGCtrl'
      }
    }
  })

  .state('tabsController.iNFORMASIINVESTASI', {
    url: '/informasiinvestasi',
    views: {
      'tab1': {
        templateUrl: 'templates/iNFORMASIINVESTASI.html',
        controller: 'iNFORMASIINVESTASICtrl'
      }
    }
  })

  .state('tabsController.iNFORMASIKEDIT', {
    url: '/informasikredit',
    views: {
      'tab1': {
        templateUrl: 'templates/iNFORMASIKEDIT.html',
        controller: 'iNFORMASIKEDITCtrl'
      }
    }
  })

  .state('tabsController.iNFORMASIKURS', {
    url: '/informasikurs',
    views: {
      'tab1': {
        templateUrl: 'templates/iNFORMASIKURS.html',
        controller: 'iNFORMASIKURSCtrl'
      }
    }
  })

  .state('tabsController.pRODUKPERBANKAN', {
    url: '/produkperbankan',
    views: {
      'tab1': {
        templateUrl: 'templates/pRODUKPERBANKAN.html',
        controller: 'pRODUKPERBANKANCtrl'
      }
    }
  })

  
  .state('tabsController.pEMBELIAN', {
    url: '/pembelian',
    views: {
      'tab1': {
        templateUrl: 'templates/pEMBELIAN.html',
        controller: 'pEMBELIANCtrl'
      }
    }
  })

  .state('tabsController.tIKETMASKAPAI', {
    url: '/tiketmaskapai',
    views: {
      'tab1': {
        templateUrl: 'templates/tIKETMASKAPAI.html',
        controller: 'tIKETMASKAPAICtrl'
      }
    }
  })

  .state('tabsController.tIKETKERETA', {
    url: '/tiketkereta',
    views: {
      'tab1': {
        templateUrl: 'templates/tIKETKERETA.html',
        controller: 'tIKETKERETACtrl'
      }
    }
  })

  .state('tabsController.tIKETBUS', {
    url: '/tiketbus',
    views: {
      'tab1': {
        templateUrl: 'templates/tIKETBUS.html',
        controller: 'tIKETBUSCtrl'
      }
    }
  })

  .state('tabsController.tIKETKAPALLAUT', {
    url: '/tiketkapallaut',
    views: {
      'tab1': {
        templateUrl: 'templates/tIKETKAPALLAUT.html',
        controller: 'tIKETKAPALLAUTCtrl'
      }
    }
  })

  .state('tabsController.kAMARHOTEL', {
    url: '/kamarhotel',
    views: {
      'tab1': {
        templateUrl: 'templates/kAMARHOTEL.html',
        controller: 'kAMARHOTELCtrl'
      }
    }
  })

  .state('tabsController.pULSA', {
    url: '/pulsa',
    views: {
      'tab1': {
        templateUrl: 'templates/pULSA.html',
        controller: 'pULSACtrl'
      }
    }
  })

  .state('tabsController.tIKETEVENT', {
    url: '/tiketevent',
    views: {
      'tab1': {
        templateUrl: 'templates/tIKETEVENT.html',
        controller: 'tIKETEVENTCtrl'
      }
    }
  })

  .state('tabsController.pEMBAYARAN', {
    url: '/pembayaran',
    views: {
      'tab1': {
        templateUrl: 'templates/pEMBAYARAN.html',
        controller: 'pEMBAYARANCtrl'
      }
    }
  })

  .state('tabsController.multipayment', {
    url: '/multipayment',
    views: {
      'tab1': {
        templateUrl: 'templates/multipayment.html',
        controller: 'multipaymentCtrl'
      }
    }
  })

  .state('tabsController.pascabayar', {
    url: '/pascabayar',
    views: {
      'tab1': {
        templateUrl: 'templates/pascabayar.html',
        controller: 'pascabayarCtrl'
      }
    }
  })

  .state('tabsController.games', {
    url: '/games',
    views: {
      'tab1': {
        templateUrl: 'templates/games.html',
        controller: 'gamesCtrl'
      }
    }
  })

  .state('tabsController.multifinance', {
    url: '/multifinance',
    views: {
      'tab1': {
        templateUrl: 'templates/multifinance.html',
        controller: 'multifinanceCtrl'
      }
    }
  })

  .state('tabsController.rEPORT', {
    url: '/report',
    views: {
      'tab1': {
        templateUrl: 'templates/rEPORT.html',
        controller: 'rEPORTCtrl'
      }
    }
  })

  .state('tabsController.rEPORTLAKUPANDAI', {
    url: '/rEPORTLAKUPANDAI',
    views: {
      'tab1': {
        templateUrl: 'templates/rEPORTLAKUPANDAI.html',
        controller: 'rEPORTLAKUPANDAICtrl'
      }
    }
  })

  .state('tabsController.rEPORTMOBILEBANKING', {
    url: '/rEPORTMOBILEBANKING',
    views: {
      'tab1': {
        templateUrl: 'templates/rEPORTMOBILEBANKING.html',
        controller: 'rEPORTMOBILEBANKINGCtrl'
      }
    }
  })

  .state('tabsController.rEPORTMICROFINANCE', {
    url: '/rEPORTMICROFINANCE',
    views: {
      'tab1': {
        templateUrl: 'templates/rEPORTMICROFINANCE.html',
        controller: 'rEPORTMICROFINANCECtrl'
      }
    }
  })

  .state('tabsController.rEPORTTRANSAKSI', {
    url: '/rEPORTTRANSAKSI',
    views: {
      'tab1': {
        templateUrl: 'templates/rEPORTTRANSAKSI.html',
        controller: 'rEPORTTRANSAKSICtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home/home')


});