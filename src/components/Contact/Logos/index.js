import { useEffect, useRef } from 'react'
import gsaps from 'gsap-trial'
import LogoS from '../../../assets/images/logo-v.png'
import './index.scss'

const Logos = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsaps
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })

        gsaps.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 3,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logos-container" ref={bgRef}>
            <img
                className="solids-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />

        </div>
    )
}

export default Logos
