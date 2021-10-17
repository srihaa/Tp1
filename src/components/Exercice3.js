import React from 'react';

function Exercice3(){
    const Data=[
    { gender:"Male",name:"Tanner",age:84,email:"ttills0@accuweather.com",phone:3316465824,adrress:"9 Susan Hill",balance:"$0.28",likes:1,rating:8},
    {gender:"Female",name:"Molly",age:57,email:"mjuniper3@fastcompany.com",phone:2029930578,adrress:"9402 Stang Pass",balance:"$3.53",likes:4,rating:9},
    {gender:"Female",name:"Halie",age:22,email:"hvonsalzberg4@usa.gov",phone:9457416557,adrress:"5 Del Sol Street",balance:"$2.38",likes:5,rating:3},
    {gender:"Female",name:"Lawry",age:62,email:"lluno5@mapy.cz",phone:7386218289,adrress:"0986 Nevada Alley",balance:"$6.83",likes:6,rating:4},
    {gender:"Male",name:"Christin",age:20,email:"cdepper6@vimeo.com",phone:8969759105,adrress:"50 Menomonie Drive",balance:"$6.05",likes:7,rating:6},
    {gender:"Female",name:"Valry",age:39,email:"vyannikov7@bloglovin.com",phone:3001481789,adrress:"66750 Monument Park",balance:"$9.10",likes:8,rating:1},
    {gender:"Male",name:"Larissa",age:60,email:"lklausen8@yale.edu",phone:8626773158,adrress:"270 Columbus Way",balance:"$8.97",likes:9,rating:5}
           
    ]
    return (
        <div>
        <h2>Exercice3</h2> <br/><br/>
        
             
        <div className="input-group  container">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">Filter Options</button>
        </div>
            <div className=" App">
            {Data.map((val,key)=>{
                return (
                    <div className="user" key={key}>
                        {" "}
                       {val.gender} {".."} {val.name} {".."} {val.age} {".."} {val.email} {".."} {val.phone} {".."} {val.adresse} {".."} {val.balance} {".."} {val.likes} {"Likes.."} {val.rating}
                        
                        </div>
                );
            })}
            

            



            


            </div>

        
        </div>

    );
}

export default Exercice3