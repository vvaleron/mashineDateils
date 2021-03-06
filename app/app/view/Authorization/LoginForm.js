Ext.define('MD.view.Authorization.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',


    initComponent:function(){
        var me = this;

        me.regNewUser = Ext.create('Ext.form.FieldSet',{
            title: 'Реєстрація',
            columnWidth: 0.5,
            checkboxToggle: true,
            collapsed: true,
            layout:'anchor',
            items :[{
                xtype: 'panel',
                anchor: '100%',
                title: false,
                frame: true,
                padding:0,
                bodyStyle:'background-color:#fff;',
                items:[{
                    xtype:'displayfield',
                    value:'Перейти до реєстрації ?',
                    margin:'10 0 20 10'
                }],
                bbar:[{
                    xtype:'button',
                    text:'Так',
                    width:'100%'
                }]
            }]
        }).show();

        me.loginFailMassage = function() { Ext.Msg.show({
                title:'Помилка логіну',
                msg: 'Такого аккаунта немає, чи бажаєте ви створити новий?',
                buttons: Ext.Msg.YESNO,
                buttonText:{
                    yes:'Так',
                    no:'Ні'
                },
                icon: Ext.Msg.QUESTION,
                fn: function(buttonId){
                    if(buttonId=='yes'){
                        me.close();
                    }
                }
            });
        };

        me.items = [
            {   value:'igorOliynik',
                allowBlank: false,
                fieldLabel: 'Логін',
                name: 'login',
                emptyText: 'Логін'
            },
            {
                value:1111,
                allowBlank: false,
                fieldLabel: 'Пароль',
                name: 'password',
                emptyText: 'Пароль',
                inputType: 'password'
            },
                me.regNewUser
        ];

            me.buttons = [{
                text:'Увійти',
                width:'100%',
                handler:function(){
                    me.fireEvent('userConfig', me);
                }
            }];

        Ext.apply(this,{
            title: 'Вхід',
            titleAlign:'center',
            frame:true,
            width: 320,
            bodyPadding: 10,
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            listeners:{
                afterlayout:function(form){
                    form.center();
                },
                beforeclose:function(form){
                    var panel = form.up('panel[itemId=first]'),
                        isCurrentUser = MD.users.getCurrentRecord().getData().currentUser;
                    if(!isCurrentUser) return;
                        panel.setTitle('Привітулі');
                }
            }
        });

        this.callParent(arguments);
    }
});
