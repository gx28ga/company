import KTable from './KTable';

KTable.install = function(Vue){
    Vue.component(KTable.name,KTable);
}

export default KTable;