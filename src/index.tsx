import ReactDOM from "react-dom/client";
import App from "./container/App";
import { createContext } from "react";
import UserStore from "./store/UserStore";
import { IDeviceStoreType, IUserStoreType } from "./utils/types";
import DeviceStore from "./store/DeviceStore";

interface ContextProps {
  user: IUserStoreType;
  device: IDeviceStoreType;
}

export const Context = createContext<ContextProps | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context.Provider
    value={
      {
        user: new UserStore(),
        device: new DeviceStore(),
      } as ContextProps
    }
  >
    <App />
  </Context.Provider>
);
