import { Component } from '@angular/core';
import { NodeComponent } from '../components/node/node.component';
import { treeNodes } from '../constants/initial-data';

@Component({
  selector: 'app-root',
  imports: [NodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data = treeNodes;
}
