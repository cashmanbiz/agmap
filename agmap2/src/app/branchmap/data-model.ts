export class Point {
    id=0;
    lat=0;
    lng=0;
    jobid="";
    datetime="";
    address= "";
    eircode= "";
    branch= "";
    branchId= "";
    iconUrl= "";
    card='';
    confirmed=false;
}

export const points: Point[]= [
{
    id : 1,
    lat: 52.846723,
    lng : -8.987006,
    jobid: "JWB000201",
    datetime: "21/06/2017 13:26",
    address: "1 SAINT ANTHONY'S TERRACE,HARMONY ROW,ENNIS,CO. CLARE",
    eircode: "V95TN80",
    branch: "Limerick",
    branchId: "I07",
    iconUrl: "assets/van.png",
    card : 'CARD2',
    confirmed : false

},
{
    id: 2,
    lat : 53.376230,
    lng :-6.598262,
    jobid: "JWB000202",
    datetime: "21/06/2017 11:26",
    address: "521 Newtown Road, Maynooth, Co Kildare",
    eircode: "W23H2D8",
    branch: "Kildare",
    branchId: "I21",
    iconUrl: "assets/van.png",
    card: 'CARD1',
    confirmed: false
},

{
    id: 3,
    lat : 54.632372,
    lng :-8.523220,
    jobid: "JWB000203",
    datetime: "21/06/2017 11:26",
    address: "KILLE, Kilcar, Co Donegal",
    eircode: "F94 WN63",
    branch: "Letterkenny",
    branchId: "I19",
    iconUrl: "assets/van.png",
    card: 'CARD2',
    confirmed: false
},
{
    id : 4,
    lat: 53.333474,
    lng :-6.268717,
    jobid: "JWB000204",
    datetime: "21/06/2017 11:26",
    address: "43 Heytesbury Street, Dublin 8",
    eircode: "D08T6X0",
    branch: "DublinHub",
    branchId: "I10",
    iconUrl: "assets/van.png",
    card : 'CARD1',
    confirmed : false

},
{
    id: 5,
    lat : 52.270141,
    lng :-9.707554,
    jobid: "JWB000205",
    datetime: "21/06/2017 11:26",
    address: "BARBEREILE, 4 RUSSELL STREET, TRALEE, CO. KERRY",
    eircode: "V92NN12",
    branch: "Kerry",
    branchId: "I1",
    iconUrl: "assets/van.png",
    card: 'CARD3',
    confirmed: false
},
{
    id: 6,
    lat : 53.283556,
    lng :-9.028002,
    jobid: "JWB000206",
    datetime: "21/06/2017 12:20",
    address: "147 WELLPARK GROVE, WELLPARK, GALWAY",
    eircode: "H91XC4E",
    branch: "Glaway",
    branchId: "I06",
    iconUrl: "assets/van.png",
    card: 'CARD2',
    confirmed: false
}
];

export const states = ['CARD1', 'CARD2', 'CARD3', 'CARD4', 'CARD5'];