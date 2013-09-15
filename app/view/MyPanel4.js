/*
 * File: app/view/MyPanel4.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyPanel4', {
    extend: 'Ext.Panel',

    config: {
        activeItem: 0,
        id: 'panel2',
        layout: {
            animation: 'scroll',
            type: 'card'
        },
        items: [
            {
                xtype: 'panel',
                id: 'panelLogin',
                items: [
                    {
                        xtype: 'image',
                        height: 86,
                        id: 'img'
                    },
                    {
                        xtype: 'formpanel',
                        height: 448,
                        padding: '50 15 15 15',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'textUsuario',
                                label: 'Usuario'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'textPass',
                                label: 'Contraseña'
                            },
                            {
                                xtype: 'button',
                                id: 'btnEntrar',
                                itemId: 'mybutton',
                                margin: '20 auto 0 auto',
                                padding: '',
                                ui: 'action',
                                width: 200,
                                text: 'Entrar'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'idPanelPrincipal',
                itemId: 'panelPrincipal',
                items: [
                    {
                        xtype: 'tabpanel',
                        centered: false,
                        height: '100%',
                        items: [
                            {
                                xtype: 'container',
                                title: 'Pagar',
                                centered: false,
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        height: '100%',
                                        padding: '50 0 0 0',
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: 'Ingresar Código',
                                                margin: '0 auto 0 auto',
                                                padding: '',
                                                width: 136
                                            },
                                            {
                                                xtype: 'textfield',
                                                margin: '10 20 0 20',
                                                label: ''
                                            },
                                            {
                                                xtype: 'button',
                                                margin: '5% auto 0 auto',
                                                ui: 'action',
                                                width: '50%',
                                                text: 'Pagar'
                                            },
                                            {
                                                xtype: 'segmentedbutton',
                                                margin: '20 auto 0 auto',
                                                width: 236,
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        margin: '0 0 0 0',
                                                        padding: '',
                                                        width: 111,
                                                        text: 'Leer NFC'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        border: '',
                                                        width: 111,
                                                        text: 'Leer QR'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Ofertas',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'panel',
                                        height: '100%',
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: 'Ofertas cerca tuyo!'
                                            },
                                            {
                                                xtype: 'list',
                                                height: '100%',
                                                itemId: 'mylist2',
                                                itemTpl: [
                                                    '<div class="contact">{firstName} <strong>{lastName}</strong></div>'
                                                ],
                                                store: 'storeOfertas'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'panel6'
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#btnEntrar'
            },
            {
                fn: 'onMylist2ItemTap',
                event: 'itemtap',
                delegate: '#mylist2'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        var elemto = Ext.getCmp("panel2");
        elemto.setActiveItem(1);
    },

    onMylist2ItemTap: function(dataview, index, target, record, e, eOpts) {
        var evento = Ext.getCmp('panel2');
        evento.setActiveItem(2);
    }

});