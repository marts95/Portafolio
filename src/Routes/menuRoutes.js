import { Inicio } from "../components/page/inicio/Inicio.jsx";
import { Proyectos } from "../components/page/proyectos/Proyectos.jsx";
import { Sobre } from "../components/page/sobre-mi/Sobre.jsx";
import { Certificados } from "../components/page/certificados/Certificados.jsx";
import { Contacto } from "../components/page/contacto/Contacto.jsx";



export const menuRoutes = [
    {
        id: "inicio",
        path: "/",
        Element: Inicio,
    },
    {
        id: "sobre-mi",
        path: "/sobre",
        Element: Sobre,
    },
    {
        id: "proyectos",
        path: "/proyectos",
        Element: Proyectos,
    },
    {
        id: "certificados",
        path: "/certificados",
        Element: Certificados,
    },
    {
        id: "contacto",
        path: "/contacto",
        Element: Contacto,
    },
    
];