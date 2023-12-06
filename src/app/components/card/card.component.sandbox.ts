import { sandboxOf } from 'angular-playground';
import { CardComponent } from './card.component';
import { EuCardModule } from 'eu-library';

const sandboxConfig = {
  declarations: [CardComponent],
  imports: [EuCardModule],
};

export default sandboxOf(CardComponent, sandboxConfig)
  .add('default', {
    template: `<app-card [header]="'Card header'"></app-card>`
  }).add('advanced', {
    template: `<app-card [header]="'Card header'" [subHeader]="'Card sub header'" [advanced]="true"></app-card>`
  });
