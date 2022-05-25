import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Users from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { getAuth,onAuthStateChanged , signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: string | null = ''
  constructor( private firestore: Firestore, private auth: Auth ) {
    this.currentUser = localStorage.getItem('token')!
  }
  

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

  checkStateAuth(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if(user){
        localStorage.setItem('token', user.email!)
        this.currentUser = user.email
        
      } else {
        localStorage.removeItem('token')
        this.currentUser = null
      }
    })
  }
  
  
}
