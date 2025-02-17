import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function useScrollToTop(isSmooth) {
    const location = useLocation()
    useEffect(() => {
        const ScrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: isSmooth ? "smooth" : "auto"
            })
        }
        ScrollTop()
    }, [location.pathname, isSmooth])
}