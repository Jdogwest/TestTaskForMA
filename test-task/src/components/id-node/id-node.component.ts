import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ITreeNodeInterface } from '../../interfaces/tree-node.interface';

@Component({
  selector: 'app-id-node',
  imports: [CommonModule],
  templateUrl: './id-node.component.html',
  styleUrl: './id-node.component.scss',
})
export class IdNodeComponent {
  idNode = input.required<ITreeNodeInterface>();

  protected logNode() {
    console.log('нажали на узел ID ' + this.idNode().id);
  }
}
