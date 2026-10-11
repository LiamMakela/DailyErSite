export type NightlyerVideo = {
  id: string;
  title: string;
  date: string;
  youtubeId?: string;
  thumbnailImage?: string;
};

export const videos: NightlyerVideo[] = [
  { id: "1", title: "Episode 1", date: "Dec 17, 2024", youtubeId: "fNdfOSaKmGo", thumbnailImage: "Nightlyer_Episode_1.jpg"},
  { id: "2", title: "Holiday Special", date: "Dec 25, 2024", youtubeId: "ojgln1xwwVo", thumbnailImage: "Nightlyer_Episode_2.jpg"},
  { id: "3", title: "Episode 3", date: "Mar 13, 2025", youtubeId: "mLzsrYn4Y6Q", thumbnailImage: "Nightlyer_Episode_3.jpg"},
  { id: "4", title: "Episode 4", date: "May 8, 2025", youtubeId: "_Sy55t9l97k", thumbnailImage: "Nightlyer_Episode_4.jpg"},
  { id: "5", title: "Episode 5 - GAME DAY", date: "Oct 17, 2025", youtubeId: "v2qE1wI9yns", thumbnailImage: "Nightlyer_Episode_5.jpg"},
  { id: "6", title: "Episode 6 - TELETHON", date: "Dec 19, 2025", youtubeId: "nId6RFtgd4M", thumbnailImage: "Nightlyer_Episode_6.jpg"},
  { id: "7", title: "Episode 7 - LOVE", date: "Mar 11, 2026", youtubeId: "dLw7CnFvouQ", thumbnailImage: "Nightlyer_Episode_7.jpg"},
];