module.exports = function( elementName , _data , name ){
    name = name || elementName;
    const requireSys = require('./requireSys');
    requireSys({elementName:elementName,data:_data,src:'./' + name});
};