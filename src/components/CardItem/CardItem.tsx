

type PropsCard = {
    img: string,
    title: string,
    price: string,
    id: string
}

export function CardItem(props: PropsCard){


    return <div>
             <img src={props.img} />
             <h1>{props.title}</h1>

             <div>
                <p>{props.price}</p>

               <div>

                 <span onClick={addToShop}><img src={props.img} alt="" /></span>
                 <span><img src={props.img} alt="" /></span>


               </div>
             </div>
          </div>
}