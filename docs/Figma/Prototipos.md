# Prototipos del Proyecto

## Información del Documento

**Última actualización:** [DD/MM/YYYY]  
**Versión del prototipo:** [v1.0]  
**Herramienta:** Figma  

---

## Propósito del Prototipo

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes de desarrollar
- Alinear la **visión del producto** entre todos los miembros del equipo
- Servir como **referencia visual** durante el desarrollo backend y frontend
- Documentar las **decisiones de diseño** tomadas en cada sprint

---

## Enlaces Principales

### Proyecto Principal
**URL:** [https://www.figma.com/design/X3NGs5hqNILk9QBYvfG7ix/POKE-STORE?node-id=0-1&p=f&t=x10b2xHxKnUpiy1m-0](URL_COMPLETA_DE_FIGMA)

---

## Estructura del Prototipo

### Sistema de Diseño

**Paleta de colores:**
- **Color primario:** #EA4335- Acciones principales
- **Color secundario:** #FFFFFF - Elementos complementarios
- **Color de acento:** #808080 - Llamadas a la acción
- **Colores de estado:**
  - Éxito: #44FF00
  - Error: #D34242
  - Advertencia: #FFFF00
  - Info: #000000

**Tipografía:**
- **Principal:** [INTER] - Textos y contenido
- **Títulos:** [ITIM] - Encabezados


**Espaciado:**
- Sistema de **8px grid**
- Espaciado base: 50PX , 75 PX, 60PX

---

## Pantallas incluidas:**
### Flujo Principal
1. **Página de bienvenida**
 <img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\INICIO.png>

2. **Formulario de registro**
<img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\login .png >  

3. *catalogo*
 <img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\FIGURAS.png>

4. *info de producto*

<img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\detalles.png>

5. *carrito*

<img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\CARIITO.png>

6. *metodo de pago*

<img *C:\Users\ALUMNO\proyecto-301\docs\Figma\PANTALLAS\pago.png>
   

**Interacciones prototipadas:**
- Navegación entre pantallas
- Validación de formularios
- Mensajes de error/éxito
- metodo de compraa
- info de producto
- filtrado de categorias


## 🧩 Componentes Reutilizables


**Componentes diseñados:**

#### Botones
- **Primario:*2* Acciones principales (guardar, enviar)
- **Secundario:*2* Acciones secundarias (cancelar, volver)
- **Terciario:*1* Acciones terciarias (enlaces, texto)
- **Estados:** Default, hover, active, disabled, loading

#### Formularios
- **Input text:** Entrada de texto estándar
- **Input password:** Con toggle de visibilidad
- **Select dropdown:*1* Con búsqueda
- **Checkbox:** Individual y grupos
- **Radio buttons:*6* Opciones excluyentes
- **Date picker:** Selección de fechas
- **File upload:** Carga de archivos

#### Navegación
- **Navbar:*1* Barra superior de navegación
- **Sidebar:*1* Menú lateral colapsable
- **Tabs:*1* Pestañas para contenido
- **Pagination:** Paginación de listas

#### Feedback
- **Toast notifications:** Mensajes temporales
- **Modals:** Ventanas emergentes
- **Alerts:*2* Avisos en contexto
- **Loading spinners:** Indicadores de carga
- **Progress bars:** Barras de progreso

#### Visualización de datos
- **Cards:*1* Tarjetas de información
- **Tables:** Tablas de datos
- **Charts:** Gráficos (si aplica)
- **Stats cards:** Tarjetas de estadísticas

---

### Responsive Design

**Breakpoints definidos:**
- **Mobile:** 440px - 956px
- **Desktop:** 1440px - 1024px

### Accesibilidad

**Criterios implementados:**
- Contraste de colores según WCAG 2.1 AA
- Textos alternativos para imágenes
- Navegación por teclado
- Estados de foco visibles
- Jerarquía semántica de encabezados



## 📋 Checklist de Implementación

### Para el Equipo de Desarrollo

**Antes de comenzar un sprint:**
- [ ] Revisar el prototipo de Figma correspondiente al sprint
- [ ] Identificar todos los componentes necesarios
- [ ] Validar los endpoints de backend requeridos
- [ ] Confirmar las historias de usuario vinculadas

**Durante el desarrollo:**
- [ ] Consultar especificaciones de diseño (colores, tipografía, espaciado)
- [ ] Implementar estados de los componentes (hover, active, disabled)
- [ ] Validar responsive design en todos los breakpoints
- [ ] Solicitar feedback del diseñador si hay dudas

**Al finalizar:**
- [ ] Comparar implementación con el prototipo
- [ ] Actualizar este documento con notas de implementación
- [ ] Marcar las pantallas como completadas

---

## 🎨 Assets y Recursos

### Imágenes y Gráficos

**Ubicación:** `src/frontend/assets/images/`

**Assets exportados de Figma:**
- Logotipo (SVG, PNG)
- Iconos personalizados (SVG)
- Imágenes de placeholder (PNG, WebP)
- Ilustraciones (SVG)

**Convención de nombres:**
```
[tipo]-[descripcion]-[tamaño].[extension]

Ejemplos:
icon-user-24px.svg
logo-primary-full.svg
img-hero-1920x1080.webp
illus-empty-state.svg
```


### Preguntas Frecuentes

**P: ¿Dónde encuentro las medidas exactas de espaciado?**  
R: En Figma, selecciona cualquier elemento y revisa el panel de propiedades. Todos los espaciados siguen el sistema de 8px grid.

**P: ¿Puedo modificar un componente para un caso específico?**  
R: Consulta primero con el equipo. Si es un caso único, crea una variante. Si es recurrente, actualiza el componente base en Figma.

**P: ¿Cómo exporto assets de Figma?**  
R: Selecciona el elemento → Export → Configura formato y resolución → Export [nombre].

---

## Contacto y Soporte

**Responsable de diseño:** [jack lewis]  
**Canal de comunicación:** [Slack, Discord, etc.]  
**Horario de disponibilidad:** [Especificar]

**Para dudas sobre el prototipo:**
1. Revisar este documento primero
2. Consultar directamente en Figma (comentarios)
3. Preguntar en el canal del equipo
4. Agendar sesión de revisión de diseño

---

## 🔗 Referencias Útiles

**Documentación relacionada:**
- `README.md` - Información general del proyecto
- `docs/sprint-planning/` - Planificación de sprints
- `CONTRIBUTING.md` - Guía de contribución
- `docs/retrospectivas/` - Aprendizajes de los sprints

**Recursos externos:**
- [Guía de Figma](https://help.figma.com)
- [Material Design Guidelines](https://m3.material.io)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)

---

**Última actualización:** [Fecha]  
**Mantenido por:** [Equipo de diseño/Product Owner]  
**Versión del documento:** 1.0