/*
 * File: app/view/PersonalStream.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('qrunch.view.PersonalStream', {
  extend: 'Ext.Container',
  alias: 'widget.PersonalStream',

  requires: [
    'qrunch.view.InfCarousel'
  ],

  config: {
    id: 'personal-stream',
    layout: {
      type: 'card'
    },
    cls: [
      'bg'
    ],
    scrollable: {
      direction: 'vertical',
      directionLock: true,
      
    },
    items: [
      {
        xtype: 'segmentedbutton',
        docked: 'top',
        height: '33px',
        id: 'personal-segment',
        itemId: '',
        pressedCls: 'personal-stream-btn-pressed',
        items: [
          {
            xtype: 'button',
            pressed: true,
            baseCls: 'personal-stream-btn',
            itemId: 'stream-button',
            width: '33%',
            pressedCls: '',
            text: 'Stream'
          },
          {
            xtype: 'button',
            baseCls: 'personal-stream-btn',
            id: 'likes-button',
            itemId: 'mybutton13',
            width: '33%',
            text: 'Likes'
          },
          {
            xtype: 'button',
            baseCls: 'personal-stream-btn',
            id: 'community-button',
            itemId: 'mybutton14',
            width: '33%',
            text: 'Community'
          }
        ]
      },
      {
        xtype: 'carousel',
        cls: [
          'bg'
        ],
        height: '100%',
        id: 'personal-page-content',
        itemId: 'mycarousel1',
        items: [
          {
            xtype: 'container',
            layout: {
              type: 'vbox'
            },
            scrollable: {
              direction: 'vertical',
              directionLock: true,
              
            },
            items: [
              {
                xtype: 'InfCarousel',
                itemId: 'infcarousel14',
                style: 'background-color: rgb(100,100,100)'
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color: rgb(200,200,200)',
                styleHtmlContent: true
              },
              {
                xtype: 'InfCarousel',
                style: 'background-color: rgb(150,150,150)'
              }
            ]
          },
          {
            xtype: 'container',
            layout: {
              type: 'vbox'
            },
            scrollable: {
              direction: 'vertical',
              directionLock: true,
              
            },
            items: [
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color: rgb(200,200,200)',
                styleHtmlContent: true
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color: rgb(180,180,180)',
                styleHtmlContent: true
              },
              {
                xtype: 'InfCarousel',
                style: 'background-color: rgb(150,150,150)'
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color: rgb(160,160,160)',
                styleHtmlContent: true
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color: rgb(140,140,140)',
                styleHtmlContent: true
              }
            ]
          },
          {
            xtype: 'container',
            layout: {
              type: 'vbox'
            },
            scrollable: {
              direction: 'vertical',
              directionLock: true,
              
            },
            items: [
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color:rgb(200,200,200)',
                styleHtmlContent: true
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color:rgb(180,180,180)',
                styleHtmlContent: true
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color:rgb(160,160,160)',
                styleHtmlContent: true
              },
              {
                xtype: 'panel',
                height: '150px',
                html: 'a story goes here...',
                style: 'background-color:rgb(140,140,140)',
                styleHtmlContent: true
              }
            ]
          }
        ]
      }
    ]
  }

});