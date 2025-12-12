import * as express from 'express';
import { SessionData } from 'express-session'

declare module 'express-session' {

  export interface SessionData {
    id?: string,
    firstName?: string,
    lastName?: string,
    role?: string,
    email?: string,
    studentFirstName?: string,
    studentLastName?: string
    studentEmail?: string,
    password?: string
  }

}
