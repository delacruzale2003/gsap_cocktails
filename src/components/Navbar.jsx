import React, { useEffect } from 'react'
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin es importante
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(() => {
        gsap.to('nav', {
            // Usamos tu color B17457 con un poco de transparencia (opcional)
            // Si lo quieres sólido, usa simplemente '#B17457'
            backgroundColor: '#B17457CC', 
            backdropFilter: 'blur(10px)',
            duration: 0.5,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "nav",
                start: 'top top', // Empieza apenas la nav toca el tope
                end: '+=100',     // Termina la transición tras 100px de scroll
                scrub: true,      // Hace que la transición sea fluida con el scroll
            }
        });
    });

    return (
        // Quitamos 'bg-dark' de las clases de Bootstrap para que no interfiera con GSAP
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-4 transition-colors">
            <div className="container mx-auto flex items-center justify-between">
                <a href="home" className="flex items-center gap-2 text-white no-underline">
                    <img src="/images/logo.png" alt="logo" width={25}/>
                    <p className="font-bold m-0">Velvet Bean</p>
                </a>

                <ul className="flex gap-6 list-none m-0">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-white no-underline hover:opacity-70">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar