import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Users from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { Auth, updateProfile,  createUserWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { getAuth,onAuthStateChanged , signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root',

})
export class UsersService {
  currentUser: string | null = ''
  currentNameUser: string = '';
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
  async register( email:string, password:string, name:string ) {
    this.currentNameUser = name;
    const resp = await createUserWithEmailAndPassword(this.auth, email, password);
    this.postProfile()

    return resp;
  }

  login( email: string , password: string ){
    return signInWithEmailAndPassword( this.auth, email, password );
  }

  checkAuth() {
    return getAuth().currentUser?.uid
  }

  logout() {
    return signOut( this.auth );
  }

  postProfile(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if(user){
        updateProfile(user, { displayName: this.currentNameUser, photoURL: 'https:'})      
      } 
    })
  
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
