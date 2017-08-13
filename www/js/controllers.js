angular.module('app.controllers', [])

  .controller('hOMECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('hISTORYCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('hELPCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('mYACCOUNTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('saldoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('kalenderCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('qrcodeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('shareCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('settingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('faqCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('logoutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('sideMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('lAKUPANDAICtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('mOBILEBANKINGCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('pRODUKPERBANKANCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('dAFTARNASABAHCtrl', ['$scope', '$stateParams', '$ionicLoading', '$http', '$ionicPopup', '$ionicHistory', '$ionicNavBarDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicLoading, $http, $ionicPopup, $ionicHistory, $ionicNavBarDelegate) {
      $scope.backGO = 1;
      $scope.data = {
        namalengkap: '',
        emailnasabah: '',
        handphone: ''
      };
      $scope.showAlert = function (msg) {

        var alertPopup = $ionicPopup.alert({
          title: 'Notification',
          template: "<style>.popup { width:500px; }.popup-buttons .button, .popup-buttons .button:active, .popup-buttons .button:focus, .popup-buttons .button:visited, .popup-buttons .button:hover{background-color:#DD0000;}</style>" + msg
        });

        alertPopup.then(function (res) {
          $scope.data.namalengkap = '';
          $scope.data.emailnasabah = '';
          $scope.data.handphone = '';

        });
      };

      $scope.Details;
      $scope.processdata = function () {
        console.log($scope.data.namalengkap)
        if ($scope.data.namalengkap != '' && $scope.data.emailnasabah != '' && $scope.data.handphone != '') {
          $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200
          });
          console.log('http://103.200.7.141/semetapro/api/semstcustomer?xfullname=' + $scope.data.namalengkap + '&xemail' + $scope.data.emailnasabah + '&xphonenumber=' + $scope.data.handphone + '&xlonglat=106.84559899999999 -6.2087634')
          $http({
              method: 'POST',
              url: 'http://103.200.7.141/semetapro/api/semstcustomer?',
              params: {
                xfullname: +$scope.data.namalengkap,
                xemail: $scope.data.emailnasabah,
                xphonenumber: $scope.data.handphone,
                xlonglat: '106.84559899999999 -6.2087634'
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).success(function (data, status, headers, config) {
              $scope.Details = data;
              $ionicLoading.hide();
              console.log(data);
              if ($scope.Details.STATUS != 'OK') {
                $scope.showAlert($scope.Details.MESSAGE + ' ' + $scope.Details.STATUS);
              } else {
                $scope.showAlert("Nasabah berhasil didaftarkan. Kode Aktifasi: "+$scope.Details['KODE AKTIVASI']);
              }
            })
            .error(function (data, status, header, config) {
              console.log('gagal');
              $ionicLoading.hide();
              console.log(data);
              $scope.showAlert("Koneksi bermasalah, ulangi beberapa saat lagi");

            });
        } else
          $scope.showAlert("Harap isi semua data diatas");

      }
    }
  ])

  .controller('sETORTUNAICtrl', ['$scope', '$stateParams', '$ionicLoading', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicLoading, $http, $ionicPopup) {
      $scope.data = {
        nominalsetoran: '',
        note: ''
      };
      $scope.showAlert = function (msg) {

        var alertPopup = $ionicPopup.alert({
          title: 'Notification',
          template: "<style>.popup { width:500px; }.popup-buttons .button, .popup-buttons .button:active, .popup-buttons .button:focus, .popup-buttons .button:visited, .popup-buttons .button:hover{background-color:#DD0000;}</style>" + msg
        });

        alertPopup.then(function (res) {
          // Custom functionality....
          $scope.data.nominalsetoran = '';
          $scope.data.note = '';
        });
      };

      $scope.Details;
      $scope.processdata = function () {
        if ($scope.data.nominalsetoran != '' && $scope.data.note != '') {
          $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200
          });
          $http({
              method: 'POST',
              url: 'http://103.200.7.141/semetapro/api/sesetortunai?',
              params: {
                xaccountnumber: '1234567890',
                xpin: '123',
                xtoken: '13290148305',
                xnominal: $scope.data.nominalsetoran


              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).success(function (data, status, headers, config) {
              $scope.Details = data;
              $ionicLoading.hide();
              console.log(data);
              $scope.showAlert($scope.Details.MESSAGE);
            })
            .error(function (data, status, header, config) {
              console.log('gagal');
              $ionicLoading.hide();
              console.log(data);
              $scope.showAlert("Koneksi bermasalah, ulangi beberapa saat lagi");
            });
        } else
          $scope.showAlert("Harap isi semua data diatas");

      }

    }
  ])

  .controller('tARIKTUNAICtrl', ['$scope', '$stateParams', '$ionicLoading', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicLoading, $http, $ionicPopup) {
      $scope.data = {
        nominalsetoran: '',
        note: ''
      };
      $scope.showAlert = function (msg) {

        var alertPopup = $ionicPopup.alert({
          title: 'Notification',
          template: "<style>.popup { width:500px; }.popup-buttons .button, .popup-buttons .button:active, .popup-buttons .button:focus, .popup-buttons .button:visited, .popup-buttons .button:hover{background-color:#DD0000;}</style>" + msg
        });

        alertPopup.then(function (res) {
          // Custom functionality....
          $scope.data.nominalsetoran = '';
          $scope.data.note = '';
        });
      };

      $scope.Details;
      $scope.processdata = function () {
        if ($scope.data.nominalsetoran != '' && $scope.data.note != '') {
          $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200
          });
          $http({
              method: 'POST',
              url: 'http://103.200.7.141/semetapro/api/setariktunai?',
              params: {
                xaccountnumber: '1234567890',
                xnominal: $scope.data.nominalsetoran,
                xpin: '123',
                xtoken: '13290148305'
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).success(function (data, status, headers, config) {
              $scope.Details = data;
              $ionicLoading.hide();
              console.log(data);
              $scope.showAlert($scope.Details.MESSAGE);
            })
            .error(function (data, status, header, config) {
              console.log('gagal');
              $ionicLoading.hide();
              console.log(data);
              $scope.showAlert("Koneksi bermasalah, ulangi beberapa saat lagi");
            });
        } else
          $scope.showAlert("Harap isi semua data diatas");

      }



    }
  ])

  .controller('pEMBELIANCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('pEMBAYARANCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {


    }
  ])

  .controller('multipaymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('pascabayarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('gamesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('multifinanceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('rEPORTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('iNFORMASIREKENINGCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('iNFORMASIINVESTASICtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('iNFORMASIKEDITCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('iNFORMASIKURSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('tIKETMASKAPAICtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('tIKETKERETACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('tIKETBUSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('tIKETKAPALLAUTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('kAMARHOTELCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('pULSACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])

  .controller('tIKETEVETCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {



    }
  ])
