export interface catBreeds {
  description: string;
  life_span: string;
  name: string;
  origin: string;
  temperament: string;
}

export interface catResponse {
  breeds: catBreeds[];
  height: number;
  id: string;
  url: string;
  width: number;
}
