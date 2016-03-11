'use strict'
//  string -> string
const memeTranslate = (sentence) => {
	let newSentence = sentence.split(' ').map(word => { 
		if (lib.keys.meme.indexOf(word) > -1){
			return `<img src='${lib.meme[word].url}'>`
		} 
		return word
	})

	return newSentence.join(' ')
}

// {string, int object} -> {string, int object}
const sentenceTranslate = (req) => {

	let sentence = req.sentence.split(' ')
	let index = req.index || lib.defaultIndex
	let emotions = Object.keys(index)
	let newSentence
	let newIndex

	
	for (let i = 0; i < emotions.length; i++) {
		let keys = lib.emotion[emotions[i]]

	}


	// add memes to the end of sentence
	newSentence += memeTranslate(sentence)

	return {newSentence: newSentence, index: newIndex}
}

// void -> string 
const listMemes = () => {
	let memelist = []
	for (let i = 0; i < lib.keys.meme.length; i++) {
		let meme = lib.keys.meme[i]
		memelist.push(`${meme}: <img src='${lib.meme[meme].url}'><br />`)
	}
	return memelist.join(' ')
}

const defaultIndex = { 
	happySad : 1 
}

const lib = {
	"defaultIndex" : { 
		happySad : 1 
	},
	"meme" : {
		"awkwardSeal" : {
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/awkwardSeal.png",
			"emotion" : {
				happySad: -0.1
			}
		},
		"doge": {
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/doge.png",
			"emotion" : {
				happySad: 0.1
			}
		},

		"dickbutt" : {
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/dickButt.png",
			"emotion" : {
				happySad: 0.2
			}

		},

		"kappa" : {
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/kappa.png",
			"emotion" : {
				happySad: 0.2
			}

		},

		"bibleThump" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/bibleThump.png",
			"emotion" : {
				happySad: -0.2
			}

		},
		"confessionBear" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/confessionBear.png",
			"emotion" : {
				happySad: -0.1
			}

		},
		"dansGame" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/dansGame.png",
			"emotion" : {
				happySad: -0.2
			}

		},
		"dickButt" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/dickButt.png",
			"emotion" : {
				happySad: 0.2
			}

		},
		"fail" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/fail.png",
			"emotion" : {
				happySad: -0.2
			}

		},
		"grumpyCat" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/grumpyCat.png",
			"emotion" : {
				happySad: -0.2
			}

		},
		"heyGuys" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/heyGuys.png",
			"emotion" : {
				happySad: 0.2
			}

		},
		"kappaPride" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/kappaPride.png",
			"emotion" : {
				happySad: 0.1
			}

		},
		"keepo" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/keepo.png",
			"emotion" : {
				happySad: 0.1
			}

		},
		"laina" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/laina.png",
			"emotion" : {
				happySad: 0.1
			}

		},
		"orc" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/orc.png",
			"emotion" : {
				happySad: 0.1
			}

		},
		"salt" :{
			"url" : "https://raw.githubusercontent.com/xuezhma/English-To-Emoji/master/lib/salt.png",
			"emotion" : {
				happySad: 0.9
			}
		}
	},

	"noun" : {
		"subject" : [],
		"object" : [],
	},

	// use "+"
	"emotion" : {
		"happySad": {
			hype: 0.5,
			happy: 0.2,
			good: 0.1,

			unhappy: 0.1,
			sad: -0.2,
			inconsolable: -0.5


		}
	},

	// use Math.pow()
	"multiplier": {
		extremely: 2.5,
		super: 2,
		very: 1.8,
		pretty: 1.5,

		might: 0.4,
		guess: 0.5,
		sorta: 0.8,
		kinda: 0.8,
	},

	"keys": {
		"meme": [ 
			'awkwardSeal',
			'doge',
			'dickbutt',
			'kappa',
			'bibleThump',
			'confessionBear',
			'dansGame',
			'dickButt',
			'fail',
			'grumpyCat',
			'heyGuys',
			'kappaPride',
			'keepo',
			'laina',
			'orc',
			'salt' 
		],

		"subject" : ["i", "he", "she", "you", "they", "mi", "yo"],
		"object" : ["me", "him", "her", "you", "them", "mi", "yo"],
		"strongEmotion" : ["rekt", "omg", "fuck"]
	}
}

module.exports = {
	lib: lib,
	memeTranslate: memeTranslate,
	listMemes: listMemes,
	sentenceTranslate: sentenceTranslate
}