import React, { SyntheticEvent } from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";


type Handler = (event: MouseEvent) => void

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, handler: Handler, parent?: any) {
	useEffect(
		() => {
			const listener = (event: MouseEvent) => {
				const el = ref?.current;
				if (!el || el.contains((event?.target as Node) || null)) {
					return;
				}
				handler(event);
			};
			document.addEventListener("mousedown", listener);
			return () => {
				document.removeEventListener(
					"mousedown",
					listener
				);
			};
		},

		[ref, handler, parent]
	);
}
