export const userColumns = [
    { field: "id", headerName:"ID", width:70},
    {field:"user",headerName:"First Name", width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=""/>
                {params.row.firstname}
            </div>
        )
    },
},
    {field:"lastname",headerName:"Last Name", width:150},
    {field:"contact",headerName:"Contact No.", width:155},
    {field:"evacsite",headerName:"Evactuation Site", width:250},
    {field:"status",headerName:"Status", width:120, renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }},
    
];


export const userRows = [
    {
        id: 1,
        img:"https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/278508806_5207949865893600_4974729196013864451_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rFzNxlRnUeMAX-_UJCm&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8e3usqcl6e9cPtqq4Iv0n9rZYjNT_Yxe3ocI7vpKbu1g&oe=62703BE9",
        firstname: "Diamond Darell",
        lastname:"Calalang",
        contact:"0999 999 999",
        evacsite:"University of Santo Tomas",
        status: "Safe",
    },
    {
        id: 2,
        img:"https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/97041314_3251433181748643_9134372304367648768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=b6JY2-ffVtIAX894JFL&tn=CaFnC0TyURd8Ejd4&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT9Z7HgLwQmueAvmL3_4yMGJUUdBivmnYVkyBf0NHfPDdA&oe=628F5C3E",
        firstname: "Karl Edward",
        lastname:"Fransico",
        contact:"0999 999 999",
        evacsite:"National University",
        status: "Treating",
    },
    {
        id: 3,
        img:"https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/250650341_916491768994443_4465943106430000383_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=MN7NBcdwlBwAX-V6gmz&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_LcHoL1vqRSWucIrM2pDhNG4g2Y1Z5z5lPAa1YuYDhUw&oe=62705305",
        firstname: "Djerson",
        lastname:"Estrella",
        contact:"0999 999 999",
        evacsite:"De La Salle University",
        status: "Discharged",
    },
    {
        id: 4,
        img:"https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/105532105_1587110128115372_6746552371527651858_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6CrCbT9FDx8AX9qirLl&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT9c5H3Cg2lIxi_70U3WIbcfVYrpQ6Dca2Uqfk6MFZFcew&oe=62909CD3",
        firstname: "Cyrus",
        lastname:"Robles",
        contact:"0999 999 999",
        evacsite:"UP Diliman",
        status: "Safe",
    },
    {
        id: 5,
        img:"https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/53788212_2871754289715490_7189756402892537856_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=D4BBusMWJbUAX-Xzk6n&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT9b8oGL5SMGl43PBxBAYkkDShfU88G2RCbltbQAIu77MA&oe=6291C291",
        firstname: "Francis",
        lastname:"Abusejo",
        contact:"0999 999 999",
        evacsite:"Far Eastern University",
        status: "Discharged",
    },
    
    

]