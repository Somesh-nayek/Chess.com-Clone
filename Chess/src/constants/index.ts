import {
  android,
  apple,
  discord,
  instagram,
  pawn,
  tiktok,
  twitch,
  x,
  youtube,
} from "../assets";

export type item = {
  img: string;
  link: string;
  title: string;
  subtitle: string;
  tag?: string;
  video?: boolean;
};
export const hero4Items: item[] = [
  {
    img: "https://images.chesscomfiles.com/uploads/v1/news/1587909.983aefa8.507x286o.c7c9d3896bea.png",
    title:
      "Praggnanandhaa Defeats Gukesh In Playoffs, Wins Tata Steel Chess 2025",
    subtitle: "AnthonyLevin",
    tag: "NM",
    link: "https://www.chess.com/news/view/praggnanandhaa-wins-2025-tata-steel-chess",
  },
  {
    img: "https://images.chesscomfiles.com/uploads/v1/news/1582367.3ac94b6e.507x286o.9f9be5de5d9f.jpg",
    title:
      "Carlsen Returns To Classical, Set For 1st Meeting With World Champion Gukesh",
    subtitle: "TarjeiJS",
    link: "https://www.chess.com/news/view/praggnanandhaa-wins-2025-tata-steel-chess",
  },
  {
    img: "https://images.chesscomfiles.com/uploads/v1/article/31707.47de4cda.507x286o.cfc797b8a887.png",
    title: "All The Training Resources On Chess.com",
    subtitle: "CoachJKane",
    link: "https://www.chess.com/article/view/all-the-training-resources-on-chess-com",
  },
  {
    img: "https://images.chesscomfiles.com/uploads/v1/video/9851.202e2ac5.507x286o.8bdc6c84f09d.png",
    title: "Rare Fourth Moves",
    subtitle: "JanistanTV",
    tag: "GM",
    link: "https://www.chess.com/video/player/rare-fourth-moves",
    video: true,
  },
];

export const footerItems = [
  {
    title: "Support",
    link: "https://chess.com/support",
  },
  {
    title: "Chess Terms",
    link: "https://chess.com/support",
  },
  {
    title: "About",
    link: "https://chess.com/support",
  },
  {
    title: "Students",
    link: "https://chess.com/support",
  },
  {
    title: "Jobs",
    link: "https://chess.com/support",
  },
  {
    title: "Developers",
    link: "https://chess.com/support",
  },
  {
    title: "User Agreement",
    link: "https://chess.com/support",
  },
  {
    title: "Privacy Policy",
    link: "https://chess.com/support",
  },
  {
    title: "Privacy Settings",
    link: "https://chess.com/support",
  },
  {
    title: "Fair Play",
    link: "https://chess.com/support",
  },
  {
    title: "Partners",
    link: "https://chess.com/support",
  },
  {
    title: "Compliance",
    link: "https://chess.com/support",
  },
  {
    title: "Chess.com © 2025",
    link: "https://chess.com/support",
  },
];
export const platform = [
  {
    icon: apple,
    link: "https://www.chess.com/play/apps/ios",
  },
  {
    icon: android,
    link: "https://www.chess.com/play/apps/android",
  },
];
export const socials = [
  {
    icon: tiktok,
    link: "https://www.tiktok.com/@chess",
  },
  {
    icon: x,
    link: "https://twitter.com/chesscom",
  },
  {
    icon: youtube,
    link: "https://twitter.com/chesscom",
  },
  {
    icon: twitch,
    link: "https://www.twitch.tv/chess",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/wwwchesscom",
  },
  {
    icon: discord,
    link: "https://discord.gg/3VbUQME",
  },
];

