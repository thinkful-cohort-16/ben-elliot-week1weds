function personMaker() {
    const person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {
         return this.firstName + ' ' + this.lastName;
      }
    };
    return person;
  }
  
  
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  (function testPersonMaker() {
    const person = personMaker();
    if (typeof person !== 'object') { 
      console.error('ERROR: `personMaker` must return an object');
      return false
    }
    if (typeof person.fullName !== 'function') {
      console.error('ERROR: `fullName` must be a method');
      return false
    }
    if (person.fullName() !== 'Paul Jones') {
      console.error(`ERROR: The value for \`fullName\` should be "Paul Jones" but was ${person.fullName()}`);
      return false;
    }
    person.firstName = 'Lisa';
    person.lastName = 'Simpson';
    if (person.fullName() !== 'Lisa Simpson') {
      console.error(
        `\`personMaker\` is not using self reference correctly. When firstName set to "Lisa" and lastName set to "Simpson", it should return "Lisa Simpson" but returned ${person.fullName()}`
      );
    }
    console.log('SUCCESS: `personMaker` works correctly!');
    
  })();