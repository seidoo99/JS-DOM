var container1 = document.getElementById('container');
container1.style.margin = " 0px 100px";

//create nav and its elements
var nav1 = document.createElement('nav');
var ulist = document.createElement('ul');
var list1 = document.createElement('li', );
var h3 = document.createElement('h3');
var navText1 = document.createTextNode('HighOnCoding');
h3.append(navText1);
list1.appendChild(h3);
ulist.appendChild(list1);
nav1.appendChild(ulist);
container1.appendChild(nav1);
nav1.style.backgroundColor = "#2c73a9";
list1.style.display = "inline-block";

var list2 = document.createElement('li', );
var navText2 = document.createTextNode('Home');
list2.appendChild(navText2);
ulist.appendChild(list2);
nav1.appendChild(ulist);
container1.appendChild(nav1);
list2.style.display = "inline-block";
list2.style.paddingLeft = "20px";

var list3 = document.createElement('li', );
var navText3 = document.createTextNode('Catagories');
list3.appendChild(navText3);
ulist.appendChild(list3);
nav1.appendChild(ulist);
container1.appendChild(nav1);
list3.style.display = "inline-block";
list3.style.paddingLeft = "20px";

// creating the first div with curse of the current review
var div1 = document.createElement('div');
var header1 = document.createElement('h2');
var textNode1 = document.createTextNode('Curse of the current review');
var paragraph1 = document.createElement('p');
var paragraphText1 = document.createTextNode('when you want to buy any application from the apple itunes store you have more choices than you can handle, Most of the users' +
    'scroll paast the application description completely avoiding it is like ads displayed on the right column' +
    'of your webpage. Their choice is dependent on three important factors price, screenshot and reviews');
paragraph1.appendChild(paragraphText1);
header1.appendChild(textNode1);
div1.appendChild(header1);
div1.appendChild(paragraph1);
container1.appendChild(div1);
div1.style.backgroundColor = "lightgrey";
div1.style.margin = " 0px 20px";
// creating the second div and its elements inside it
var div2 = document.createElement('div');
var header2 = document.createElement('h3');
var textNode2 = document.createTextNode('Hello WatchKit');
var paragraph2 = document.createElement('p');
var paragraphText2 = document.createTextNode('Last month Apple released the anticipated watchKit Framework' +
    'for developers in the form of iOS 8.2 beta SDK release. The watching framework enable the developers to create Apple' +
    'watch applications. In this article we are going to focus on the basics of getting started with' +
    'Watchkit framework and developing apps for the Apple watch');
paragraph2.appendChild(paragraphText2);
header2.appendChild(textNode2);
div2.appendChild(header2);
div2.appendChild(paragraph2);
container1.appendChild(div2);
div2.style.margin = " 0px 20px";
header2.style.color = "blue";
// nav bar for the like and commment orange and the text  and the header above
var nav2 = document.createElement('nav');
var ulist2 = document.createElement('ul');
var list21 = document.createElement('li');
var navText21 = document.createTextNode('12 comments');
list21.appendChild(navText21);
ulist2.appendChild(list21);
nav2.appendChild(ulist2);
div2.appendChild(nav2);
nav2.style.backgroundColor = "orange";
list21.style.display = "inline-block";


var list22 = document.createElement('li');
var navText22 = document.createTextNode('124 likes');
list22.appendChild(navText22);
ulist2.appendChild(list22);
nav2.appendChild(ulist2);
div2.appendChild(nav2);
list22.style.display = "inline-block";
list22.style.paddingLeft = "20px";

// nav bar for the like and commment orange bar and the text , header above
var div3 = document.createElement('div');
var header3 = document.createElement('h3');
var textNode3 = document.createTextNode('Introduction to swift');
var paragraph3 = document.createElement('p');
var paragraphText3 = document.createTextNode('Swift is a modern programming language developed by Apple to create' +
    'the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it ' +
    'clearly reflects the intentionsand the future direction. This article will revolve  around' +
    'around the basic concepts in the swift language and how you can get started.');

paragraph3.appendChild(paragraphText3);
header3.appendChild(textNode3);
div3.appendChild(header3);
div3.appendChild(paragraph3);
container1.appendChild(div3);
div3.style.margin = " 0px 20px";
header3.style.color = "blue";

var nav3 = document.createElement('nav');
var ulist3 = document.createElement('ul');
var list31 = document.createElement('li');
var navText31 = document.createTextNode('15 comments');
list31.appendChild(navText31);
ulist3.appendChild(list31);
nav3.appendChild(ulist3);
div3.appendChild(nav3);
nav3.style.backgroundColor = "orange";
list31.style.display = "inline-block";

var list32 = document.createElement('li');
var navText32 = document.createTextNode('45 likes');
list32.appendChild(navText32);
ulist3.appendChild(list32);
nav3.appendChild(ulist3);
div3.appendChild(nav3);
list32.style.display = "inline-block";
list32.style.paddingLeft = "20px";

console.log(list32);