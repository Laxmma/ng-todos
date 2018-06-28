import { TestBed, inject } from '@angular/core/testing';

import { EmitMessageService } from './emit-message.service';

describe('EmitMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitMessageService]
    });
  });

  it('should be created', inject([EmitMessageService], (service: EmitMessageService) => {
    expect(service).toBeTruthy();
  }));
});
