import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addZipCodeToLocalStorage(zipCode: string){
    const zipCodesLocalStorage = JSON.parse(localStorage.getItem('zipCodes')) || [];
    if (zipCode && !zipCodesLocalStorage.find(value => value === zipCode)){
      zipCodesLocalStorage.push(zipCode);
      localStorage.setItem('zipCodes', JSON.stringify(zipCodesLocalStorage));
      return true;
    }
    return false;
  }

  removeZipCodeFromLocalStorage(zipCode: string){
    const zipCodesLocalStorage = JSON.parse(localStorage.getItem('zipCodes')) || [];
    const zipCodeIndex = zipCodesLocalStorage.indexOf(zipCode);
    if (zipCodeIndex > -1){
      zipCodesLocalStorage.splice(zipCodeIndex, 1);
      localStorage.setItem('zipCodes', JSON.stringify(zipCodesLocalStorage));
      return true;
    }
    return false;
  }

  fetchZipCodesFromLocalStorage(){
    const  zipCodesFromLocalStorage = JSON.parse(localStorage.getItem('zipCodes')) || [];
    return zipCodesFromLocalStorage;
  }
}
