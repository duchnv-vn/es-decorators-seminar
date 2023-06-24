import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { concatMap, from } from 'rxjs';

const PORT = 3000;

from(NestFactory.create(AppModule))
  .pipe(concatMap((app) => app.listen(PORT)))
  .subscribe({
    next: () => {
      console.log('------------------------');
      console.log(`App is listening on PORT: ${PORT}`);
      console.log('------------------------');
    },
  });
