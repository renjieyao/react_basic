const {override,addLessLoader,fixBabelImports} = require ('customize-cra');

module.exports = override(
    fixBabelImports('antd',{
        libraryDirectory:'es',
        // style:true,
        style:'css'
    }),
    // addLessLoader({
    //     lessOptions:{
    //         javascriptEnabled: true,
    //         // modifyVars:{'primary-color':'green'}
    //     }
    // })
)