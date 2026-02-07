import { v4 as uuid } from "uuid";
import { avatarDB } from "../../utils/avatarDB";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
const {
	chaupalAvatar,
	dedsecAvatar,
	jeetsdevAvatar,
	capAvatar,
	tonyAvatar,
	harviAvatar,
} = avatarDB;

export const posts = [
	{
		_id: uuid(),
		content: "On my way to meet some like-minded people.",
		likes: {
			likeCount: 10,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "cap",
				text: "On your left...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				text: "Here I am...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"It's not about how much we lost. It's about how much we have left. We're the Avengers. We gotta finish this.",
		likes: {
			likeCount: 35,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tony",
		avatar: tonyAvatar,
		fullName: "tony",
		comments: [
			{
				_id: uuid(),
				username: "cap",
				text: "Whatever it takes.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "harvi",
				text: "Love you 3000.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Chalo ek saam Chaupal ke naam.",
		likes: {
			likeCount: 60,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Hanji jrur...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				text: "Ek chai aur chupal...haay",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "cap",
				text: "I can do this all day...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Hello summer, I really hate you...That's it.",
		likes: {
			likeCount: 20,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "chaupal",
				text: "Count me in...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				text: "But why..?",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"I found a hack, take the username and add @123 after that and use it as the password for that account...",
		likes: {
			likeCount: 10,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar: dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Let me get my hand dirty now...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal",
				text: "Nothing to say...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "I see what you did there...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Learning through the past and growing for the future...",
		likes: {
			likeCount: 40,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "chaupal",
				text: "Best that you can do for yourself...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "ninja",
				text: "Yay! Rock it...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "Loved it.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"I am again going through all of this...just being stronger...",
		likes: {
			likeCount: 20,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Good luck!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "adii",
				text: "More power to you...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Shuffle an Array in JS.",
		likes: {
			likeCount: 30,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		postImg:
			"https://res.cloudinary.com/dz7duml2h/image/upload/v1660047268/FRMzdeRaAAAj92H_wgkoto.jpg",
		comments: [
			{
				_id: uuid(),
				username: "adii",
				text: "Thanks for the info",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "I’m With You Till The End Of The Line.",
		likes: {
			likeCount: 20,
			likedBy: [],
			dislikedBy: [],
		},
		username: "cap",
		avatar: capAvatar,
		fullName: "Captain",
		comments: [
			{
				_id: uuid(),
				username: "harvi",
				text: "Let's see.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "We create our own Demons.",
		likes: {
			likeCount: 12,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tony",
		avatar: tonyAvatar,
		fullName: "Tony",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "couldn't agree more",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"You either die a hero or you live long enough to see yourself become the villain.",
		likes: {
			likeCount: 12,
			likedBy: [],
			dislikedBy: [],
		},
		username: "harvi",
		avatar: harviAvatar,
		fullName: "Harvi",
		comments: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "This is a JavaScript joke and you won't get it😌",
		likes: {
			likeCount: 32,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "harvi",
				text: "😩 😩 I don't get it 😂",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Just deployed my first full-stack app! The feeling is unreal. Keep pushing, devs!",
		likes: {
			likeCount: 45,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "chaupal",
				text: "Congratulations! What stack did you use?",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "That's the spirit! Keep building.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Sometimes I believe the compiler is just trolling me. 47 errors after fixing one semicolon.",
		likes: {
			likeCount: 78,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar: dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Classic! Been there, done that.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "cap",
				text: "I can debug this all day...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "The world has changed and none of us can go back. All we can do is our best.",
		likes: {
			likeCount: 52,
			likedBy: [],
			dislikedBy: [],
		},
		username: "cap",
		avatar: capAvatar,
		fullName: "Captain",
		comments: [
			{
				_id: uuid(),
				username: "tony",
				text: "Getting philosophical, Cap?",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Part of the journey is the end. What a ride it has been!",
		likes: {
			likeCount: 89,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tony",
		avatar: tonyAvatar,
		fullName: "Tony",
		comments: [
			{
				_id: uuid(),
				username: "harvi",
				text: "Don't make me cry again...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "cap",
				text: "You did good, Tony.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "CSS tip: If you're struggling with centering, just use flexbox. display: flex; justify-content: center; align-items: center;",
		likes: {
			likeCount: 67,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		postImg: "https://res.cloudinary.com/dz7duml2h/image/upload/v1660047268/FRMzdeRaAAAj92H_wgkoto.jpg",
		comments: [
			{
				_id: uuid(),
				username: "dedsec",
				text: "Or just use: place-items: center; on grid!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal",
				text: "Saved for later!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Morning chai + coding = perfect combo. What's your fuel?",
		likes: {
			likeCount: 41,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Coffee for me! Strong and black.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "harvi",
				text: "Nothing beats masala chai!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "Smoothie. Gotta stay healthy.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Just finished a 100 days of code challenge! Consistency is key.",
		likes: {
			likeCount: 93,
			likedBy: [],
			dislikedBy: [],
		},
		username: "harvi",
		avatar: harviAvatar,
		fullName: "Harvi",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "That's incredible! What did you build?",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal",
				text: "Inspiring! Starting mine today.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Pro tip: Always read the error message before Googling. 80% of the time, the answer is right there.",
		likes: {
			likeCount: 55,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar: dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "tony",
				text: "But Stack Overflow is my second home!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Weekend project idea: Build a CLI tool that generates memes. Who's in?",
		likes: {
			likeCount: 38,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "dedsec",
				text: "Count me in! Let's use Node.js.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "harvi",
				text: "This sounds fun!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Remember: A hero can be anyone. Even a man doing something as simple as putting a coat around a young boy's shoulders.",
		likes: {
			likeCount: 64,
			likedBy: [],
			dislikedBy: [],
		},
		username: "harvi",
		avatar: harviAvatar,
		fullName: "Harvi",
		comments: [
			{
				_id: uuid(),
				username: "cap",
				text: "Well said!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Git commit -m 'Fixed bug' ... 47 commits later ... Git commit -m 'Actually fixed bug this time'",
		likes: {
			likeCount: 112,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar: dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "This is too real!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal",
				text: "And then you realize it was a typo all along.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "Story of my life.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "If it works, don't touch it. That's my production mantra.",
		likes: {
			likeCount: 73,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tony",
		avatar: tonyAvatar,
		fullName: "Tony",
		comments: [
			{
				_id: uuid(),
				username: "dedsec",
				text: "Until someone asks for a 'small change'...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Today I mass-renamed 200 files using a bash script. Felt like a wizard!",
		likes: {
			likeCount: 48,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Command line magic is the best magic!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "New to programming? Start with JavaScript. It runs everywhere - browser, server, mobile, even space!",
		likes: {
			likeCount: 81,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar: jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "harvi",
				text: "Python fans might disagree!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				text: "Rust is the future though.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "cap",
				text: "I started with C. No regrets!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Peace is not just the absence of conflict, but the presence of justice.",
		likes: {
			likeCount: 59,
			likedBy: [],
			dislikedBy: [],
		},
		username: "cap",
		avatar: capAvatar,
		fullName: "Captain",
		comments: [
			{
				_id: uuid(),
				username: "tony",
				text: "Deep thoughts today, huh?",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "harvi",
				text: "Words to live by.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Just discovered that my code from 2 years ago has zero comments. Past me was not a good teammate.",
		likes: {
			likeCount: 96,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal",
		avatar: chaupalAvatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "dedsec",
				text: "Write code for your future self!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Clean code > comments, but both are better!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Hot take: Tabs > Spaces. Fight me.",
		likes: {
			likeCount: 134,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar: dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "2 spaces gang here!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "tony",
				text: "Prettier handles this for me.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal",
				text: "The real answer is: use what your team uses.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "harvi",
				text: "This debate will never end!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Failure is not the opposite of success, it's part of success. Keep failing forward!",
		likes: {
			likeCount: 71,
			likedBy: [],
			dislikedBy: [],
		},
		username: "harvi",
		avatar: harviAvatar,
		fullName: "Harvi",
		comments: [
			{
				_id: uuid(),
				username: "cap",
				text: "This is the way.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "My rubber duck is my best debugging partner. Don't judge.",
		likes: {
			likeCount: 87,
			likedBy: [],
			dislikedBy: [],
		},
		username: "tony",
		avatar: tonyAvatar,
		fullName: "Tony",
		comments: [
			{
				_id: uuid(),
				username: "dedsec",
				text: "Rubber duck debugging is a legit technique!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "jeetsdev",
				text: "Mine is named Debug Quackers.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
