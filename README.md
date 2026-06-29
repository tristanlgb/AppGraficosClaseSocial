# Visualización de clases sociales

Aplicación web que transforma datos demográficos en visualizaciones fáciles de interpretar. La interfaz presenta información sobre personas y clases sociales mediante gráficos y secciones informativas responsivas.

## Funcionalidades

- Lectura de datasets locales en formato JSON.
- Visualización de datos con gráficos interactivos.
- Navegación entre inicio, información y contacto.
- Interfaz adaptable construida con componentes reutilizables.

## Stack

- React 19
- TypeScript
- Vite
- Chart.js y React Chart.js 2
- React Bootstrap y Bootstrap
- ESLint

## Organización

- `src/data/`: datasets utilizados por la aplicación.
- `src/components/Home.tsx`: contenido principal y visualizaciones.
- `src/components/NavbarApp.tsx`: navegación.
- `src/components/AboutUs.tsx` y `Contact.tsx`: secciones informativas.
- `src/App.tsx`: composición general de la página.

## Ejecución local

```bash
npm install
npm run dev
```

Abrir la dirección indicada por Vite, normalmente `http://localhost:5173`.

## Comandos

```bash
npm run build    # genera la versión de producción
npm run lint     # analiza el código
npm run preview  # previsualiza el build
```

> Proyecto educativo de visualización de datos con React y TypeScript.