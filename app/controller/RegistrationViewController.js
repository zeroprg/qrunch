/*
 * File: app/controller/RegistrationViewController.js
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

Ext.define('qrunch.controller.RegistrationViewController', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      rootView: '#root-view'
    },

    control: {
      "#registration-view-signup": {
        tap: 'register'
      }
    }
  },

  register: function(button, e, options) {
    var data = {
      	  _id: 'testMeRegulary',
          password: 'testMeRegulary',
          firstName: 'testMeRegulary',
          lastName: 'testMeRegulary'
    };

    Ext.Ajax.request({
      url: 'http://localhost:8080/CrunchRESTful/userProfile',
      method: 'POST',
      withCredentials: true,
      useDefaultXhrHeader: false,
      jsonData: data,
      success: function(response){
        console.log(Ext.decode(response.responseText));
      }
    });
  }

});