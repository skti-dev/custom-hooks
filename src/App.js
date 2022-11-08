// 01 - How to create custom hooks

// import useLocalStorage from "./useLocalStorage";
// import useUpdateLogger from "./useUpdateLogger";

// function App() {
//   const [name, setName] = useLocalStorage('name', '')
//   useUpdateLogger(name)

//   return (
//     <input 
//       type="text"
//       value={name}
//       onChange={e => setName(e.target.value)}
//     />
//   );
// }

// 02 - Custom Hooks #1: useToggle, useTimeout, useDebounce, useUpdateEffect, useArray
// import ToggleComponent from "./1-useToggle/ToggleComponent";
// import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
// import { DebounceComponent } from "./3-useDebounce/DebounceComponent";
// import UpdateEffectComponent from "./4-useUpdateEffect/UpdateEffectComponent";
// import ArrayComponent from "./5-useArray/ArrayComponent";
// import PreviousComponent from "./6-usePrevious/PreviousComponent";
// import StateWithHistoryComponent from "./7-useStateWithHistory/StateWithHistoryComponent";
// import StorageComponent from "./8-useStorage/StorageComponent";
// import AsyncComponent from "./9-useAsync/AsyncComponent";
// import FetchComponent from "./10-useFetch/FetchComponent";
// import ScriptComponent from "./11-useScript/ScriptComponent";
// import DeepCompareEffectComponent from "./12-useDeepCompareEffect/DeepCompareEffectComponent";
// import EventListenerComponent from "./13-useEventListener/EventListenerComponent";
// import OnScreenComponent from "./14-useOnScreen/OnScreenComponent";
// import WindowSizeComponent from "./15-useWindowSize/WindowSizeComponent";
// import MediaQueryComponent from "./16-useMediaQuery/MediaQueryComponent";
// import GeolocationComponent from "./17-useGeolocation/GeolocationComponent";
// import StateWithValidationComponent from "./18-useStateWithValidation/StateWithValidationComponent";
// import SizeComponent from "./19-useSize/SizeComponent";
// import EffectOnceComponent from "./20-useEffectOnce/EffectOnceComponent"; // didn't work
// import ClickOutsideComponent from "./21-useClickOutside/ClickOutsideComponent"; // didn't work
// import DarkModeComponent from "./22-useDarkMode/DarkModeComponent";
// import CopyToClipboardComponent from "./23-useCopyToClipboard/CopyToClipboardComponent";
// import CookieComponent from "./24-useCookie/CookieComponent";
// import TranslationComponent from "./25-useTranslation/TranslationComponent";
// import OnlineStatusComponent from "./26-useOnlineStatus/OnlineStatusComponent";
// import RenderCountComponent from "./27-useRenderCount/RenderCountComponent";
// import DebugInformationComponent from "./28-useDebugInformation/DebugInformationComponent";
// import HoverComponent from "./29-useHover/HoverComponent";
import LongPressComponent from "./30-useLongPress/LongPressComponent";

function App() {
  return (
    <>
      {/* <ToggleComponent /> */}
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      {/* <UpdateEffectComponent /> */}
      {/* <ArrayComponent /> */}
      {/* <PreviousComponent /> */}
      {/* <StateWithHistoryComponent /> */}
      {/* <StorageComponent /> */}
      {/* <AsyncComponent /> */}
      {/* <FetchComponent /> */}
      {/* <ScriptComponent /> */}
      {/* <DeepCompareEffectComponent /> */}
      {/* <EventListenerComponent /> */}
      {/* <OnScreenComponent /> */}
      {/* <WindowSizeComponent /> */}
      {/* <MediaQueryComponent /> */}
      {/* <GeolocationComponent /> */}
      {/* <StateWithValidationComponent /> */}
      {/* <SizeComponent /> */}
      {/* <EffectOnceComponent /> */} {/* didn't work*/}
      {/* <ClickOutsideComponent /> */} {/* didn't work*/}
      {/* <DarkModeComponent /> */}
      {/* <CopyToClipboardComponent /> */}
      {/* <CookieComponent /> */}
      {/* <TranslationComponent /> */}
      {/* <OnlineStatusComponent /> */}
      {/* <RenderCountComponent /> */}
      {/* <DebugInformationComponent /> */}
      {/* <HoverComponent /> */}
      <LongPressComponent />
    </>
  )  
}

export default App;