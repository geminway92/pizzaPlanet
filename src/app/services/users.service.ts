import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Users from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private firestore: Firestore, private auth: Auth ) { }

  // Firestore
  addUser( user: Users){
    const userRef = collection( this.firestore, 'employees' );
    return addDoc( userRef, user )
  }

  getUser(): Observable<Users[]>{
    const userRef = collection( this.firestore, 'employees' );
    return collectionData(userRef, { idField: 'id' }) as Observable<Users[]>
  }

  // Auth
  register( {email, password }: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login( {email, password }: any ){
    return signInWithEmailAndPassword( this.auth, email, password );
  }

  checkAuth() {
    return getAuth().currentUser
  }

  logout() {
    return signOut( this.auth );
  }
  
  
}
