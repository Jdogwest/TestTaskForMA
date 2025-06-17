import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { ITreeNodeInterface } from '../../interfaces/tree-node.interface';
import { CheckChildNodeComponent } from '../check-child-node/check-child-node.component';
import { IdNodeComponent } from '../id-node/id-node.component';

@Component({
  selector: 'app-node',
  imports: [CommonModule, CheckChildNodeComponent, IdNodeComponent],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  readonly node = input.required<ITreeNodeInterface>();
  readonly checkChildrens = input<boolean>(false);

  protected readonly openChildrens = signal(false);
  protected readonly buttonSymbol = computed(() => {
    if (this.openChildrens()) {
      return '&darr;';
    }
    return '&uarr;';
  });

  protected showChildrens() {
    this.openChildrens.set(!this.openChildrens());
  }
}
