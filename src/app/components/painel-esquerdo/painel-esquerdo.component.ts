import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-painel-esquerdo',
  standalone: true,
  imports: [],
  templateUrl: './painel-esquerdo.components.html',
  styleUrl: './painel-esquerdo.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PainelEsquerdoComponent implements OnInit {

  ngOnInit(): void {

  }
}