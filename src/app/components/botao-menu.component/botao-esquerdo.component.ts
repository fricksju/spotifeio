import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-painel-esquerdo',
  standalone: true,
  imports: [],
  templateUrl: './botao-esquerdo.components.html',
  styleUrl: './botao-esquerdo.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  ngOnInit(): void {

  }
}