
export default function Mobile(){
    return(
        <div className="grid md: grid-cols-2">
             <img src="/img/IMAGE (5).png" alt="" />
             <div className="text-center pb-16">
                <h1 className="pt-8 pb-4">UTF</h1>
                <h1 className="py-4 text-xs">A (modular, highly tweakable) responsive one-page template designed 
                by UTPFR and released for free under the Creative Commons.</h1>
                <div className="py-4">
                <button className="border-solid border-black border-2 px-10 py-1 rounded-full text-xs">Get Started</button>
                </div>
                
             </div>

             <img src="/img/IMAGE (6).png" alt="" />
             <div className="text-center pb-16">
                <h1 className="pt-8 pb-4">Magna etiam feugiat</h1>
                <h1 className="py-4 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</h1>
                <div className="py-4">
                <button className="border-solid border-black border-2 px-10 py-1 rounded-full text-xs">Learn More</button>
                </div>
                
             </div>
        </div>

    )
}