export const sidebar = [
  {
    title: "Play",
    icon: pawn,
    link:"https://www.chess.com/play",
    subItems: [
      {
        title: "Play",
        icon: pawn,
        link:"https://www.chess.com/play/online"
      },
      {
        title: "Play Bots",
        icon: pawn,
        link:"https://www.chess.com/play/computer"
      },
      {
        title: "Tournaments",
        icon: pawn,
        link:"https://www.chess.com/tournaments"
      },
      {
        title: "4 Player & Variants",
        icon: pawn,
        link:"https://www.chess.com/variants"
      },
      {
        title: "Leaderboard",
        icon: pawn,
        link:"https://www.chess.com/leaderboard"
      },
    ],
  },
  {
    title: "Puzzles",
    icon: pawn,
    link:"https://www.chess.com/puzzles/rated",
    subItems: [
      {
        title: "Puzzles",
        icon: pawn,
        link:"https://www.chess.com/puzzles/rated"
      },
      {
        title: "Puzzle Rush",
        icon: pawn,
        link:"https://www.chess.com/puzzles/rush"
      },
      {
        title: "Puzzle Battle",
        icon: pawn,
        link:"https://www.chess.com/puzzles/battle"
      },
      {
        title: "Daily Puzzle",
        icon: pawn,
        link:"https://www.chess.com/daily-chess-puzzle"
      },
      {
        title: "Custom Puzzle",
        icon: pawn,
        link:"https://www.chess.com/puzzles/learning"
      },
    ],
  },
  {
    title: "Learn",
    link:"https://www.chess.com/learn",
    icon: pawn,
    subItems: [
      {
        title: "Lessons",
        icon: pawn,
        link:"https://www.chess.com/lessons"
      },
      {
        title: "Chessable Courses",
        icon: pawn,
        link:"https://www.chessable.com/?utm_source=chess.com&utm_medium=navigation&utm_campaign=learn_expanded"
      },
      {
        title: "Openings",
        icon: pawn,
        link:"https://www.chess.com/lessons/learn-the-openings"
      },
      {
        title: "Lesson Library",
        icon: pawn,
        link:"https://www.chess.com/lessons/all-lessons"
      },
      {
        title: "Analysis",
        icon: pawn,
        link:"https://www.chess.com/analysis"
      },
      {
        title: "Classroom",
        icon: pawn,
        link:"https://www.chess.com/classroom"
      },
      {
        title: "Insights",
        icon: pawn,
        link:"https://www.chess.com/insights"
      },
      {
        title: "Endgames",
        icon: pawn,
        link:"https://www.chess.com/endgames"
      },
      {
        title: "Practice",
        icon: pawn,
        link:"https://www.chess.com/practice"
      },
      {
        title: "Aimchess Training",
        icon: pawn,
        link:"https://aimchess.com/try",
      },
    ],
  },
  {
    title: "Watch",
    icon: pawn,
    link:"https://www.chess.com/watch",
    subItems: [
      {
        title: "Events",
        icon: pawn,
        link:"https://www.chess.com/events",
      },
      {
        title: "ChessTV",
        icon: pawn,
        link:"https://www.chess.com/tv",
      },
      {
        title: "Streamers",
        icon: pawn,
        link:"https://www.chess.com/streamers",
      },
      {
        title: "Playing Now",
        icon: pawn,
        link:"https://www.chess.com/play/online/watch",
      },
    ],
  },
  {
    title: "News",
    icon: pawn,
    link:"https://www.chess.com/today",
    subItems: [
      {
        title: "Chess Today",
        icon: pawn,
        link:"https://www.chess.com/today",
      },
      {
        title: "News",
        icon: pawn,
        link:"https://www.chess.com/news",
      },
      {
        title: "Articles",
        icon: pawn,
        link:"https://www.chess.com/articles",
      },
      {
        title: "Top Players",
        icon: pawn,
        link:"https://www.chess.com/players",
      },
      {
        title: "Chess Rankings",
        icon: pawn,
        link:"https://www.chess.com/ratings",
      },
    ],
  },
  {
    title: "Social",
    icon: pawn,
    link:"https://www.chess.com/social",
    subItems: [
      {
        title: "Clubs",
        link:"https://www.chess.com/clubs",
        icon: pawn,
      },
      {
        title: "Forums",
        link:"https://www.chess.com/forum",
        icon: pawn,
      },
      {
        title: "Members",
        link:"https://www.chess.com/members",
        icon: pawn,
      },
      {
        title: "Blogs",
        link:"https://www.chess.com/blogs",
        icon: pawn,
      },
      {
        title: "Coaches",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
    ],
  },{
    title: "More",
    icon: pawn,
    features: [
      {
        title: "Openings",
        link:"https://www.chess.com/clubs",
        icon: pawn,
      },
      {
        title: "Library",
        link:"https://www.chess.com/forum",
        icon: pawn,
      },
      {
        title: "Explorer",
        link:"https://www.chess.com/members",
        icon: pawn,
      },
      {
        title: "Solo Chess",
        link:"https://www.chess.com/blogs",
        icon: pawn,
      },
      {
        title: "Vision",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "Vote Chess",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "Mobile Apps",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "ChessKid",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
    ],
    resources:[
      {
        title: "Videos",
        link:"https://www.chess.com/clubs",
        icon: pawn,
      },
      {
        title: "Game Database",
        link:"https://www.chess.com/forum",
        icon: pawn,
      },
      {
        title: "Chess Terms",
        link:"https://www.chess.com/members",
        icon: pawn,
      },
      {
        title: "Rules",
        link:"https://www.chess.com/blogs",
        icon: pawn,
      },
      {
        title: "Tools",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "Shop",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "Gift",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
      {
        title: "Merch",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },      
      {
        title: "Computer Championship",
        link:"https://www.chess.com/coaches",
        icon: pawn,
      },
    ]
  }
];
export const more = {
  title: "More",
  icon: pawn,
  link:"https://www.chess.com/more",
  subItems: [
    {
        title:"Features",
        menu:[
            {title:"Openings",icon:pawn,link:"https://www.chess.com/openings"},
            {title:"Library",icon:pawn,link:"https://www.chess.com/library"},
            {title:"Explorer",icon:pawn,link:"https://www.chess.com/explorer"},
            {title:"Solo Chess",icon:pawn,link:""},
            {title:"Vision",icon:pawn,link:""},
            {title:"Vote Chess",icon:pawn,link:""},
            {title:"Mobile Apps",icon:pawn,link:""},
            {title:"ChessKid",icon:pawn,link:""},
        ]
    },
    {
        title:"Resources",
        menu:[
            {title:"Videos",icon:pawn,link:""},
            {title:"Games Database",icon:pawn,link:""},
            {title:"Rules",icon:pawn,link:""},
            {title:"Tools",icon:pawn,link:""},
            {title:"Shop",icon:pawn,link:""},
            {title:"Gift",icon:pawn,link:""},
            {title:"Merch",icon:pawn,link:""},
            {title:"Computer Championship",icon:pawn,link:""},
        ]
    }
  ],
};
