const me = {
    myName: 'aiden',

    //accessor property(setter)
    set name(newName) {
        // Reset my name back to 'aiden' ;)
        this.myName = 'aiden';

        // Normally this would be `this.name = newName;` instead
    }, // Don't forget commas, since you're in an object

    get name() {
        // Print my name for everyone to see ;)
        console.log(this.myName);
    },
};

// How to use it:

me.name = 'shan';
// name.setter();

me.name += ' blishen cuneo';
// name.setter();

shipTo(me.name, 'china');
// name.getter();

me.name;
// name.getter();
