export type StaffMember = {
  id: string;
  name: string;
  role: string;
  about: string;
  photo?: string;
};

export const staff: StaffMember[] = [
  { id: "1", name: "name", role: "role", about: "about", photo: "Greg_Staff.webp"},
];