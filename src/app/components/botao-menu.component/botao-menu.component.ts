import {ChangeDetectionStrategy, Component, Input, input, OnInit} from "@angular/core";

@Component({
  selector: 'app-botao-menu',
  standalone: true,
  imports: [],
  templateUrl: './botao-menu.components.html',
  styleUrl: './botao-menu.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  nome = input
  
  ngOnInit(): void {

  }
}