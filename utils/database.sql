CREATE DATABASE IF NOT EXISTS   SocialNetwork;

use SocialNetwork;

CREATE Table Users  (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    avatar VARCHAR(200),
    intereses SET('programar', 'hacer ejercicio', 'correr','jugar videojuegos' ) NULL,
    carrera ENUM('ingeniera en software', 'ingenieria petrolera', 'ingenieria ambiental', 'ingenieria mecatronica') NULL,
    estado ENUM('Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas') NOT NULL DEFAULT 'Ciudad de México', 
    grupo CHAR(10) NULL,
    edad SMALLINT UNSIGNED NULL,
    rol ENUM('estudiante', 'docente') NOT NULL DEFAULT 'docente'
);

/* tabla pivote de publicacion*/
CREATE TABLE Publicacion (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    contenido TEXT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES User(id)
);


/* tabla pivote de las reacciones*/
CREATE TABLE Reaction (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    id_publicacion BIGINT NOT NULL,
    post BIGINT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES User(id),
    FOREIGN KEY (id_publicacion) REFERENCES Publicacion(id)
);


/* tabla  de las evento*/
CREATE TABLE Event (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    nombre_evento VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES User(id)
);
