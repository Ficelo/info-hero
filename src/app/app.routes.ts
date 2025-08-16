import { Routes } from '@angular/router';
import {PageAntiFakeHub} from './pages/anti-fake/page-anti-fake-hub/page-anti-fake-hub';
import {PageHome} from './pages/page-home/page-home';
import {PageDefisAntiFake1} from './pages/anti-fake/page-defis-anti-fake-1/page-defis-anti-fake-1';
import {PageDefisAntiFake3} from './pages/anti-fake/page-defis-anti-fake-3/page-defis-anti-fake-3';
import {PageDefisAntiFake2} from './pages/anti-fake/page-defis-anti-fake-2/page-defis-anti-fake-2';
import { PagePlaceInformationHub } from './pages/place-information/page-place-information-hub/page-place-information-hub';
import { PageDefisPlaceInformation1 } from './pages/place-information/page-defis-place-information-1/page-defis-place-information-1';
import { PageDefisPlaceInformation2 } from './pages/place-information/page-defis-place-information-2/page-defis-place-information-2';
import { PageDefisPlaceInformation3 } from './pages/place-information/page-defis-place-information-3/page-defis-place-information-3';

export const routes: Routes = [

  {path: "", component: PageHome},
  {
    path: "place-information",
    children: [
      {path: "", component: PageAntiFakeHub},
      {path: "defis-1", component: PageDefisAntiFake1},
      {path: "defis-2", component: PageDefisAntiFake2},
      {path: "defis-3", component: PageDefisAntiFake3},
    ],
  },
  {
    path : "anti-fake",
    children : [
      {path : "", component : PagePlaceInformationHub},
      {path : "defis-1", component: PageDefisPlaceInformation1},
      {path : "defis-2", component: PageDefisPlaceInformation2},
      {path : "defis-3", component: PageDefisPlaceInformation3},
    ],
  }


];
