import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";
import { PainelEsquerdoComponent } from "../../components/painel-esquerdo/painel-esquerdo.component";

@Component({
  selector: 'app-player',
  imports: [
    PainelEsquerdoComponent
],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  ngOnInit(): void {

  }
}