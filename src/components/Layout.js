// rafce
import React, { useEffect, useRef } from 'react'

const Layout = () => {
    const textRef = useRef(null)
    const sun = useRef(null)
    const leaf = useRef(null)
    const background = useRef(null)
    const mountain1 = useRef(null)
    const mountain2 = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY

            textRef.current.style.marginTop = `${value * 2.5}px`

            sun.current.style.top = `${value * -1.5}px`
            sun.current.style.left = `${value * -1.5}px`

            leaf.current.style.top = `${value * -1.5}px`
            leaf.current.style.left = `${value * 1.5}px`

            mountain1.current.style.left = `${value * 1.5}px`
            mountain2.current.style.left = `${value * -1.5}px`
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <>
            <header>
                <h2 className='logo'>Logo</h2>
                <nav className='navigation'>
                    <a href='#' className='active'>Home</a>
                    <a href='#'>Product</a>
                    <a href='#'>Contact</a>
                    <a href='#'>About</a>
                </nav>
            </header>
            <section className='parallax'>
                <img src='/Images/background.png' ref={background} />
                <img src='/Images/mountain1.png' ref={mountain1} />
                {/* <img src='/Images/mountain1.png' /> */}
                <img src='/Images/mountain2.png' ref={mountain2} />
                <h2 className='text' ref={textRef}>รอยไถ พัฒนา</h2>
                <img src='/Images/sun.png' ref={sun} />
                <img src='/Images/leaf2.png' ref={leaf} />
                <img src='/Images/plant.png' />
            </section>

            <section className='sec'>
                <h2>Content</h2>
                <p>
                    kldjflksdjflkdslkjlIpsum eiusmod nulla esse non nisi laboris anim occaecat quis est. Commodo quis ea laboris qui voluptate reprehenderit ut aliquip. Culpa elit dolor voluptate voluptate ex officia ut sit velit sit.

                    Cillum esse ut culpa do reprehenderit commodo quis laborum laborum commodo tempor ad eiusmod. Incididunt veniam laboris dolor ad id cillum. Aute est ea ex adipisicing id do sint commodo sit cupidatat anim nostrud laboris anim.

                    Et cillum non pariatur non. Qui et minim commodo dolor tempor incididunt ut in proident. Et eiusmod pariatur duis dolore consequat. Reprehenderit commodo ut excepteur aute aliqua laborum. Est ad reprehenderit irure voluptate pariatur nostrud reprehenderit nisi amet incididunt minim. Do est qui ipsum culpa ex dolore nisi culpa incididunt irure. Eiusmod labore veniam eu ullamco occaecat non culpa duis dolor duis.

                    Mollit officia ipsum est exercitation culpa ex commodo. Irure excepteur esse tempor laboris sit nulla. Aute ex consectetur exercitation elit esse esse.

                    In enim labore nostrud voluptate. Consequat est elit proident officia velit sunt aliquip tempor laborum reprehenderit cupidatat. Irure sunt eiusmod ea reprehenderit proident eu qui exercitation laboris adipisicing. Proident aliqua et magna fugiat aute deserunt veniam adipisicing aliqua nostrud dolore. Ad ipsum culpa sunt laborum consectetur quis. Incididunt voluptate velit ex aliqua ad ut elit.

                    Commodo voluptate aliquip incididunt aute cupidatat. Incididunt eiusmod veniam qui ullamco do aute consequat laboris eiusmod excepteur. Voluptate tempor id aliqua enim qui deserunt. Sit eiusmod sint laborum commodo occaecat esse sint incididunt commodo esse pariatur laboris ut. Mollit quis esse irure labore quis aliqua proident ex labore tempor ea fugiat aliquip. Aliqua aliquip nulla deserunt ea nulla ea incididunt quis pariatur esse reprehenderit.

                    Occaecat non mollit qui pariatur officia magna tempor tempor fugiat nulla deserunt consectetur officia esse. Ipsum cupidatat quis velit ea et duis veniam. Fugiat commodo eiusmod non adipisicing dolor id nisi commodo enim veniam. Eu dolore minim adipisicing ex in fugiat exercitation.

                    Incididunt magna ea Lorem id labore Lorem. Veniam dolore nostrud anim esse ut mollit ex consequat elit elit pariatur elit. Qui id ullamco consectetur mollit. Nisi adipisicing incididunt aliqua anim nulla duis nulla.

                    Aliquip elit aliqua ut veniam ut. Velit duis voluptate duis esse velit amet sunt id incididunt magna Lorem nulla. Quis ipsum ea laboris cupidatat magna exercitation amet.

                    Et fugiat tempor eiusmod velit est adipisicing. Sint commodo pariatur reprehenderit proident deserunt irure labore quis qui nostrud amet esse consequat. Laborum laborum id Lorem cupidatat amet elit ullamco pariatur.
                </p>
            </section>
        </>
    )
}

export default Layout