
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','b2b'),
    routes: [
      {
        path: '/docs/css/css居中问题详解',
        component: ComponentCreator('/docs/css/css居中问题详解','a60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css图片问题处理详解',
        component: ComponentCreator('/docs/css/css图片问题处理详解','ff9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css文字问题处理详解',
        component: ComponentCreator('/docs/css/css文字问题处理详解','0e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/css选择器优先级',
        component: ComponentCreator('/docs/css/css选择器优先级','6d5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/flex布局教程',
        component: ComponentCreator('/docs/css/flex布局教程','144'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/css/grid布局教程',
        component: ComponentCreator('/docs/css/grid布局教程','1f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2019新特性',
        component: ComponentCreator('/docs/javascript/ES2019新特性','805'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2020新特性',
        component: ComponentCreator('/docs/javascript/ES2020新特性','5ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/javascript/ES2021新特性',
        component: ComponentCreator('/docs/javascript/ES2021新特性','6dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
