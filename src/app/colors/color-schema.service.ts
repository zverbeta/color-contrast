import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ColorSchemaService {
  constructor(
    private http: HttpClient
  ) {

  }

  loadColorSchemas() {
    return this.http
      .get(`./assets/data.json`)
      .pipe(
        map((schemas) => schemas),
        catchError((error: any) => throwError(error))
      );
  }
}

