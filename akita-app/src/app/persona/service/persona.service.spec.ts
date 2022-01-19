import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { PersonaService } from './persona.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                ReactiveFormsModule],
      providers: [PersonaService],
    });
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPersona() function', () => {
    expect(service.getPersona).toBeTruthy();
  });

  it('should have removePersona() function', () => {
    expect(service.removePersona).toBeTruthy();
  });
});
