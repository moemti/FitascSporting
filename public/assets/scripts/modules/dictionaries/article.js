
HasDetails = false;


 

urls = {
    saveurl: '/savearticleajax',
    getmasterurl: '/getarticlesajax',
    getdetailurl: '/getarticleajax',
    deleteurl: '/deletearticleajax'

};

listdatafields=
    [
        { name: 'ArticleId', type: 'integer'},
        { name: 'Name', type: 'string'},
        { name: 'Code', type: 'string'},
        { name: 'IsActive', type: 'integer'},


    ]

listdatacolumns=
    [
        { text: 'Article', datafield: 'Name', width: '60%'},
        { text: 'Code', datafield: 'Code',  width:'30%'},
        { text: 'Active', datafield: 'IsActive', width: '10%', columntype: 'checkbox'},
        { text: 'ArticleId', datafield: 'ArticleId', hidden: true},
    ]
