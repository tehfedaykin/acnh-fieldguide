import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillagersComponent } from './villagers/villagers.component';
import { VillagerComponent } from './villagers/villager/villager.component';
import { FishiesComponent } from './fishies/fishies.component';
import { InsectsComponent } from './insects/insects.component';
import { FossilsComponent } from './fossils/fossils.component';
import { FishComponent } from './fishies/fish/fish.component';
import { InsectComponent } from './insects/insect/insect.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'villagers',
    component: VillagersComponent
  },
  {
    path: 'villagers/:id',
    component: VillagerComponent
  },
  {
    path: 'fish',
    component: FishiesComponent
  },
  {
    path: 'fish/:id',
    component: FishComponent
  },
  {
    path: 'insects',
    component: InsectsComponent
  },
  {
    path: 'insects/:id',
    component: InsectComponent
  },
  {
    path: 'fossils',
    component: FossilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
