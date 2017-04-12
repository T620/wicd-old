//prints a new heading to the contact section everytime the user hits reload
    var funnyPhrases = [
        "Help me pay my rent",
        "Help fund my caffiene addiction",
        "Buy me some new rims for my car",
        "Give me some money",
        "Help me pay for my new car",
        "Give me a job",
        "Watch me create yet another JS library",
        "Drop me a line",
        "Say hello",
        "Let's do this",
        "Give me a shot",
        "Lets get coffee",
        "Pay me to stare at a screen"
    ];
    var randomPhrase = Math.floor((Math.random() * 12));
    randomPhrase = funnyPhrases[randomPhrase];
    document.getElementById("form-heading-switcharoo").innerHTML = randomPhrase;
