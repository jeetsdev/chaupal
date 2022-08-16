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
				text: "😩 😩 I don’t get it 😂",
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
