Ext.define('Movies', {
    extend: 'Ext.data.Model',
    fields: ['title', 'description', 'release_year', 'language', 'director', 'rating', 'special_features']
});
 var filmStore = Ext.create('Ext.data.Store', {
     storeId: 'filmTableStore',
     pageSize: 15,
     model: 'Movies',
     autoLoad: true,
     proxy: {
         type: 'ajax',
         url: 'http://localhost:8080/14402/fetch',
         reader: {
             type: 'json',
             enablePagination: true,
			 rootProperty : 'items',
   			 totalProperty  : 'total',

         }
     },

 });


var languageModel = Ext.define('languageModel', {
    extend: 'Ext.data.Model',
    fields: ['language_id, name']
});

var languageDropDown = Ext.create('Ext.data.Store', {
    model: languageModel,
    data: [{
        language_id: '1',
        name: 'English'
    }, {
        language_id: '2',
        name: 'French'
    }, {
        language_id: '3',
        name: 'German'
    }, {
        language_id: '4',
        name: 'Italian'
    }, {
        language_id: '5',
        name: 'Japanese'
    }, {
        language_id: '6',
        name: 'Mandarin'
    }, {
        language_id: '7',
        name: 'Mongolian'
    }]

});
// `addWindow` Window for Add Button Functionality
var addWindow = Ext.create('Ext.window.Window', {
    title: 'Add',
    width: 400,
    layout: 'fit',
    autoDestroy: false,
    closeAction: 'close',
    items: [{
        xtype: 'form',
        bodyPadding: 5,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Film ID',
            name: 'film_id',
            id: 'addFilmId'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Title',
            name: 'title',
            id: 'addTitle'
        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            name: 'description',
            id: 'addDescription'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Release Year',
            name: 'release_year',
            id: 'addReleaseYear'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Language',
            store: languageDropDown,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'name',
            name: 'language_name',
            id: 'addLanguage'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Director',
            name: 'director',
            id: 'addDirector'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Rating',

            name: 'rating',
            id: 'addFilmRating'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Special Features',
            name: 'special_features',
            id: 'addSpecialFeatures'
        }],

        buttons: [{
            text: 'Add',
            style: 'background-color: #000000;',
            handler: function () {

                var a1 = Ext.getCmp("addFilmId").getValue();
                var a2 = Ext.getCmp("addTitle").getValue();
                var a3 = Ext.getCmp("addDescription").getValue();
                var a4 = Ext.getCmp("addReleaseYear").getValue();
                var a5 = Ext.getCmp("addLanguage").getValue();
                var a6 = Ext.getCmp("addDirector").getValue();
                var a7 = Ext.getCmp("addFilmRating").getValue();
                var a8 = Ext.getCmp("addSpecialFeatures").getValue();
                //var form = this.up('form').getForm();

                Ext.Ajax.request({
                    url: '/14402/add',
                    method: 'POST',
                    timeout: 60000,
                    params: {
                        l1: a1,
                        l2: a2,
                        l3: a3,
                        l4: a4,
                        l5: a5,
                        l6: a6,
                        l7: a7,
                        l8: a8
                    },
                    scope: this,

                    success: function (response) {
                        //Ext.Msg.alert('Status', 'Request Succesfully.');
                        filmStore.load();
                        addWindow.close();
                        addWindow.down('form').reset();

                    },
                    failure: function (response) {
                        Ext.Msg.alert('Status', 'Request Failed.');

                    }
                });
            }
        }, {
            text: 'Cancel',
            style: 'background-color: #000000;',
            handler: function () {
                addWindow.close();
            }
        }],
        buttonAlign: 'center',
    }]
});
// `editWindow` Window for Edit Button Functionality
var editWindow = Ext.create('Ext.window.Window', {
    title: 'Edit',
    width: 400,
    layout: 'fit',
    autoDestroy: false,
    closeAction: 'close',
    items: [{
        xtype: 'form',
        bodyPadding: 5,
        id: 'editFormId',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Film ID',
            name: 'film_id',
            id: 'editFilmId'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Title',
            name: 'title',
            id: 'editTitle'
        }, {
            xtype: 'textarea',
            fieldLabel: 'Description',
            name: 'description',
            id: 'editDescription'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Release Year',
            name: 'release_year',
            id: 'editReleaseYear'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Language',
            store: languageDropDown,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'name',
            id: 'editLanguage'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Director',
            name: 'director',
            id: 'editDirector'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Rating',

            name: 'rating',
            id: 'editFilmRating'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Special Features',

            name: 'special_features',
            id: 'editSpecialFeatures'
        }],

        buttons: [{
            text: 'Edit',
            style: 'background-color: #000000;',
            handler: function () {

                var e1 = Ext.getCmp("editFilmId").getValue();
                var e2 = Ext.getCmp("editTitle").getValue();
                var e3 = Ext.getCmp("editDescription").getValue();
                var e4 = Ext.getCmp("editReleaseYear").getValue();
                var e5 = Ext.getCmp("editLanguage").getValue();
                var e6 = Ext.getCmp("editDirector").getValue();
                var e7 = Ext.getCmp("editFilmRating").getValue();
                var e8 = Ext.getCmp("editSpecialFeatures").getValue();
                //var form = this.up('form').getForm();

                Ext.Ajax.request({
                    url: '/14402/update',
                    method: 'POST',
                    timeout: 60000,
                    params: {
                        load1: e1,
                        load2: e2,
                        load3: e3,
                        load4: e4,
                        load5: e5,
                        load6: e6,
                        load7: e7,
                        load8: e8
                    },
                    scope: this,

                    success: function (response) {
                        //Ext.Msg.alert('Status', 'Request Succesfully.');
                        filmStore.load();
                        editWindow.close();
                        editWindow.down('form').reset();

                    },
                    failure: function (response) {
                        Ext.Msg.alert('Status', 'Request Failed.');

                    }
                });
            }

        }, {
            text: 'Cancel',
            style: 'background-color: #000000;',
            handler: function () {
                editWindow.close();
            }
        }],
        buttonAlign: 'center',
    }]
});
// `deleteWindow` Window for Delete Button Functionality
var deleteWindow = Ext.create('Ext.window.Window', {
    title: 'Delete',
    width: 400,
    html: "<p>Are you sure you want to Delete!?</p>",
    layout: 'fit',
    autoDestroy: false,
    closeAction: 'close',
    items: [{
        xtype: 'form',
        bodyPadding: 5,
        id: 'deleteFormId',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Film ID',
            name: 'del_filmIds',
            id: 'deleteFilmId'
        }],

        buttons: [{
            text: 'Delete',
            style: 'background-color: #000000;',
            handler: function () {

                var del = Ext.getCmp("deleteFilmId").getValue();
                var form = this.up('form').getForm();

                Ext.Ajax.request({
                    url: '/14402/delete',
                    method: 'POST',
                    timeout: 60000,
                    params: {
                        loaddata: del // loads student whose Id is 1
                    },
                    scope: this,

                    success: function (response) {
                        //Ext.Msg.alert('Status', 'Request Succesfully.');
                        filmStore.load();
                        deleteWindow.close();
                        deleteWindow.down('form').reset();

                    },
                    failure: function (response) {
                        Ext.Msg.alert('Status', 'Request Failed.');

                    }
                });
            }

        }, {
            text: 'Cancel',
            style: 'background-color: #000000;',
            handler: function () {
                deleteWindow.close();
            }
        }],
        buttonAlign: 'center',
    }]
});
Ext.onReady(function () {
    Ext.Msg.alert('Sakila ExtJs UI', 'Welcome to my sakila Project!');
    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [{
            xtype: 'panel',
            layout: {
                type: 'border',
                pack: 'center',
                align: 'middle'
            },
            items: [{
                title: 'Movie Advanced Search',
                region: 'center',
                xtype: 'panel',
                margin: '5 5 5 5',
                layout: 'fit',
                items: [{
                    xtype: 'form',
                    bodyPadding: 5,
                    layout: {
                        type: 'anchor',
                        pack: 'center',
                        align: 'middle'
                    },
                    // Arrange fields vertically, stretched to full width
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                        xtype: 'fieldcontainer',
                        margin: '20 0 0 0',
                        bodyPadding: 5,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'middle'
                        },
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Movie Name',
                            name: 'title',
                            id: 'movieName'
                        }, {
                            xtype: 'splitter',
                            margin: '0 20 0 20'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Director',
                            name: 'director',
                            id: 'directorName'
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        margin: '10 0 0 0',
                        bodyPadding: 5,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'middle'
                        },
                        items: [{
                            xtype: 'datefield',
                            format: 'Y',
                            fieldLabel: 'Release Year',
                            name: 'release_year',
                            id: 'releaseYear'

                        }, {
                            xtype: 'splitter',
                            margin: '0 20 0 20'
                        }, {
                            xtype: 'combobox',
                            fieldLabel: 'Language',
                            store: languageDropDown,
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'name',
                            name: 'language_name',
                            id: 'language_combo'

                        }]
                    }],
                    buttonAlign: 'center',
                    buttons: [{
                        text: 'Search',
                        style: 'background-color: #000000;',
                        handler: function () {

                            var form = this.up('form').getForm();

                            var s1 = Ext.getCmp('movieName').getValue();
                            var s2 = Ext.getCmp('directorName').getValue();
                            //var s3 = Ext.getCmp('releaseYear').getValue();
                            var s4 = Ext.getCmp('language_combo').getValue();

                            form.submit({
                                url: '/14402/search',
                                method: 'POST',

                                timeout: 60000,
                                params: {
                                    sam1: s1,
                                    sam2: s2,
                                    //am3: s3,
                                    sam4: s4
                                },
                                scope: this,

                                success: function (response) {
                                    Ext.Msg.alert('Success', "Records Found!");

                                },
                                failure: function (response) {
                                    Ext.Msg.alert('Failed', "No Records Found!");
                                }
                            });
                        }

                    }, {
                        text: 'Reset',
                        style: 'background-color: #000000;',
                        handler: function () {

                            filmStore.load();
                            this.up('form').getForm().reset();
                        }

                    }]
                }]
            }, {
                // Movie Grid
                title: 'Movie Grid',
                id: 'movie_grid',
                name: 'movieGrid',
                region: 'south',
                xtype: 'grid',
                height: '67%',
                minHeight: 100,
                split: true,
                margin: '0 5 5 5',
                store: Ext.data.StoreManager.lookup('filmTableStore'),
                columns: [{
                    text: 'Film Id',
                    flex: 1,
                    dataIndex: 'film_id'
                }, {
                    text: 'Title',
                    flex: 1,
                    dataIndex: 'title'
                }, {
                    text: 'Description',
                    flex: 2,
                    dataIndex: 'description'
                }, {
                    text: 'Release year',
                    flex: 1,
                    dataIndex: 'release_year'
                }, {
                    text: 'Language',
                    flex: 1,
                    dataIndex: 'language'
                }, {
                    text: 'Director',
                    flex: 1,
                    dataIndex: 'director'
                }, {
                    text: 'Rating',
                    flex: 1,
                    dataIndex: 'rating'
                }, {
                    text: 'Special Feature',
                    flex: 1,
                    dataIndex: 'special_features'
                }],

                selModel: {
                    selType: 'checkboxmodel',
                    mode: 'MULTI',
                    checkOnly: true
                },

                listeners: {
                    'select': function () {
                        var gridData = {}
                        var selected = Ext.getCmp('movie_grid').getSelectionModel().getSelection();
                        if (selected.length == 1) {
                            gridData = selected[0].data;
                            Ext.getCmp('editFormId').getForm().setValues(gridData);
                            Ext.getCmp('deleteFormId').getForm().setValues(gridData);
                            Ext.getCmp('editFilmId').disable();
                           
                        } 
                    }
                },

                dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: Ext.data.StoreManager.lookup('filmTableStore'),
                    dock: 'top',
                    displayInfo: true,
                    displayMsg: 'Displaying: {0} to {1} out of {2} &nbsp;Records ',
                    emptyMsg: "No Records to Display!&nbsp;",
                    inputItemWidth: 50,
                    items: [{
                        xtype: 'button',
                        text: 'Add',
                        id: 'addButtonId',
                        iconCls: 'x-fa fa-plus-circle',
                        listeners: {
                            click: function () {
                                addWindow.show();
                            }
                        }

                    }, {
                        xtype: 'button',
                        text: 'Edit',
                        id: 'editButtonId',
                        iconCls: 'x-fa fa-pencil-square-o',
                        listeners: {
                            click: function () {
                                editWindow.show();
                            }
                        }

                    }, {
                        xtype: 'button',
                        text: 'Delete',
                        id: 'deleteButtonId',
                        iconCls: 'x-fa fa-trash',
                        listeners: {
                            click: function () {
                                deleteWindow.show();
                            }
                        }
                    }]
                }]
            }]
        }],
        renderTo: document.body,
    });
});
