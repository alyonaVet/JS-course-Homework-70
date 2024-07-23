export interface ContactType {
  id: string;
  name: string;
  phone: string;
  email: string;
  image?: string;
  imagePreview?: string;
}

export interface ContactFormType {
  id?: string;
  name: string;
  phone: string;
  email: string;
  image?: string;
  imagePreview?: string;
}
