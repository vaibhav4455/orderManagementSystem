import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Addorder } from '../../models/addorder';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  
  api: string = '/api/addorder'
  router: any;

  constructor(private httpClient: HttpClient) { }
  
  
  ngOnInit(): void {
  }
  
  }


