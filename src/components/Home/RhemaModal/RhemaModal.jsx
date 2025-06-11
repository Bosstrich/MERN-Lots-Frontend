// Import Swiper React components

import Modal from "../../../common/Modal";
import RhemaSwiper from "./RhemaSwiper";
import { IoIosCloseCircle } from "react-icons/io";
import { Player } from "@lottiefiles/react-lottie-player";
import useModal from "../../../hooks/useModal";
import { useModalContext } from "../../../hooks/useModalContext";
import { diceAnim } from "../../../assets";

const RhemaModal = ({rhemas, loading}) => {

  const {isVisible, modalType, closeModal} = useModal();
  //     const sampleRhema = `
  //     Why do you call me 'LORD, LORD', and do not do what I tell you?

  //  Put into practice the words that I have spoken, like a man who built his house and laid its foundation on the rock. The flood rose, and the store broke against the house, but it could not shake it.'
  //     `
  return (
    <Modal showModal={isVisible && modalType === 'rhema'}>
      {loading ? (
        <>
          <div className="flex items-center justify-center rounded-lg">
            <Player
              autoplay
              loop
              src={diceAnim}
              style={{ height: "100px", width: "100px" }}
            />
            <p className="text-white mt-5">Casting Lots...</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-secondary/90 rounded-lg w-full p-3 flex justify-between items-center mx-auto">
            <h1 className="text-white text-md sm:text-xl sm:pl-3">
              My Child, here's my Rhema for you
            </h1>
            <div
              className="text-2xl sm:text-3xl cursor-pointer text-white font-bold right-5 top-5"
              onClick={closeModal}
            >
              <IoIosCloseCircle />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
              Learn more about us
            </div>
          </div>
          <RhemaSwiper rhemas={rhemas} />
        </>
      )}
    </Modal>
  );
};

export default RhemaModal;
