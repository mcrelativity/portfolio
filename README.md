# Emiliano Gómez · Liquid Glass

Portafolio personal estático, bilingüe (ES/EN), con modos claro y oscuro. Conserva los proyectos, tecnologías, certificaciones y contactos del portafolio original. Sin dependencias de ejecución, fuentes externas, servicios pagos ni backend.

## Desarrollo

Requiere Node.js 22 o superior.

```sh
npm run dev
npm run build
npm run preview
```

La compilación copia únicamente los archivos públicos necesarios a `dist/`. Los archivos y generadores de la versión anterior permanecen en Git, fuera del directorio publicado.

## Vercel

Proyecto: `emiliano-liquid-glass`. Sitio: https://emiliano-liquid-glass.vercel.app. Repositorio: `mcrelativity/portfolio`, rama `liquid-glass`. Framework: **Other**. Build: `npm run build`. Output: `dist`. `vercel.json` configura estos valores y los encabezados HTTP. No se necesitan variables de entorno.

El portafolio personal está publicado con Vercel Hobby, sujeto a sus límites de uso. El proyecto nuevo conserva el despliegue anterior. La versión final de `liquid-glass` se promovió explícitamente a producción. Los nuevos pushes a esta rama generan previews automáticamente; para publicarlos, usar **Promote to Production** en Vercel. Si se desea publicación automática en la URL principal, configurar `liquid-glass` como rama de producción en los ajustes del entorno Production de este proyecto.

## Contenido y accesibilidad

- Contenido español en `index.html`; traducciones inglesas en `js/app.js`. El selector guarda la preferencia; `?lang=es` y `?lang=en` permiten seleccionar idioma mediante URL.
- Estilos en `css/liquid-glass.css`. Preferencias de movimiento y transparencia reducidos, navegación por teclado, enlace para saltar al contenido y menú móvil accesible.
- Fotografías y credenciales originales optimizadas localmente en WebP. Las ilustraciones de proyectos son composiciones CSS, no capturas de las aplicaciones.
- Contacto por `mailto:`; copiar email muestra una alternativa si el navegador no permite acceder al portapapeles.
- Al no existir CV ni fechas verificadas de experiencia en la página original, no se añaden esos datos.

## Verificación

Ejecutar la compilación y revisar las resoluciones móvil, tablet y escritorio, ambos idiomas, ambos temas, enlaces internos, menú móvil, portapapeles y consola del navegador antes de publicar.
