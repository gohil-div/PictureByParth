import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/layout/Reveal.tsx
function Reveal({ children, className, delayMs = 0, y = 32 }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .2,
			rootMargin: "0px 0px -10% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : `translateY(${y}px)`,
			transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
			willChange: "opacity, transform"
		},
		children
	});
}
//#endregion
export { Reveal as t };
