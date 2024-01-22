import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Default works!</p>`,
  styleUrl: './Default.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent { }
