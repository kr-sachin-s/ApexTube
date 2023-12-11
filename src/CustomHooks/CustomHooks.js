import React from "react";
import { useLocation } from "react-router-dom";

const useClickOutside = (handler) => {
  const domNode = React.useRef();

  React.useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
const useInput = (state) => {
  const [inputState, setInputState] = React.useState(state);
  const inputUpdate = (e) => {
    const inpValue = e.target.value;
    setInputState({
      ...inputState,
      [e.target.name]: inpValue,
    });
  };
  return { inputState, inputUpdate, setInputState };
};

function useScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useClickOutside, useInput, useScrollToTop, useLocalStorageState };
