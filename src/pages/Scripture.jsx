import { scriptureBG } from "../assets";
import { scriptureText } from "../constants";
import ReactMarkdown from 'react-markdown';


const Scripture = () => {
    return ( 
        <section>
            <div className="bg-gray-100 ">
                <div className="relative w-full mt-18 text-center bg-black bg-gradient-to-r from-primary via-black to-secondary">
                    <img loading="lazy" className="w-full h-[20rem] bg-fixed opacity-25 object-cover object-bottom" src={scriptureBG} alt="" />
                    <h1 className="absolute inset-0 flex items-center justify-center text-primary text-4xl font-libre font-semibold">Scripture</h1>
                    <p className="absolute top-[55%] left-[50%] -translate-x-1/2 flex items-center justify-center text-blue-400 text-xl py-2">is casting LOTS scriptural?</p>
                </div>
                <div className="pt-10 px-7 text-justify max-md:px-5 max-w-[50rem] mx-auto text-lg bg-white">
                    {
                        scriptureText.split('\n\n').map((paragraph, index, array) => (
                            <ReactMarkdown key={index} className={`${index === array.length - 1 ? '' : 'pb-4'}`}>{paragraph}</ReactMarkdown>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Scripture;