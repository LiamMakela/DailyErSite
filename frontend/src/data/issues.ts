export type Issue = {
  id: string;
  title: string;
  date: string;
  coverImage?: string;
  pdfUrl?: string;
};

export const issues: Issue[] = [
  { id: "1", title: "title", date: "date",},
];