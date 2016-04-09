/*
 * File: app.js
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

Ext.Loader.setConfig({
  enabled: true
});

Ext.application({

  requires: [
    'Ext.Img',
    'Ext.form.Panel',
    'Ext.field.Email',
    'Ext.field.Password',
    'Ext.Label',
    'Ext.SegmentedButton',
    'Ext.dataview.List',
    'Ext.data.JsonP'
  ],
  stores: [
    'Interests',
    'Followers'
  ],
  views: [
    'RootView',
    'SliderView',
    'MainView',
    'SlidingView',
    'LoginView',
    'InfCarousel',
    'TopBar',
    'ContentView',
    'PersonalStream',
    'FriendProfile',
    'Interests',
    'Follow',
    'ContentSelection',
    'RegistrationView'
  ],
  icon: {
    57: 'resources/icons/Icon.png',
    72: 'resources/icons/Icon~ipad.png',
    114: 'resources/icons/Icon@2x.png',
    144: 'resources/icons/Icon~ipad@2x.png'
  },
  name: 'qrunch',
  controllers: [
    'AppController',
    'SliderController',
    'PersonalPageController',
    'LoginViewController',
    'RegistrationViewController'
  ],

  launch: function() {

    Ext.create('qrunch.view.RootView', {fullscreen: true});
  }

});
