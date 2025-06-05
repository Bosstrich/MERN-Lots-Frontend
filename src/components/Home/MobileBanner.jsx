import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";
import { useMediaQuery } from "../../hooks/useMediaQuery";


const MobileBanner = () => {

    const isMobile = useMediaQuery("(max-width: 726px)");

    return ( 
        <section>
            <div className="text-center lg:flex items-center justify-center gap-10 py-16 padding-x ">
                <div>
                    <h2 className="text-2xl text-blue-800 font-semibold">Receive oracles from GOD, anytime, anywhere!</h2>
                    <p className="text-gray-500 mb-4">Seek guidance from the one true almighty GOD. Download the App today!</p>
                </div>
                <div className="flex justify-center mb-4">
                  <ButtonsContainer direction={isMobile ? 'column' : 'row'}  gap={15}>
                      <GooglePlayButton
                          theme={'light'}
                      />
                      <AppStoreButton
                          theme={'light'}
                      />
                  </ButtonsContainer>
                </div>
            </div>
        </section>
     );
}
 
export default MobileBanner;