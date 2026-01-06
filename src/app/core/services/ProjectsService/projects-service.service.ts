import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects = [
    {
      id: 1,
      title: 'أكوا بارك',
      description: 'اوليمبي نادي الواحة الاسماعيلية',
      image: 'assets/12.JPG',
      details: 'تفاصيل المشروع كاملة هنا...',
      images: [
         'assets/12.JPG',
          'assets/5.jpg',
            'assets/10.JPG',
            'assets/8.JPG',
        'assets/1.jpg',
        'assets/2.jpg',
        'assets/3.jpg',
        'assets/4.jpg',
          'assets/6.jpg',
           'assets/7.jpg'
       
         
      ]
    }   ,
        {
      id: 21,
      title: 'أكوا بارك',
      description: 'مجمع حمامات سباحة فندق جرين ديزرت السادات',
      image: '/assets/2023.JPG',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
    '/assets/2020.JPG',
          '/assets/2023.JPG',
           '/assets/2023.JPG',
            '/assets/2024.JPG',
              '/assets/2025.jpg',
                '/assets/2026.jpg',
                 '/assets/2027.jpg',
                  '/assets/2028.JPG',
                   '/assets/2029.jpg'
                    
      
      ]
    },
          {
      id: 9,
      title: 'أكوا بارك',
      description: 'اوليمبي نادي جاردينيا زهراء مدينةحمام سباحة فيلا 127 الرحاب نص',
      image:  '/assets/9I.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
            '/assets/9F.jpg',
              '/assets/9G.jpg',
               '/assets/9H.jpg',
                '/assets/9I.jpg',
         '/assets/9A.jpg',
         '/assets/9B.jpg',
           '/assets/9D.jpg',
            '/assets/9E.jpg'
         
      ]
    },
  
        {
      id: 3,
      title: 'أكوا بارك',
      description: 'حمام سباحة الحي السكني الراقي بالجلالة',
      image: '/assets/3N.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
            '/assets/3L.jpg',
        '/assets/3M.jpg',
        '/assets/3N.jpg',
        '/assets/3H.JPG',
           '/assets/3I.jpg',
        '/assets/3K.jpg',
    
        '/assets/3A.JPG',
        '/assets/3B.JPG',
        '/assets/3C.jpg',
        '/assets/3D.jpg',
        '/assets/3E.jpg',
        '/assets/3F.jpg',
        '/assets/3G.jpg',
        
     
      
      ]
    },
        {
      id: 5,
      title: 'أكوا بارك',
      description: 'حمام سباحة A20 سيدي حنيش',
      image:   '/assets/5D.JPG',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
          '/assets/5D.JPG',
     '/assets/5A.JPG',
      '/assets/5B.JPG',
       '/assets/5C.JPG',
      
      ]
    },
         {
      id: 13,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيلا E13 سيدي حنيش',
      image:   'assets/Untitled design.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
        'assets/Untitled design.jpg',
        '/assets/13B.JPG',
         '/assets/13C.JPG',
          '/assets/13D.JPG',
          '/assets/13E.JPG',
           '/assets/13F.JPG',
             
      ]
    },
        {
      id: 6,
      title: 'أكوا بارك',
      description: 'حمام السباحة الترفيهي نادي جاردينيا زهراء مدينة نصر',
      image:   'assets/6X.JPG',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
        'assets/6Q.jpg',
                      'assets/6R.JPG',
                       'assets/6S.JPG',
                        'assets/6T.JPG',
                         'assets/6V.JPG',
                          'assets/6W.JPG',
                           'assets/6X.JPG',
                              'assets/6N.JPG',
        'assets/6A.jpg',
         'assets/6B.jpg',
          'assets/6C.jpg',
           'assets/6D.jpg',
            'assets/6E.jpg',
             'assets/6F.jpg',
              'assets/6G.jpg',
               'assets/6H.jpg',
                'assets/6I.JPG',
                 'assets/6K.JPG',
                  'assets/6L.JPG',
                   'assets/6M.JPG',
                             'assets/6Z.jpg'
       
      ]
    },
        {
      id: 7,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيكتوريا 7 مراسي',
      image:'assets/7L.JPG',
      images: [
         'assets/7K.JPG',
                  'assets/7L.JPG',
                   'assets/7M.JPG',
                    'assets/7N.JPG',
                      'assets/7H.JPG',
           'assets/7A.JPG',
         'assets/7B.JPG',
          'assets/7C.JPG',
           'assets/7D.JPG',
            'assets/7E.JPG',
             'assets/7F.JPG',
              'assets/7G.JPG',
                'assets/7I.JPG',
                
      ]
    },
        {
      id: 8,
      title: 'أكوا بارك',
      description: ' حمام سباحة فيلا  م احمد النجار مفيدا التجمع',
      image:  '/assets/8I.jpg',
      details: ' ',
      images: [
         '/assets/8G.jpg',
               '/assets/8H.jpg',
                '/assets/8I.jpg',
          '/assets/8A.jpg',
         '/assets/8B.jpg',
          '/assets/8C.jpg',
           '/assets/8D.jpg',
            '/assets/8E.jpg',
             '/assets/8F.jpg'
             
      ]
    },
  
        {
      id: 10,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيلا A7 سيدى حنيش ',
      image:     '/assets/10M.JPG',
      images: [
         '/assets/10I.JPG',
                 '/assets/10K.JPG',
                  '/assets/10L.jpg',
                   '/assets/10M.JPG',
                    '/assets/10G.JPG',
               '/assets/10H.JPG',
       '/assets/10A.JPG',
         '/assets/10B.JPG',
          '/assets/10C.JPG',
           '/assets/10D.JPG',
            '/assets/10E.JPG',
             '/assets/10F.jpg'
             
               
      ]
    },
        {
      id: 14,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيلا الرحاب',
      image:   '/assets/14D.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
             '/assets/14A.jpg',
         '/assets/14B.jpg',
          '/assets/14C.jpg',
           '/assets/14D.jpg',
            '/assets/14E.jpg',
             '/assets/14F.jpg',
              '/assets/14G.jpg',
               '/assets/14H.jpg',
                '/assets/14I.jpg',
                 '/assets/14K.jpg',
      ]
    }
  
    ,
        {
      id: 16,
      title: 'أكوا بارك',
      description: 'حمام سباحة كمباوند ليان',
      image: '/assets/16I.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
         '/assets/16F.jpg',
              '/assets/16G.jpg',
               '/assets/16H.jpg',
                '/assets/16I.jpg',
              '/assets/16A.jpg',
         '/assets/16B.jpg',
          '/assets/16C.jpg',
           '/assets/16D.jpg',
            '/assets/16E.jpg'
            
      ]
    } 
        ,
        {
      id: 19,
      title: 'أكوا بارك',
      description: 'فيلا الحاج امير البحيرة',
      image: '/assets/19d.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
         '/assets/19A.jpg',
         '/assets/19B.jpg',
          '/assets/19c.jpg',
           '/assets/19d.jpg',
      ]
    }
    ,
        {
      id: 20,
      title: 'أكوا بارك',
      description: 'فيلا م رامي صليب بالتجمع',
      image:  '/assets/1513.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
         '/assets/24.jpg',
              '/assets/25.jpg',
                '/assets/1513.jpg',
        '/assets/22.jpg',
          '/assets/23.jpg'
           
       
      ]
    }
      
    ,
        {
      id: 17,
      title: 'أكوا بارك',
      description: 'حمام سباحة منطقة الخدمات اسكان ضباط القوات المسلحة بالعلمين',
      image: '/assets/17F.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
          '/assets/17E.jpg',
             '/assets/17F.jpg',
         '/assets/17A.jpg',
         '/assets/17B.jpg',
          '/assets/17C.jpg',
           '/assets/17D.jpg',
          
            
      ]
    }
    
     ,
        {
      id: 15,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيلا م خليل مامون جولف العبور',
      image:  '/assets/15F.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
          '/assets/15A.jpg',
           '/assets/15F.jpg',
         '/assets/15B.jpg',
          '/assets/15C.jpg',
           '/assets/15D.jpg',
            '/assets/15E.jpg',
            
               '/assets/15H.jpg',
      ]
    },
        {
      id: 18,
      title: 'أكوا بارك',
      description: 'حمام سباحة منطقة الفيلا اسكان ضباط القوات المسلحة بالعلمين',
      image:   '/assets/18L.jpg',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
         '/assets/18H.jpg',
                '/assets/18I.jpg',
                 '/assets/18K.jpg',
                  '/assets/18L.jpg',
      '/assets/18A.jpg',
         '/assets/18B.jpg',
          '/assets/18C.jpg',
           '/assets/18D.jpg',
            '/assets/18E.jpg',
             '/assets/18F.jpg',
              '/assets/18G.jpg',
                   '/assets/18M.jpg'
      ]
    }
,  {
      id: 2,
      title: 'أكوا بارك',
      description: 'اوليمبي نادي جاردينيا زهراء مدينة نصر',
      image:  'assets/2N.JPG',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
        'assets/2N.JPG',
         'assets/2I.jpg',
        'assets/2J.jpg',
        'assets/2K.jpg',
        'assets/2L.jpg',
        'assets/2M.jpg',
        'assets/2A.jpg',
        'assets/2B.jpg',
        'assets/2C.jpg',
     
        
      ]
    },
        {
      id: 12,
      title: 'أكوا بارك',
      description: 'حمام سباحة فيلا C13 سيدي حنيش',
      image:   '/assets/12C.JPG',
      details: 'تفاصيل الأكوا بارك هنا...',
      images: [
        '/assets/12A.JPG',
        '/assets/12B.JPG',
         '/assets/12C.JPG',
          '/assets/12D.JPG',
          '/assets/12E.JPG'
      ]
    },
   
  
  ];

  getProjectById(id: number) {
    return this.projects.find(p => p.id === id);
  }
}


