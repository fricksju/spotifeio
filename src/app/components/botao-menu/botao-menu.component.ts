import {ChangeDetectionStrategy, Component, inject, input, OnInit, output} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";


@Component({
  selector: 'app-botao-menu',
  standalone: true,
  imports: [],
  templateUrl: './botao-menu.component.html',
  styleUrl: './botao-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  nome = input.required<string>();
  botaoSelecionado = input<boolean>(false);
  onClick = output();

  ngOnInit(): void {

  }
}