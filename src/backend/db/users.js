import { v4 as uuid } from "uuid";
import { avatarDB } from "../../utils/avatarDB";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
const { chaupal1Avatar, dedsecAvatar, jeetsdevAvatar } = avatarDB;

export const users = [
	{
		_id: uuid(),
		fullName: "Chaupal",
		username: "chaupal1",
		password: "chaupal@123",
		bio: "Lets chat and meet",
		website: "https://chaupal-jeetsdev.netlify.app/",
		avatar: chaupal1Avatar,
		createdAt: formatDate(),
		updatedAt: formatDate(),
		followers: [],
		following: [],
	},
	{
		_id: uuid(),
		fullName: "Jeet",
		username: "jeetsdev",
		bio: "Learning and growing...",
		website: "https://jeetsdev.netlify.app/",
		avatar: jeetsdevAvatar,
		password: "jeetsdev@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		followers: [],
		following: [],
	},
	{
		_id: uuid(),
		fullName: "Boolean",
		username: "dedsec",
		bio: "Unavilable for lifetime.",
		website: "https://dedsec.netlify.app/",
		avatar: dedsecAvatar,
		password: "notme@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		followers: [],
		following: [],
	},
];
