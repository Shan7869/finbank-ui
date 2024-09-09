import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule if not already


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Ensure HttpClientModule is provided here
    importProvidersFrom(BrowserAnimationsModule), // For Angular Material
    importProvidersFrom(MatInputModule),
    importProvidersFrom(MatFormFieldModule),
    importProvidersFrom(MatButtonModule),
     provideAnimationsAsync('noop')],
  }).catch((err) => console.error(err));