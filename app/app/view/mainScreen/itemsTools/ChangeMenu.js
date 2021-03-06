Ext.define('MD.view.mainScreen.itemsTools.ChangeMenu', {
    extend:'Ext.menu.Menu',
    alias: 'widget.itemsChangeMenu',

    initComponent:function(){
        var me = this;

        me.updatePhotoForm = Ext.create("MD.view.mainScreen.itemsTools.uploadForms",{});

        me.addPhotoForm = Ext.create("MD.view.mainScreen.itemsTools.uploadForms",{});

        me.updatePhotoWindow = Ext.create('Ext.window.Window',{
            title: 'Змінити фото',
            height: 200,
            width: 400,
            layout: 'fit',
            closeAction:"hide",
            items:[
                me.updatePhotoForm
            ]
        });

        me.addPhotoWindow = Ext.create('Ext.window.Window',{
            title: 'Змінити фото',
            height: 200,
            width: 400,
            layout: 'fit',
            closeAction:"hide",
            items:[
                me.addPhotoForm
            ]
        });

        me.items = [{
            text: 'Завантажити фото',
            handler:function(comp,event){
                me.formWindow.show();
            }
        },{
            text: 'regular item 2'
        },{
            text: 'regular item 3'
        }];

        Ext.apply(this,{
            width: 100,
            closeAction:'hide',
//            floating: false,  // usually you want this set to True (default)
//            renderTo:'Items',

            listeners:{
                afterrender:function(menu){

                }
            }
        });
        this.callParent(arguments);
    }

});