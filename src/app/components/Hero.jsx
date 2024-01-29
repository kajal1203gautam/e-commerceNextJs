export default function Hero({children}){
    
    return(
        <>
        <section>
            {children}
            <img src="./images/hero1.jpg" alt="" style={{width:'100%'}} />
        </section>
        </>
    )
}