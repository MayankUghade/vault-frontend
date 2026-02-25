// src/utils/decodeToken.ts
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  id: string;
  userName: string;
  exp: number;
};

export function decodeToken(token: string): TokenPayload {
  return jwtDecode<TokenPayload>(token);
}