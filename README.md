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

Importar `mcrelativity/portfolio` y elegir la rama `liquid-glass` como rama de producción del proyecto nuevo. Framework: **Other**. Build: `npm run build`. Output: `dist`. `vercel.json` configura estos valores y los encabezados HTTP. No se necesitan variables de entorno.

El portafolio personal es compatible con Vercel Hobby, sujeto a sus límites de uso. Usar un proyecto nuevo permite conservar el despliegue anterior. Las nuevas actualizaciones a la rama de producción se despliegan automáticamente cuando el repositorio está conectado a Vercel.

## Contenido y accesibilidad

- Contenido español en `index.html`; traducciones inglesas en `js/app.js`. El selector guarda la preferencia; `?lang=es` y `?lang=en` permiten seleccionar idioma mediante URL.
- Estilos en `css/liquid-glass.css`. Preferencias de movimiento y transparencia reducidos, navegación por teclado, enlace para saltar al contenido y menú móvil accesible.
- Fotografías y credenciales originales optimizadas localmente en WebP. Las ilustraciones de proyectos son composiciones CSS, no capturas de las aplicaciones.
- Contacto por `mailto:`; copiar email muestra una alternativa si el navegador no permite acceder al portapapeles.
- Al no existir CV ni fechas verificadas de experiencia en la página original, no se añaden esos datos.

## Verificación

Ejecutar la compilación y revisar las resoluciones móvil, tablet y escritorio, ambos idiomas, ambos temas, enlaces internos, menú móvil, portapapeles y consola del navegador antes de publicar.
