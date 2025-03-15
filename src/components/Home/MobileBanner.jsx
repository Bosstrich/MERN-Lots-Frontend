import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";


const MobileBanner = () => {
    return ( 
        <section>
            <div className="text-center md:flex items-center justify-center gap-10 py-16 padding-x ">
                <div>
                    <h2 className="text-2xl text-blue-800 font-semibold">Receive oracles from GOD, anytime, anywhere!</h2>
                    <p className="text-gray-500">Seek guidance from the one true almighty GOD. Download the App today!</p>
                </div>
                <div className="flex justify-center max-md:mt-5 md:flex-col gap-2 ">
                    <GooglePlayButton
                        theme={'light'}
                    />      
                    <AppStoreButton
                        theme={'light'}
                    />      
                      
                </div>
            </div>
        </section>
     );
}
 
export default MobileBanner;