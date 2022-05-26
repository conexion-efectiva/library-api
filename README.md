API para una biblioteca, hecho con nodejs
==========================================

## Glosario

- Book: El libro de la biblioteca que se va a prestar
    - bookId: Id del libro
    - title: Titulo del libro
    - author: Autor del libro
    - Genre: Género del libro (por ej: ficción)
    - Language: Idioma del libro (por ej: Español
- Author: El autor de los libros
    - authorId: Id del autor
    - name: Nombre del autor
    - country: País del autor
- Lending: Representa el prestamo de un libro.
    - lendingId: Id del prestamo
    - book: Libro que se presta
    - startDate: Fecha de inicio del prestamo
    - endDate: Fecha de fin del prestamo