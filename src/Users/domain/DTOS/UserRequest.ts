
export interface UserRequest {
    username: string;
    password: string;
  }
  
  export  interface UserCreateRequest extends UserRequest {
    nombre: string;
    rol?: 'Gerente' | 'empleado' | null;
  }