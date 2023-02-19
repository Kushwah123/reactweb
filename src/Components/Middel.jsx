import React from "react";

const Middel = () => {
    return (
        <div className="Middel">
            <div className="form">
                <input type="text" value="" className="formcontrol" placeholder="Pincode" />
                <input type="text" value="" className="formcontrol" id ="city" placeholder="City,State" />
                <select className=" " id="select">
                    <option value="" disabled selected hidden>catogary</option>
                    <option value="1">Moms And Meternity</option>
                    <option value="1">HouseHold Care & Cleaning</option>
                    <option value="1">Gifting & Hampers</option>
                    <option value="1"> Organic & Ayurveda</option>
                    <option value="1"> Women Clothing Tailoring & Accesseries</option>
                    <option value=" "> Tourism & Hospitality</option>
                </select>
            </div>
            <div className="cart ">
             <div className="traders">
             <img src="http://res.cloudinary.com/whitewular-com/image/authenticated/s--s8TiL3JN--/v1666771919/xnqscssvdcefp9mijyka.png" className="traders"/>
             </div>
             <hr/>
             <h4>Thinkwala Traders</h4>
                Household Care & Cleaning | Organic & Ayurveda | Women Clothing, Tailoring & Accessories | Tourism & Hospitality | 
                Tech Development & 
                IT Solutions | Teaching & Education | Sports, Fitness and Trainer | Salon Services | Repair & Maintenance | 
                Rental & Leasing | Pet Supplies & Services | Musical Instruments | Men Clothing, Tailoring & Accessories | 
                Medical Supplies & Services | Industrial Supplies & Services | Handmade & Handicraft | Grocery & Gourmet Foods 
                | Games & Toys | Freelancers & Contractors | Finance & Legal Services | Filming & Shooting | Events & Parties |
                 Electronics & Electricals | Decor & Designing | Deals & Offers | Cosmetic & Personal Care | Building Materails &
                  Construction Services | Books & Stationery | Agriculture & Farming | Accessories | Automobiles Parts & Spares |
                   Baby Products | Baggage & Luggage | Gifting & Hampers
                   <hr/>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2deycvzL-n51b7ZWvgoK2jOIQ0mp3xtTuDw&usqp=CAU" alt=""/>
                   Address:
                   <br/>
                   Sec 3,Rohini,New Delhi,110085
                   <br/>
                   <img src=" https://img.lovepik.com/free-png/20210926/lovepik-mobile-phone-icon-png-image_401486772_wh1200.png" alt=""/>
                   Phone number:
                   <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EMDhu98DuG-z_mQIK-fiiq0Hj0dL1GYhNQ&usqp=CAU" alt=""/>
                   EMAIL ID:
                   <br/>
                   9718560123
                  <span > thinkwalatraders@gmail.com</span>
            </div>
        </div>
    )
}
export default Middel;