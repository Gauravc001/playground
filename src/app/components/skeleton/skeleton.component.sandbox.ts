import { sandboxOf } from 'angular-playground';
import { SkeletonComponent } from './skeleton.component';
import { EuSkeletonModule } from 'eu-library';

const sandboxConfig = {
  declarations: [SkeletonComponent],
  imports: [EuSkeletonModule],
};

export default sandboxOf(SkeletonComponent, sandboxConfig)
  .add('rectangle', {
    template: `<app-skeleton [width]="'20rem'" [height]="'4rem'" [borderRadius]="'0'"></app-skeleton>`
  }).add('rounded', {
    template: `<app-skeleton [width]="'20rem'" [height]="'4rem'" [borderRadius]="'16px'"></app-skeleton>`
  });
