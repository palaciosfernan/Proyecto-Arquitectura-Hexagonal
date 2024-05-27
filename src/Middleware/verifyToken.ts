import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = 'tu_secreto_jwt';

// Define una interfaz que extienda el tipo de Request de Express para incluir la propiedad 'user'
declare global {
    namespace Express {
        interface Request {
            user?: any; // Puedes especificar un tipo más preciso si lo deseas
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: "Token no proporcionado" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Agregar el usuario decodificado al objeto de solicitud
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token no válido" });
    }
};
