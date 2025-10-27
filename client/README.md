# 🌱 Baldosa Inteligente para Micro-Generación y Monitoreo Energético





Este proyecto propone el **diseño y prototipado de una baldosa piezoeléctrica** capaz de generar energía limpia a partir de las pisadas en espacios de alto tráfico. La iniciativa busca transformar una acción cotidiana como caminar en una **fuente de energía renovable**, combinando generación eléctrica con **monitoreo en tiempo real** y aplicaciones educativas en el marco de las **ciudades inteligentes**.





---





## ⚡ Objetivo del Proyecto


Desarrollar e implementar un **prototipo piloto** que:


- Convierta la energía mecánica de las pisadas en **electricidad utilizable**.


- Permita **almacenar y gestionar energía** para alimentar cargas de baja potencia (LEDs, sensores, puertos USB de emergencia).


- Ofrezca **telemetría en tiempo real** (conteo de pisadas, energía acumulada, estado del sistema).


- Sirva como herramienta de **concientización ambiental** y demostración tecnológica en espacios públicos.





---





## 🔧 Arquitectura del Sistema





- **Entrada (Piezoeléctrico):** capta la energía mecánica de las pisadas → señales AC.  


- **Gestión de Energía:** rectificación, filtrado y conversión mediante PMIC → almacenamiento en supercondensador/batería.  


- **Unidad de Control (ESP32):**  


  - Medición de variables eléctricas (voltaje, corriente).  


  - Conteo de pisadas y procesamiento de datos.  


  - Comunicación inalámbrica (Wi-Fi / BLE).  


- **Sensores adicionales:** posibilidad de integrar temperatura, humedad u otros.  


- **Salidas:** LEDs indicadores y puerto USB de baja potencia.  





---





## 📊 Entradas y Salidas del Sistema


### Entradas


- **Pisadas humanas:** fuerza/impulso sobre la superficie.  


- **Señales eléctricas:** pulsos AC de piezoeléctricos, alimentación al microcontrolador.  


- **Operativas:** botón de cambio de fase.  





### Salidas


- **Energía utilizable:** alimentación puntual de LEDs, sensores o USB de emergencia.  


- **Datos y telemetría:** número de pisadas, energía generada/acumulada, estado del sistema.  





---





## 🏗️ Restricciones Tecnológicas


- **Portabilidad:** baldosa modular de 30×30 cm.  


- **Energía:** generación intermitente y baja potencia → necesidad de electrónica eficiente.  


- **Robustez:** encapsulado IP contra humedad/polvo, resistencia mecánica y vandalismo.  


- **Eficiencia:** pérdidas en rectificación y conversión.  


- **Seguridad:** aislamiento eléctrico para evitar riesgos al usuario.  


- **Coste y mantenimiento:** balance entre durabilidad y reemplazos periódicos.  


- **Escalabilidad:** integración en redes de múltiples baldosas.  





---





## 🚀 Carta de Oportunidad


El proyecto ofrece un **doble impacto**:


1. **Energético:** micro-generación para cargas de baja potencia en parques y espacios públicos.  


2. **Social:** sensibilización sobre energías renovables y datos de tránsito peatonal para gestión urbana.  





### Segmento de mercado objetivo


- Gobiernos locales.  


- Administraciones de parques y universidades.  


- Centros recreativos y proyectos de sostenibilidad.  





### Estrategia competitiva


- **Diferenciación por innovación:** interacción directa usuario–energía (cada paso genera electricidad).  


- **Aplicación educativa y social:** visibilidad inmediata del impacto de la energía renovable.  





---





## 🏆 Comparación con otras oportunidades


- **Baldosas piezoeléctricas (nuestro proyecto):**  


  - Alta visibilidad, escalable y novedoso en el contexto local.  


- **Bancos solares urbanos:** tecnología consolidada, pero menos innovadora.  


- **Paraderos energéticos:** útiles, pero de mayor costo e intervención estructural.  





👉 El prototipo de baldosa destaca por su **escala controlable**, **impacto directo en el usuario** y su rol como **innovación emergente**.  





---





## 🌍 Misión del Proyecto


Validar la **viabilidad técnica y social** de una baldosa piezoeléctrica modular para espacios públicos, demostrando que **cada paso puede transformarse en una acción directa hacia un futuro más limpio y consciente**.  





---





## 👥 Autores


- Juan Sebastián Hernández  


- Juan Diego Rodríguez  


- José David Álvarez  





---





## 📌 Estado del Proyecto


🔬 **Etapa:** Prototipo piloto (MVP)  


📍 **Lugar de implementación:** Parques públicos y espacios recreativos  


🎯 **Enfoque:** Innovación, sostenibilidad y educación ambiental
