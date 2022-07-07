let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"He who is not courageous enough to take risks will accomplish nothing in life."—Muhammad Ali',
'“You can have anything you want if you want it badly enough. You can be anything you want to be, do anything you set out to accomplish if you hold to that desire with singleness of purpose.”—Abraham Lincoln',
'“Here I am . . . wanting to accomplish something and completely forgetting it must all end—that there is such a thing as death.”—Leo Tolstoy'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random(3) * quotes.length)];
    output.innerHTML = randomQuote;
})

// function myclick(){
//     var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
//      alert("fuck off");
//     output.innerhtml = randomQuote;
// }