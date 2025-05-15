const randomGenerator = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

const adjectives = ['Galactic', 'Red', 'Recursive', 'Prime', 'Green', 'Darkened', 'Reincarnated', 'Restless', 'Distant', 'Pressurized', 'Carbon', 'Comedic'];
const nouns = ['Mirror', 'Release', 'Soul', 'Chalice', 'Prose', 'Myth', 'Vandal', 'Crucible', 'Jubilation', 'Voice', 'Perception', 'Vibration'];
const these = [true, false];

let albumName = '';

const adj = adjectives[randomGenerator(adjectives)];
const noun = nouns[randomGenerator(nouns)];
const the = these[randomGenerator(these)];

const albumNameGenerator = () => {
    if (the) {
        console.log(`Your album name is:\nThe ${adj} ${noun}`);
    } else {
        console.log(`Your album name is:\n${adj} ${noun}`);
    }
}

albumNameGenerator();

