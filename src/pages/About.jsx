import { aboutIcon } from "../assets";
import { aboutText } from "../constants";

const About = () => {
    return ( 
        <section className="bg-gray-100">
            <div className="mt-16 pb-7">
                <div className="text-center pt-10">
                    <h1 className="text-primary font-semibold text-4xl">About</h1>
                    <p className="text-blue-800 text-xl py-2">the website and its design</p>
                </div>
                <div className="mt-8 px-8 py-8 bg-white rounded-md shadow-md text-center max-w-[40rem] mx-auto">
                    <div className="flex justify-center">
                        <img loading="eager" className="w-[15rem]" src={aboutIcon} alt="lots-logo" />
                    </div>
                    {aboutText.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="py-3 text-lg">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default About;