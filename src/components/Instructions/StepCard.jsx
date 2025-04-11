const StepCard = ({stepNo, image, title, description}) => {
    return ( 
        <div className="card relative border border-t-primary  w-[300px] bg-white shadow-slate-300 shadow-md hover:shadow-lg hover:scale-110 duration-75 rounded-lg cursor-pointer">
            <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white font-semibold text-xl">{stepNo}</div>
            <img loading="eager" className="pt-10 pb-4 mx-auto px-12 object-contain pointer-events-none" src={image} alt="step image" />
            <div className="title-bg bg-secondary py-2">
                <p className="text-white font-semibold text-lg">{title}</p>
            </div>
            <div>
                <p className="card-x py-4 text-md text-justify">{description}</p>
            </div>
        </div>
  
     );
}
 
export default StepCard;