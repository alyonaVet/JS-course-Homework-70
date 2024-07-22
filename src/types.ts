export interface ContactType {
  id: number;
  name: string;
  phone: string;
  email: string;
  image?: string;
  imagePreview?: string;
}
export type ContactFormType = Omit<ContactType, 'id'>;
