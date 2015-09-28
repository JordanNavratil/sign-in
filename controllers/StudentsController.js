signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.signedIn = function(student) {
      student.signedIn = true;
  };
  $scope.signedOut = function(student) {
      student.signedIn = false;
  };
});
