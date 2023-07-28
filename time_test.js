var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Test how long it takes to do a + b
var start = new Date();

for (var i = 0; i < 1000000; i++)
{
    a + b;
}

console.log((new Date()) - start);

// Test how long it takes to use concat
var start = new Date();

for (var i = 0; i < 1000000; i++)
{
    a.concat(b);
}

console.log((new Date()) - start);
