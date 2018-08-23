import { ModuleWithProviders } from "@angular/compiler/src/core";
import { RouterModule } from "@angular/router";
import { RootComponent } from "./root/root.component";
import { AutoGuard } from "../auth.guard";
import { HomeComponent } from "./home/home.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'dashboard',
        component: RootComponent, canActivate: [AutoGuard],
        
        children: [
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            //{path: 'settings', component: SettingsComponent}
        ]
    }
]);