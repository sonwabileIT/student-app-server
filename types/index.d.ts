import * as express from 'express';
import { SessionData } from 'express-session'

declare module 'express-session' {

  export interface SessionData {
    userID?: string,
    firstName?: string,
    lastName?: string,
    role?: string,
    email?: string,
    studentID?: string,
    studentFirstName?: string,
    studentLastName?: string
    studentEmail?: string,
    password?: string
  }

}
