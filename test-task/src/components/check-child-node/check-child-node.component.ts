import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { ITreeNodeInterface } from '../../interfaces/tree-node.interface';

@Component({
  selector: 'app-check-child-node',
  imports: [CommonModule],
  templateUrl: './check-child-node.component.html',
  styleUrl: './check-child-node.component.scss',
})
export class CheckChildNodeComponent {
  idNode = input.required<ITreeNodeInterface>();

  @Output() showNodes = new EventEmitter();

  protected readonly openChildrens = signal(false);
  protected readonly buttonSymbol = computed(() => {
    if (this.openChildrens()) {
      return '&darr;';
    }
    return '&uarr;';
  });

  protected showChildrens() {
    this.openChildrens.set(!this.openChildrens());
    this.showNodes.emit();
  }
}
