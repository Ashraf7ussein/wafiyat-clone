export interface Deceased {
  id: number;
  full_name: string;
  image_url: string;
  husbandName: string;
  death_date: string;
  birth_date: string;
  cause_of_death: string;
}

export interface Family {
  id: number;
  value: string;
}
