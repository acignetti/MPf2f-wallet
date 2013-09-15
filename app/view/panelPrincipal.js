/*
 * File: app/view/panelPrincipal.js
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

Ext.define('MyApp.view.panelPrincipal', {
    extend: 'Ext.Panel',

    config: {
        activeItem: 0,
        id: 'panelPrincipal',
        style: '',
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
                        id: 'img',
                        margin: '10 auto 0 0',
                        width: '50%',
                        src: 'app/resource/logo.png'
                    },
                    {
                        xtype: 'formpanel',
                        height: '100%',
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
                id: 'panelMenu',
                items: [
                    {
                        xtype: 'tabpanel',
                        centered: false,
                        height: '100%',
                        id: 'panelPagar',
                        style: '',
                        items: [
                            {
                                xtype: 'container',
                                title: 'Pagar',
                                centered: false,
                                height: '100%',
                                id: 'id_panelPagar',
                                itemId: 'mycontainer37',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        height: '100%',
                                        padding: '50 0 0 0',
                                        hideOnMaskTap: false,
                                        items: [
                                            {
                                                xtype: 'segmentedbutton',
                                                margin: '20 auto 0 auto',
                                                width: 224,
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        margin: '0 0 0 0',
                                                        maxWidth: 111,
                                                        padding: '',
                                                        width: 111,
                                                        text: 'Leer NFC'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        border: '',
                                                        itemId: 'mybutton63',
                                                        maxWidth: 111,
                                                        width: 111,
                                                        text: 'Leer QR'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'label',
                                                html: 'Estado del pago:',
                                                margin: '20 auto 0 auto',
                                                maxWidth: 160,
                                                minWidth: 160,
                                                padding: '',
                                                width: 160
                                            },
                                            {
                                                xtype: 'label',
                                                estado: 'sin_codigo',
                                                height: 73,
                                                html: 'Lea NFC/Qr para generar el codigo de Pago',
                                                id: 'idEstadoPago',
                                                margin: '20 auto 0 auto',
                                                maxWidth: 268,
                                                style: 'color: grey;text-align: center;',
                                                ui: '',
                                                width: 268
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'mybutton61',
                                                margin: '5% auto 0 auto',
                                                maxWidth: 150,
                                                ui: 'action',
                                                width: 150,
                                                text: 'Pagar'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                title: 'Buscar',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: 47,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                width: '100%',
                                                label: ''
                                            },
                                            {
                                                xtype: 'button',
                                                docked: 'right',
                                                width: '18%',
                                                text: 'Buscar'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'list',
                                        height: '100%',
                                        itemTpl: [
                                            '<div>List Item {title}</div>'
                                        ],
                                        store: 'storeOfertas'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                title: 'Ofertas',
                                id: 'panelOfertas',
                                items: [
                                    {
                                        xtype: 'searchfield',
                                        id: 'PO_textBoxFiltro',
                                        itemId: 'mysearchfield2',
                                        label: 'Filtro',
                                        labelWidth: '20%'
                                    },
                                    {
                                        xtype: 'list',
                                        height: '100%',
                                        id: 'listaOfertas',
                                        itemId: 'mylist5',
                                        itemTpl: [
                                            '<div><b>{title}</b><br>Precio: <font color="red"> ${price} </font> <br> Descripcion: {description}</div>'
                                        ],
                                        store: 'storeOfertas'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'panelOfertaDetalle',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'mybutton37',
                                ui: 'back',
                                text: 'Volver'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: 'Texto',
                        id: 'OD_labelTitulo'
                    },
                    {
                        xtype: 'spacer',
                        height: 25
                    },
                    {
                        xtype: 'label',
                        html: '$55.00',
                        id: 'OD_labelPrecio'
                    },
                    {
                        xtype: 'label',
                        html: 'Articulo nuevo',
                        id: 'OD_descArticulo',
                        style: 'color:grey;'
                    },
                    {
                        xtype: 'spacer',
                        height: 29
                    },
                    {
                        xtype: 'label',
                        html: 'Medios de Pagos: Targeta Verde, Nevada, Mercado Pago, verde, lalal ., esta',
                        id: 'OD_fechaOferta',
                        width: ''
                    },
                    {
                        xtype: 'label',
                        html: 'Distancia:',
                        id: 'OD_distancia'
                    },
                    {
                        xtype: 'segmentedbutton',
                        margin: '20 auto 20 auto',
                        width: 214,
                        items: [
                            {
                                xtype: 'button',
                                id: 'OD_btnReservar',
                                text: 'Reservar'
                            },
                            {
                                xtype: 'button',
                                id: 'OD_btnVerMapa',
                                text: 'Ver Mapa'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#btnEntrar'
            },
            {
                fn: 'onMybutton63Tap',
                event: 'tap',
                delegate: '#mybutton63'
            },
            {
                fn: 'onMybutton61Tap',
                event: 'tap',
                delegate: '#mybutton61'
            },
            {
                fn: 'onMysearchfield2Keyup',
                event: 'keyup',
                delegate: '#PO_textBoxFiltro'
            },
            {
                fn: 'onListaOfertasItemTap',
                event: 'itemtap',
                delegate: '#listaOfertas'
            },
            {
                fn: 'onMybutton37Tap',
                event: 'tap',
                delegate: '#mybutton37'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        var elemto = Ext.getCmp("panelPrincipal");
        elemto.setActiveItem(1);
    },

    onMybutton63Tap: function(button, e, eOpts) {
        new QrManager().startQr(function(lectura){
            Ext.getCmp('idEstadoPago').setHtml("Codigo de pago generado!");
            var_pagoUrl = "http://10.52.213.157/mp-ws/operaciones.php?operacion=mp_checkout&id=2";
        });
    },

    onMybutton61Tap: function(button, e, eOpts) {
        if(var_pagoUrl){
            //  Ext.getCmp("id_panelPagar").setMasked(true);
            new PagosManager().generarPago();
        }
        else
        alert("Debe leer un codigo de pago");
    },

    onMysearchfield2Keyup: function(textfield, e, eOpts) {

        var filtro = textfield.getValue();
        var store = Ext.getStore("storeOfertas");

        store.filter( 'titulo', filtro, true,false);
        store.load();
    },

    onListaOfertasItemTap: function(dataview, index, target, record, e, eOpts) {
        var evento = Ext.getCmp('panelPrincipal');


        var titulo = Ext.getCmp("OD_labelTitulo");
        titulo.setHtml(record.get("title"));

        var precio = Ext.getCmp("OD_labelPrecio");
        precio.setHtml(record.get("price"));

        var descArticulo = Ext.getCmp("OD_distancia");
        descArticulo.setHtml("Distancia Aproximada: " + record.get("dist"));

        var pagos = Ext.getCmp("OD_fechaOferta");
        pagos.setHtml("Fecha de la oferta: " + record.get("date") + "Km");

        evento.setActiveItem(2);
    },

    onMybutton37Tap: function(button, e, eOpts) {
        Ext.getCmp("panelPrincipal").setActiveItem(1);
        Ext.getCmp("listaOfertas").deselectAll();
    }

});