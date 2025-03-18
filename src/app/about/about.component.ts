import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MultiLanguageService } from '../shared/multi-language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  selectedLanguage = 'es'; 
  constructor(private readonly languageService: MultiLanguageService) {}

  ngOnInit(): void {
    
  }


}
