courseRoster.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [
      { name: "David Bowie", signedIn: false};
      { name: "Paul Simon", signedIn: false};
      { name: "Danzig", signedIn: false};
      { name: "Buddy Holly", signedIn: false};
      { name: "Brian Eno", signedIn: false};
      { name: "Iggy Pop", signedIn: false};
      { name: "Lou Reed", signedIn: false};
      { name: "Johnny Thunders", signedIn: false};
      { name: "Leonard Cohen", signedIn: false};
      { name: "Ozzy Ozbourne", signedIn: false};
  ];


  return factory;
});
