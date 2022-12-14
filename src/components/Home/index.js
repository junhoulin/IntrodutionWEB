import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'J', 'u', 'n', ' ', 'h', 'o', 'u', ' ', 'l', 'i', 'n']
    const jobArray = [
        'M',
        'y',
        ' ',
        'i',
        'n',
        't',
        'r',
        'o',
        'd',
        'u',
        'c',
        't',
        'i',
        'o',
        'n',
    ]

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={20}
                        />
                    </h1>
                    <h2>Department of Economics, Tunghai University</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader type="pacman" />
        </>
    )

}





export default Home