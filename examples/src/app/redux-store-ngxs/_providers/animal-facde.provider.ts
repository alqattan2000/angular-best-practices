import { Provider } from '@angular/core';
import { AnimalFacade } from '../_services/facade/facade/animal.facade';
import { AnimalNgxsFacade } from '../_services/facade/facade/animal-ngxs.facade';

export const ANIMAL_FACADE_PROVIDER: Provider = {
  provide: AnimalFacade,
  useClass: AnimalNgxsFacade,
};
