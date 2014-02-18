Ext.define('MD.controller.Categories', {
    extend: 'Ext.app.Controller',
    init: function() {
        var me = this;

        me.control({
            'LeftPanel': {
                'createNewCategory':me.createNew,
                'change': me.change
            }
        });

    },
    centerPanel : {
        getPanel : function(){return Ext.getCmp('centerPanel')},
        getActiveTab : function(){
           return this.getPanel().getActiveTab();
        },
        getCategoryInfo:function(_id){
            console.log(_id);
        },
        changeTitle:function(title){
            this.getActiveTab().setTitle(title);
        },
        removeActiveItems:function(){
            this.getActiveTab().removeAll();
        },
        setActiveItems:function(_id){
            this.removeActiveItems();
            console.log(_id)
        }
    },

    createNew:function(form){
        console.clear();
        form.getForm().submit({
            url             : '/categories/create',
            params          : form.getValues().name,
            success: function(form, action) {
                var result = Ext.JSON.decode(action.response.responseText);

                console.log(result);
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        //                            console.log('Failure', 'CLIENT_INVALID');
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        //                            console.log('Failure', 'AJAX CONNECT_INVALID');
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                    //                            console.log('Failure', 'SERVER_INVALID', action.result.msg);
                }
            }
        })
    },
    change : function(grid,rec){
        var me = this;
        me.centerPanel.changeTitle(rec.getData().name);

        console.clear();

        me.centerPanel.setActiveItems(rec.getData()._id);

        //debugger;
    }
 });