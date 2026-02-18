import { InterviewSlot } from './../../../model/interviewSlot.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SlotsModel {

  constructor( private http: HttpClient ){}

  private intervieSlots: InterviewSlot[] = [];

  getAllSlots(){
    return this.http.get(API_ENDPOINTS.slot.getAll);
  }



}
