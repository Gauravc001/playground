import { sandboxOf } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar.component';
import { EuSidebarModule } from 'eu-library';
import { ButtonModule } from 'primeng/button';

const sandboxConfig = {
  declarations: [SidebarComponent],
  imports: [ButtonModule, BrowserAnimationsModule, EuSidebarModule],
};

export default sandboxOf(SidebarComponent, sandboxConfig)
  .add('left', {
    template: `<app-sidebar [position]="'left'" [icon]="'pi-arrow-right'"></app-sidebar>`
  }).add('right', {
    template: `<app-sidebar [position]="'right'" [icon]="'pi-arrow-left'"></app-sidebar>`
  }).add('top', {
    template: `<app-sidebar [position]="'top'" [icon]="'pi-arrow-down'"></app-sidebar>`
  }).add('bottom', {
    template: `<app-sidebar [position]="'bottom'" [icon]="'pi-arrow-up'"></app-sidebar>`
  });
