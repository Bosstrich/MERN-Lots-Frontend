import { useEffect, useRef, useState } from "react";
import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;
console.log("Backend uri: " + backendURL);

//custom Hooks:
import useLocalStorage from "../../hooks/useLocalStorage";

//Components
import Button from "../Button";

const ButtonRange = ({ handleModalOpen, setRhemas, setLoading }) => {
  const [rhemaCount, setRhemaCount] = useLocalStorage("rhemaCount", 1);
  const [cache, setCache] = useLocalStorage("rhemaCache", {});

  useEffect(() => {
    // Pre-fetch 1 rhema when component mounts
    axios
      .get(`${backendURL}/api/rhemas/random`, {
        params: { size: 1 },
        timeout: 10000,
      })
      .then((response) => {
        //
      })
      .catch(console.error);
  }, []);

  const grabRhema = () => {
    setLoading(true);
    handleModalOpen();

    axios
      .get(`${backendURL}/api/rhemas/random`, {
        params: {
          size: rhemaCount,
        },
      })
      .then((response) => {
        if (response.data.length) {
          console.log("Random Rhemas:", response.data);
          setRhemas(response.data);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex max-sm:flex-col-reverse  max-sm:justify-center items-center mt-8 gap-3">
        <Button
          className=""
          variant="primary"
          text="Grab Rhema"
          onClick={grabRhema}
        />
        <div className="flex items-center gap-3 max-sm:pb-5">
          <label htmlFor="quoteCount" className="text-md">
            Count:
          </label>
          <input
            id="quoteCount"
            type="range"
            min="1"
            max="5"
            value={rhemaCount}
            onChange={(e) => {
              setRhemaCount(e.target.value);
            }}
            className=" accent-blue-500 cursor-pointer"
          />
          <span>{rhemaCount}</span>
        </div>
      </div>
    </>
  );
};

export default ButtonRange;
