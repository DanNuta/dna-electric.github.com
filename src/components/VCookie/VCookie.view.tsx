import React, { PropsWithChildren, useState } from "react";
import * as Styles from "./VCookie";
import cookie from "../../icons/cookie/cookies.svg";
import { VButton } from "../VButton/VButton";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import {displayFlex, rootColor} from "../styles/Theme";




export const VCookieView: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{



    const [scrollState, setScrollState] = useState(0);
    const [stateLocal, setStateLocal] = useState<string | null>(null);

   let storege =  localStorage.getItem('cookie');

   
   React.useEffect(() =>{
       if(storege){
          setStateLocal((prev) => {
                    return prev = storege;
                  })
       }


       console.log("USEEFFECT")
   }, [stateLocal])


   






    // if(JSON.stringify(localStorage.getItem("cookie")) === "true"){

      
    // }else{
    //     const local = JSON.stringify(localStorage.getItem("cookie"));

    //     setStateLocal((prev) => {
    //         return prev = local;
    //       })
    // }
    


    const handlerWindows = () =>{
        const position = window.pageYOffset;
        setScrollState(position);
      }


      React.useEffect(() =>{

        window.addEventListener("scroll", handlerWindows);
    
       
      }, [])


      
      
      const btnActive = () =>{
          localStorage.setItem("cookie", "true");

          setStateLocal((prev) => {
            return prev = "true";
          })
        }
       
    

    return (

        <>
       { stateLocal !== "true" &&

        ReactDOM.createPortal(
        
    <Styles.CookieBG scroll={scrollState}>
        <Styles.Cookie>
            <img src={cookie} alt="" />

            <h1>Noi utilizam cookies</h1>

            <p>Utilizand acest site sunteti de acord
                    cu folosirea cookie-urilor.<Link to="cookie">Conusltati politica noastra privind modulele cookie
                    si privacy policy.</Link> 
                </p>

            <VButton onClick={btnActive} bg={rootColor.primary}>Accepta</VButton>
        </Styles.Cookie>

    </Styles.CookieBG>, document.getElementById("root") as HTMLDivElement)

        
}

</>

    )

}