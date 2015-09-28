signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
      { name: "David Bowie", signedIn: false},
      { name: "Siouxsie Sioux", signedIn: false},
      { name: "Leonard Cohen", signedIn: false},
      { name: "Debbie Harry", signedIn: false},
      { name: "Brian Eno", signedIn: false},
      { name: "Iggy Pop", signedIn: false},
      { name: "Lou Reed", signedIn: false},
      { name: "Johnny Thunders", signedIn: false},
      { name: "Stevie Nicks", signedIn: false},
      { name: "Ozzy Ozbourne", signedIn: false},
  ];


  return factory;
});
