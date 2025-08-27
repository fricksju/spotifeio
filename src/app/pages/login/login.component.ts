import { ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-login",
    imports: [],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
    ngOnInit(): void {
       this.verificarCodigoUrlCallback();
    }
    serviceSpotify = inject(SpotifyService);
    anoAtual = new Date().getFullYear();
 async fazerLogin() {
const url = await this.serviceSpotify.obterUrlLogin();
window.location.href = url;
}
verificarCodigoUrlCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
       const sucesso = this.serviceSpotify.definirAcesstoken(code);
    }
}
}