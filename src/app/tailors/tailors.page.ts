import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-tailors',
  templateUrl: './tailors.page.html',
  styleUrls: ['./tailors.page.scss'],
})
export class TailorsPage implements OnInit {
  users : any;
  users$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  
  constructor() {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData<any>(usersCollection);
    this.users$.subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

  ngOnInit() {
  }

}
