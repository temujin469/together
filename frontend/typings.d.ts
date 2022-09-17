export type Profession = {
  name:string
  slug:string
  bg_img:string
};

export type Skill = {
  name:string
  slug:string
};

export type User = {
  name:string
  profileImage:string
  location:string
  slug:string
  invited_jobs:string[]
  complated_jobs:string[]
  applied_jobs:string[]
  unsuccessful_jobs:string[]
  rate:number
  followers:number
}


export type About = {
  img: string;
  title: string;
  description: string;
}