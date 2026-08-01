import { CountryPackage } from "./types";

export const countries: CountryPackage[] = [

{
id:1,
country:"Netherlands",
flag:"🇳🇱",
code:"NL",
image:"/assets/esim/netherlands.webp",

packages:[
{
id:101,
title:"5GB",
price:7.99,
days:30,
network:"4G / 5G",
coverage:"Netherlands"
},
{
id:102,
title:"10GB",
price:12.99,
days:30,
network:"4G / 5G",
coverage:"Netherlands"
},
{
id:103,
title:"Unlimited",
price:24.99,
days:30,
network:"5G",
coverage:"Netherlands"
}
]
},

{
id:2,
country:"Pakistan",
flag:"🇵🇰",
code:"PK",
image:"/assets/esim/pakistan.webp",

packages:[
{
id:201,
title:"5GB",
price:4.99,
days:30,
network:"4G",
coverage:"Pakistan"
},
{
id:202,
title:"20GB",
price:9.99,
days:30,
network:"4G",
coverage:"Pakistan"
},
{
id:203,
title:"Unlimited",
price:18.99,
days:30,
network:"5G",
coverage:"Pakistan"
}
]
},

{
id:3,
country:"United Arab Emirates",
flag:"🇦🇪",
code:"AE",
image:"/assets/esim/uae.webp",

packages:[
{
id:301,
title:"10GB",
price:4.99,
days:7,
network:"5G",
coverage:"Middle East"
},
{
id:302,
title:"50GB",
price:15.99,
days:7,
network:"5G",
coverage:"Middle East"
}
]
},

{
id:4,
country:"Saudi Arabia",
flag:"🇸🇦",
code:"SA",
image:"/assets/esim/saudi.webp",

packages:[
{
id:401,
title:"10GB",
price:6.99,
days:15,
network:"5G",
coverage:"Saudi Arabia"
}
]
},

{
id:5,
country:"Turkey",
flag:"🇹🇷",
code:"TR",
image:"/assets/esim/turkey.webp",

packages:[
{
id:501,
title:"20GB",
price:11.99,
days:30,
network:"5G",
coverage:"Turkey"
}
]
},

{
id:6,
country:"India",
flag:"🇮🇳",
code:"IN",
image:"/assets/esim/india.webp",

packages:[
{
id:601,
title:"10GB",
price:8.99,
days:30,
network:"5G",
coverage:"India"
}
]
}

];