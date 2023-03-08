import MarkWebber from "../assets/images/avatar-mark-webber.webp";
import AngelaGray from "../assets/images/avatar-angela-gray.webp";
import JacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";
import Chess from "../assets/images/image-chess.webp";

interface User {
  name: string;
  avatar: string;
  url: string;
}

interface PostOrGroup {
  title: string;
  url: string;
}

interface Picture {
  url: string;
  alt: string;
  href: string;
}

export interface Item {
  id: number;
  user: User;
  time: string;
  read: boolean;
  action?: string;
  postOrGroup?: PostOrGroup;
  message?: string;
  picture?: Picture;
}

const items: Item[] = [
  {
    id: 1,
    user: {
      name: "Mark Webber",
      url: "#",
      avatar: MarkWebber,
    },
    time: "1min ago",
    read: false,
    action: "reacted to your recent post",
    postOrGroup: { title: "My first tournament today!", url: "#" },
  },
  {
    id: 2,
    user: {
      name: "Angela Gray",
      url: "#",
      avatar: AngelaGray,
    },
    time: "5min ago",
    read: false,
    action: "followed you",
  },
  {
    id: 3,
    user: {
      name: "Jacob Thompson",
      url: "#",
      avatar: JacobThompson,
    },
    time: "1 day ago",
    read: false,
    action: "has joined your group",
    postOrGroup: { title: "Chess Club", url: "#" },
  },
  {
    id: 4,
    user: {
      name: "Rizky Hasanuddin",
      url: "#",
      avatar: RizkyHasanuddin,
    },
    time: "5 days ago",
    read: true,
    action: "sent you a private message",
    message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
  },
  {
    id: 5,
    user: {
      name: "Kimberly Smith",
      url: "#",
      avatar: KimberlySmith,
    },
    time: "1 week ago",
    read: true,
    action: "commented on your picture",
    picture: {
      url: Chess,
      alt: "You playing chess",
      href: "#",
    },
  },
  {
    id: 6,
    user: {
      name: "Nathan Peterson",
      url: "#",
      avatar: NathanPeterson,
    },
    time: "2 weeks ago",
    read: true,
    action: "reacted to your recent post",
    postOrGroup: {
      title: "5 end-game strategies to increase your win rate",
      url: "#",
    },
  },
  {
    id: 7,
    user: {
      name: "Anna Kim",
      url: "#",
      avatar: AnnaKim,
    },
    time: "2 weeks ago",
    read: true,
    action: "left the group",
    postOrGroup: {
      title: "Chess Club",
      url: "#",
    },
  },
];

export default items;
