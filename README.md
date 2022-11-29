# TWITABA☆
Twitter reply bot written in Node using Twitter V2 api

## About
This is a reply bot that emulates GET/roullete games popular on imageboards. Tweeting to the bot with `@<username> /roll #fortune` will cause the bot to reply to that tweet with a randomly generated 7 digit number and a randomly selected fortune (short statement similar to 8-ball or fortune cookie). If the number ends in consecutively repeated digits (ex. 3247777) the bot will tack on a message indicating "dubs", "trips", or "quads". 

A user may only receive 2 rolls (1 roll + 1 "reroll") per thread (game lobby). 

