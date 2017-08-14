README DAN the Man!

I just noticed there is a quirk in javascript the var i or our counter should actually be defined as " let " Why? because this allows more
flexibility in this given goal context and allows the pages to function and be ordered apprpopratily I was playing with it last night and noticed this
I was getting page 321, 213 etc.. but sometimes 333 and investigated further when I was back in class the 'let' solves this!


Response from Dan

This is exactly why 'let' was created. What happens in this exercise is that the for loop creates a 
global 'i' variable, and every time the loop runs it refers to this global var. However, the for
loop runs so fast that it completes before request receives any response. So when the response comes
back and the callback function fires, the global i has already incremented to 3, and every callback
function is referring to the same global i variable, so you see 'Page 3' printed 3 times. 'let' creates
a unique 'i' that only exists in the scope of each for loop block, and we get the result we expect!