## **Notas del curso de Angular 17:**

- Para generar un proyecto:

```jsx
ng new project-name
```

- Para crear un servicio

```jsx
ng generate service services/service
```

- Para crear un componente

```jsx
ng generate component home
```

- Para ejecutar server:

```jsx
ng serve
```

- Para el manejo de rutas:
    - Desde el archivo **app.routes.ts,** siguiendo la estructura:
    
    ```jsx
    import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    
    export const routes: Routes = [
      {
        path: 'home',
        component: HomeComponent,
      },
    ];
    
    ```
    
- **TypeScript**: Interfaces
    
    Una interfaz es una estructura que define la forma de un objeto, especificando los tipos de sus propiedades y métodos, pero sin proporcionar una implementación concreta. Las interfaces son una forma poderosa de establecer contratos en tu código, lo que ayuda a garantizar que los objetos cumplan con **ciertos requisitos predefinidos**.
    
    **Ejemplo:**
