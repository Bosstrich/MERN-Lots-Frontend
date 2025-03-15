import { steps } from "../../constants";
import StepCard from "./StepCard";

const StepsHeading = () => {
    return ( 
        <section className='bg-gray-100'>
            <div className='pt-20 padding-x pb-10 text-center'>
                <div className="mt-5 font-semibold">
                    <h1 className="text-primary text-4xl font-libre">Instructions</h1>
                    <p className="text-blue-800 text-xl py-2">on how to grab a rhema spiritually</p>
                </div>
                <div className="mt-12 md:gap-8 gap-16 flex justify-center flex-wrap">
                    {console.log(steps)}
                    {steps.map((step, index) => {
                        return (
                            <StepCard key={index}
                                      stepNo={index + 1} 
                                      image={step.image} 
                                      title={step.stepTitle} 
                                      description={step.stepDescription}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default StepsHeading;