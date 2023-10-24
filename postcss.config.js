/*
 * @Author: goupeng 2953854684@qq.com
 * @Date: 2023-09-11 22:41:15
 * @LastEditors: goupeng 2953854684@qq.com
 * @LastEditTime: 2023-09-11 22:54:02
 * @FilePath: \my-app\postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: "px", // 要转化的单位       
            viewportWidth: 750, // UI设计稿的宽度       
            unitPrecision: 6, // 转换后的精度，即小数点位数       
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换     
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw       
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw      
            selectorBlackList: [".andm", ".pc_", ".pc_pcModeMain", ".pc_pcModeBox"], // 指定不转换为视窗单位的类名，       
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换       
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false      
            replace: true, // 是否转换后直接更换属性值       
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配       
        }
    }
}