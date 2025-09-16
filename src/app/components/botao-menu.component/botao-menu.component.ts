import {ChangeDetectionStrategy, Component, inject, input, OnInit} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";


@Component({
  selector: 'app-botao-menu',
  standalone: true,
  imports: [],
  templateUrl: './botao-menu.components.html',
  styleUrl: './botao-menu.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  nome = input.required<string>();

  ngOnInit(): void {

  }
}