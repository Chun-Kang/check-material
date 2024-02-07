import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent { }
