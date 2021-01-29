import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api = "http://localhost:5555/register"

@Injectable({
  providedIn: 'root'
})
export class DataService {
saveData(data)
{
return this.httpclient.post(api,data);
}
  constructor(private httpclient:HttpClient) { }
}
