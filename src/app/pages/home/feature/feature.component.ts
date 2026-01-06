import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

  features = [
    {
      id: 1,
      title: 'حمامات سباحة عامة',
      description:
        'طاقم فني مدرب على أعلى مستوى لتصميم وتنفيذ حمامات سباحة مميزة بتصاميم أنيقة وعصرية'
    },
    {
      id: 2,
      title: 'حمامات سباحة خاصة',
      description:
        'نقوم في أكوا جارد بأعمال صيانة ومتابعة حمامات السباحة والدعم بما يلزم من إكسسوارات وقطع غيار'
    },
    {
      id: 3,
      title: 'ألعاب مائية',
      description:
        'نقوم في أكوا جارد بأعمال صيانة ومتابعة حمامات السباحة والدعم بما يلزم من إكسسوارات وقطع غيار'
    },
    {
      id: 4,
      title: ' النوادى الصحية',
      description:
        'طاقم فني مدرب على أعلى مستوى لتصميم وتنفيذ حمامات سباحة مميزة بتصاميم أنيقة وعصرية'
    }
  ];

}
