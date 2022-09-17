import { About, Profession, User } from "../typings";

export const professions: Profession[] = [
  {
    name: "Модель",
    slug: "zagwar-umsugch",
    bg_img:'https://images.pexels.com/photos/6940147/pexels-photo-6940147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: "Жүжигчин",
    slug: "jvjigchin",
    bg_img:'https://images.pexels.com/photos/10862799/pexels-photo-10862799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  },
  {
    name: "Инфлүүнсер",
    slug: "influencer",
    bg_img:'https://images.pexels.com/photos/6940334/pexels-photo-6940334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  },
  {
    name: "Гэрэл зурагчин",
    slug: "gerel-zuragchin",
    bg_img:'https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  },
  {
    name: "Видео зураглаач",
    slug: "video-zuraglaach",
    bg_img:'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'

  },
  {
    name: "Графикч",
    slug: "grapher",
    bg_img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  },
  {
    name: "Контент эрхлэгч",
    slug: "content-manager",
    bg_img:'https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: "Үс, нүүр будалт",
    slug: "Hair-&-Makeup-artist",
    bg_img:'https://images.pexels.com/photos/3358299/pexels-photo-3358299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  },
]



export const slider = [
  {
    message:
      'Долоо хоног бүр зураг авалт хийдэг брендийн хувьд зураг, видеоны зураг авалтад тохирох авьяастныг зөв үнээр олох гайхалтай платформ юм.',
    image: "https://raw.githubusercontent.com/temujin469/vr-landing-page/main/src/assets/img/avt1.png",
    name: 'Нандин цэцэг',
  },
  {
    message:
      'Энэ бол платформын талаарх бидний хамгийн дуртай зүйл, түүнчлэн бид нийтлэх үед хүлээн авах өргөдөл гаргагчийн хурд юм.',
    image: "https://github.com/temujin469/vr-landing-page/blob/main/src/assets/img/avt2.png?raw=true",
    name: 'Номинжин',
  },
  {
    message:
      'vivid бол бидний найлзуурууддаа авъяас чадвараа олж авах боломж юм. чанартай авьяастныг хялбархан сонгон шалгаруулах боломжийг олгодог хялбар платформ юм',
      
    image: "https://github.com/temujin469/vr-landing-page/blob/main/src/assets/img/avt3.png?raw=true",
    name: 'Мөнхжин',
  },
  {
    message:
      'vivid бол бидний найлзуурууддаа авъяас чадвараа олж авах боломж юм. чанартай авьяастныг хялбархан сонгон шалгаруулах боломжийг олгодог хялбар платформ юм',
    image: "https://github.com/temujin469/vr-landing-page/blob/main/src/assets/img/avt4.png?raw=true",
    name: 'Тэмүүжин',
  },
];

export const users:User[] = [
  {
    name:"Тэмүүжин",
    profileImage:"https://images.pexels.com/photos/6551790/pexels-photo-6551790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug:"temuujin",
    rate:5,
    location:'Улаанбаатар',
    followers:15000,
    invited_jobs:['4'],
    complated_jobs:['a','b','c','d','e'],
    applied_jobs:[],
    unsuccessful_jobs:['1','2']
  },
  {
    name:"Мөнхжин",
    profileImage:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug:"munhjin",
    rate:4,
    location:'Дархан',
    followers:2400,
    invited_jobs:['1','2'],
    complated_jobs:[],
    applied_jobs:[],
    unsuccessful_jobs:[]
  },
  {
    name:"Мөнх чимэг",
    profileImage:"https://images.pexels.com/photos/5272566/pexels-photo-5272566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug:"munh-chimeg",
    rate:4,
    location:'Эрдэнэт',
    followers:5600,
    invited_jobs:[],
    complated_jobs:['1','2','3','4'],
    applied_jobs:[],
    unsuccessful_jobs:[]
  },
  {
    name:"Буяннэмэх",
    profileImage:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug:"buynnemeh",
    rate:5,
    location:'Улаанбаатар',
    followers:11300,
    invited_jobs:[],
    complated_jobs:['1','2','3','4'],
    applied_jobs:[],
    unsuccessful_jobs:[]
  }
]


export const about1:About[] = [
  {
    img:'/images/writing-a-blog.png',
    title:'1. Ажил оруулхад үнэгүй',
    description:"Танд хэрэгтэй авъяас чадвараа олж авах уриалгыг нийтэл. Төсөл, хайж буй хүн, төсөв, эхлэх огноогоо тодорхойл. Том, жижиг аль ч загвар өмсөгч, жүжигчин эсвэл нөлөөлөгчийн ажлыг байрлуулж, сошиал, дижитал, хэвлэмэл эсвэл өргөн нэвтрүүлгийн хэвлэл мэдээллийн хэрэгслээр үүсгэх боломжтой."
  },
  {
    img:'/images/talent-requirements.png',
    title:'2. Ажилын хүсэлт хүлээн ав',
    description:"Өргөдөл гаргагчдыг хурдан хүлээж аваарай. Тэдний профайл, зураг, тойм, ишлэлийг шалгана уу. Богино жагсаалтад тохирох нэр дэвшигчдийг нэмэх эсвэл татгалз."
  },
  {
    img:'/images/work-from-home-4.png',
    title:'3. Өргөдөл гаргагчидтай харилцах',
    description:"Манай чаатаар авъяастай хүмүүстэй шууд харилцаж, бүх мессежээ нэг дор хадгалахад хялбар болгоно. Бодит цаг хугацаанд хавсралт илгээх, видео дамжуулалтыг зохион байгуулах, үнэ болон хүргэх ажлыг хурдан бөгөөд хялбараар тохиролцох. Бид танд мессеж ирэх болгонд имэйл илгээх болно, ингэснээр та цаг алдахгүй!"
  },
  {
    img:'/images/work-with-the-best.png',
    title:'4. Мэргэжилтэн захиалах',
    description:"Ажлаа цаг тухайд нь, төсөвтөө багтаан гүйцэтгэхийн тулд нэг товшилтоор авьяасаа захиалаарай. Ямар ч нарийн төвөгтэй гэрээ эсвэл уйтгартай бичиг цаасны ажил шаардагдана - бид таны төлөө энэ бүхнийг хариуцдаг. Та болон таны авъяас чадвар нь ажил дээрээ байх үед бидний 20 сая долларын олон нийтийн хариуцлага, эд хөрөнгийн хохирлын даатгалаар хамгаалагдсан."
  },
  {
    img:'/images/wallet.png',
    title:'5. Ажил дууссаны дараа 15% -ийн шимтгэл төлнө',
    description:"Бид авьяастнуудын цалинг ажлын эхэнд барьдаг бөгөөд дууссаны дараа тэдэнд олгодог. Бүх ажлын байранд 15% -ийн тогтмол шимтгэл байдаг. Загвар өмсөгч, жүжигчин эсвэл инфлүүнсер хүмүүсийн  хийсэн ажлын талаар сэтгэгдэл үлдээхээ бүү мартаарай!"
  }
]

export const about2:About[] = [
  {
    img:'/images/talent-requirements.png',
    title:'1. Post a job - its free!',
    description:"Post a call out for the talent you need. Describe your project, who you are looking for, your budget and start dates. Any model, actor or influencer job, great or small, can be posted on theright.fit to create for social, digital, print or broadcast media."
  },
  {
    img:'/images/talent-requirements.png',
    title:'1. Post a job - its free!',
    description:"Post a call out for the talent you need. Describe your project, who you are looking for, your budget and start dates. Any model, actor or influencer job, great or small, can be posted on theright.fit to create for social, digital, print or broadcast media."
  },
  {
    img:'/images/talent-requirements.png',
    title:'1. Post a job - its free!',
    description:"Post a call out for the talent you need. Describe your project, who you are looking for, your budget and start dates. Any model, actor or influencer job, great or small, can be posted on theright.fit to create for social, digital, print or broadcast media."
  },
  {
    img:'/images/talent-requirements.png',
    title:'1. Post a job - its free!',
    description:"Post a call out for the talent you need. Describe your project, who you are looking for, your budget and start dates. Any model, actor or influencer job, great or small, can be posted on theright.fit to create for social, digital, print or broadcast media."
  }
]