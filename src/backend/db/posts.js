import { v4 as uuid } from "uuid";
import { avatarDB } from "../../utils/avatarDB";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
const { chaupal1Avatar, dedsecAvatar, jeetsdevAvatar } = avatarDB;

export const posts = [
	{
		_id: uuid(),
		content: "On my way to meet some like minded peoples.",
		likes: {
			likeCount: 10,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal1",
		avatar:chaupal1Avatar,
		fullName: "Chaupal",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				avatar:jeetsdevAvatar,
				text: "Interesting",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				avatar:dedsecAvatar,
				text: "Wow!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: "Again going thorugh all of this...just being stronger.",
		likes: {
			likeCount: 20,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaupal1",
		avatar:chaupal1Avatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				avatar:jeetsdevAvatar,
				text: "Good luck!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				avatar:dedsecAvatar,
				text: "Yeah...",
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
		username: "chaupal1",
		avatar:chaupal1Avatar,
		fullName: "Chaupal",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				avatar:jeetsdevAvatar,
				text: "Hanji jrur...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				avatar:dedsecAvatar,
				text: "Ek chai aur chupal...haay",
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
		avatar:jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "chaupal1",
				avatar:chaupal1Avatar,
				text: "Count me in...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				avatar:dedsecAvatar,
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
			"I found a hack, Just take the username and and add @123 after that and use as the password for that account...",
		likes: {
			likeCount: 10,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dedsec",
		avatar:dedsecAvatar,
		fullName: "Dedsec",
		comments: [
			{
				_id: uuid(),
				username: "jeetsdev",
				avatar:jeetsdevAvatar,
				text: "Let me get my hand dirty now...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "chaupal1",
				avatar:chaupal1Avatar,
				text: "Nothing to say...",
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
		content: "Learning thorugh past and growing for future...",
		likes: {
			likeCount: 40,
			likedBy: [],
			dislikedBy: [],
		},
		username: "jeetsdev",
		avatar:jeetsdevAvatar,
		fullName: "Jeet",
		comments: [
			{
				_id: uuid(),
				username: "chaupal1",
				avatar:chaupal1Avatar,
				text: "Best that you can do for yourself...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "dedsec",
				avatar:dedsecAvatar,
				text: "Yay! Rock it...",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "meandmyself",
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
];
