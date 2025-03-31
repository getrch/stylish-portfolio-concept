
export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  image: string;
  credential?: string;
}

export interface Award {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  description: string;
  image: string;
}
