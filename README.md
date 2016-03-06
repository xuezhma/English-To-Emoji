# EnglishToEmoji
Less word = More fun! Kappa

<h3>Why send words when you can send emojis?</h3>
<h3>Why only translate keywords when you can translate an entire sentence?</h3>
<h2>Usage & API</h2>
<p>All image urls are using absolute links. So all you need to do is to download one of the two files: </p>
<p>You can use English-To-Emoji.js as a Node.js module: </p>
```javascript
const emoji = require('English-To-Emoji')
const translate = emoji.translate	// a function translate sentence, take a string, return a string
const listMemes = emoji.listMemes	// a function take nothing, return current meme collection
const lib = emoji.lib				// lib.json
```
<p>Or just use lib.json as a library if you are not using node.</p>
<h2>What I've in Mind</h2>
<ol>
	<li>Check for Strong Keywords, which Overwrites Entire Sentence: </li>
	<ul>
		<li>Memes, like Doge (check)</li>
		<li>Strong emotions, like rekt</li>
	</ul>
	<li>Cut a Sentence into Pieces (max = 3) </li>
	<ul>
		<li>Subject</li>
		<li>Object</li>
		<li>Everything in between</li>
	</ul>
	<li>Do Something with "Everthing Else"</li>
	<li> ...... </li>
	<li> ?????? </li>
	<li> Decide Which Emoji to Use for Each Piece</li>
</ol>