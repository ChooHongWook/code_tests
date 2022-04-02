// v6 페이지 이탈 시 경고창 띄우는 로직
// Blocker.js
import { useContext, useEffect, useCallback } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

export function useBlocker(blocker: any, when = true) {
  const { navigator } = useContext(NavigationContext);
  console.log("navigator:", navigator);
  useEffect(() => {
    if (!when) return;

    // const unblock = navigator.block((tx: any) => {
    //   const autoUnblockingTx = {
    //     ...tx,
    //     retry() {
    //       unblock();
    //       tx.retry();
    //     },
    //   };
    //   blocker(autoUnblockingTx);
    // });
    // return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message: any, when = true) {
  const blocker = useCallback(
    (tx) => {
      //   eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when);
}
