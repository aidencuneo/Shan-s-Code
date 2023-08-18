const me = {
    myName: 'aiden',

    //accessor property(setter)
    set name(newName) {
        // Reset my name back to 'aiden' ;)
        this.myName = 'aiden';

        // Normally this would be `this.myName = newName;` instead
    }, // Don't forget commas, since you're in an object

    get name() {
        // Print my name for everyone to see ;)
        console.log(this.myName);
    },
};

// How to use it:

me.name = 'shan';
// me.name.set

me.name += ' blishen cuneo';
// me.name.set

shipTo(me.name, 'china');
// me.name.get

me.name;
// me.name.get
