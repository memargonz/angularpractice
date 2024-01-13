import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { inject } from '@angular/core';
 
/* export const authGuard: CanActivateFn = (route, state) => {

  return false;
};
 */


export const authGuard: CanActivateFn = (route, state) => {

  return false;
};
