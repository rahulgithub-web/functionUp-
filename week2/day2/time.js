    /*  Guess the output */

    function getUser() {
        return {
            name: 'Javascript'
        };
    }    
    
    function getAnotherUser() {
        return 
        {
            name: 'Connections'
        };
    }
    
    console.log(getUser());
    console.log(getAnotherUser());

    // A: {name: 'Javascript'} {name: 'Connections'}
    // B: Uncaught syntax error 
    // C: {name: 'Javascript'} undefined
    // D: undefined {name: 'Javascript'}  