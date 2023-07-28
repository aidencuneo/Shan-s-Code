function sleep(duration)
{
    return new Promise(resolve => setTimeout(resolve, duration));
}

(async () => {

console.log('started');
await sleep(1000); // aWAIT the promise - wait for it to finish
console.log('finished');

})();



// Can you go get milk for me?
// Sure, I PROMISE I'll be back with milk

// Promise: It's a promise because the code promises to come back to you eventually.

// Promise Chain: A bunch of events that each happen after the end of the previous one.

// Example of promise chain
fetch(something).then(res => {
    res.text().then(text => {
        console.log("I finally got the text: " + text);
    });
});
